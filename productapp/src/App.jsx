import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Component/ProductList";
import ProductDetail from "./Component/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
