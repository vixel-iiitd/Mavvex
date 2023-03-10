import React from "react";
import "./Home.css";
import BackgroundVideo from "./BackgroundVideo";
import UseCase1 from "./UseCase1";

function Home() {
  return (
    <div>
      <section>
        <section>
          <BackgroundVideo />
        </section>
      </section>

      <section className="section1">
        <UseCase1 />
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
