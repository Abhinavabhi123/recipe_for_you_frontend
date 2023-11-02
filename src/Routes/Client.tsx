import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home";

import Products from "../Pages/Products";
import Authentication from "../Middleware/AuthMiddleware";
import Footer from "../Components/Footer/Footer";

export default function Client() {
  return (
    <div>
      <Navbar />
      <Authentication>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Authentication>
      <Footer />
    </div>
  );
}
