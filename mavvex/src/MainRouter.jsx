import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.js";
import Healthcare from "./components/Healthcare";
import Retail from "./components/Retail";
import Agriculture from "./components/Agriculture";
import ConversationalAI from "./components/ConversationalAI";
import SecurityPrivacyAI from "./components/SecurityPrivacyAI";
import UseCase1 from "./components/UseCase1";
import ContactUs from "./components/ContactUs";

function MainRouter() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Healthcare" element={<Healthcare />} />
          <Route path="/Retail" element={<Retail />} />
          <Route path="/Agriculture" element={<Agriculture />} />
          <Route path="/ConversationalAI" element={<ConversationalAI />} />
          <Route path="/SecurityPrivacyAI" element={<SecurityPrivacyAI />} />
          <Route path="/UseCase1" element={<UseCase1 />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default MainRouter;
