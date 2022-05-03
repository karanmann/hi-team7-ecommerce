import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/products/:productId" element={<Product />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
