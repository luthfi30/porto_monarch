import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import MenProducts from "./pages/MenProducts";
import WomenProducts from "./pages/WomenProducts";

//Import Components

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
