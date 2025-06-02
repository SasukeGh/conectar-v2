import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Menu from "../pages/menu"; // Make sure this import uses consistent casing
import Dev from "../pages/dev";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/menu" element={<Menu />} /> {/* Add this missing route */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
    </Routes>
  );
};

export default Routers;
