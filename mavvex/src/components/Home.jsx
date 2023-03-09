import React from "react";
import "./Home.css";
import Navbar from "./Navbar.jsx";
import BackgroundVideo from "./BackgroundVideo";

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
        <div className="hero">
          <p>Industries</p>
        </div>
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
    </div>
  );
}

export default Home;
