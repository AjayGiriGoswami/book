import React from "react";
import Header from "./Compoment/Navbar/Header";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProductDetails from "./Compoment/Home/ProductDetails";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/prodouct" element ={<Product/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/data" element ={<ProductDetails/>}/>
      </Routes>
    </>
  );
};

export default App;
