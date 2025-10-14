import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../fetures/cartSlice";


const products = [
  { id: 1, name: "Apple", price: 50 },
  { id: 2, name: "Banana", price: 30 },
  { id: 3, name: "Mango", price: 80 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "20px" }}>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <span>{p.name} - ₹{p.price}</span>
          <button
            onClick={() => dispatch(addItem(p))}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
