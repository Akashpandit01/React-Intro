import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);

      // Get unique categories
      const uniqueCategories = [...new Set(data.products.map(p => p.category))];
      setCategories(uniqueCategories);
    }
    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredProducts = products
    .filter(p => (selectedCategory ? p.category === selectedCategory : true))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Store</h1>

      {/* Filter by category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Sort by price */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{ padding: "5px" }}
      >
        <option value="">Sort By Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      {/* Product Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "20px" }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img src={product.thumbnail} alt={product.title} width="150" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
