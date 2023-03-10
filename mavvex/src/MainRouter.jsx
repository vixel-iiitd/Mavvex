import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.js";
import Industries from "./components/Industries";

function MainRouter() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Industries" element={<Industries />} />
      </Routes>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default MainRouter;
