import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarListing from "../pages/CarListing";
import Contact from "../pages/Contact";
import Login from "../components/UI/Login";
import SignUp from "../components/UI/SignUp";
import CommonSection from "../components/UI/CommonSection";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/CommonSection" element={<CommonSection />} />
    </Routes>
  );
};

export default Routers;
