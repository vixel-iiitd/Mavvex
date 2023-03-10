import React from "react";
import "./Home.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.js";
import BackgroundVideo from "./BackgroundVideo";
import Industries from "./Industries";

function Home() {
  return (
    <div>
      <section>
        <Navbar />
        <section>
          <BackgroundVideo />
        </section>
      </section>

      <section className="section1">
        <Industries />
      </section>
      <section className="section2">
        <div className="hero">
          <p>Reasearch</p>
        </div>
      </section>
      <section className="section2">
        <div className="hero">
          <p>Company</p>
        </div>

      </section>
      <Footer />
    </div>
  );
}

export default Home;
