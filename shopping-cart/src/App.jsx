import React from "react";

import Cart from "./components/Cart";
import ProductList from "./components/ProductionList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛍 Shopping Cart</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ProductList />
        <Cart/>
      </div>
    </div>
  );
}

export default App;
