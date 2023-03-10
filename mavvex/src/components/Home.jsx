import React from "react";
import "./Home.css";
import BackgroundVideo from "./BackgroundVideo";
import HomeIndustries from "./HomeIndustries";

function Home() {
  return (
    <div>
      <section>
        <section>
          <BackgroundVideo />
        </section>
      </section>

      <section className="section1">
        <HomeIndustries />
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
