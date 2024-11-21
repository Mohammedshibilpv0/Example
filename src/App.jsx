import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";
import AuPay from "./pages/Product";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/aupay" element={<AuPay />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
