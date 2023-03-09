import React from "react";
import "./Home.css";
import Navbar from "./Navbar.jsx";
import BackgroundVideo from "./BackgroundVideo";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <BackgroundVideo />
      </div>

      <div className="container1">
        <h1>Hi</h1>
      </div>
    </div>
  );
}

export default Home;
