import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Market from "../pages/market";
import AboutUs from "../pages/about us";
import Blog from "../pages/blog";
import Faqs from "../pages/faq";
import Register from "../pages/register";
import Login from "../pages/login";
import Artist from "../pages/artist";
import Home from "../pages/home";

export default function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/home" exact element={<Home />} />
          <Route path="/market" exact element={<Market />} />
          <Route path="/artists" exact element={<Artist />} />
          <Route path="/aboutUs" exact element={<AboutUs />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/faq" exact element={<Faqs />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
