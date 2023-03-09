import React from "react";
import videoBG from "../Videos/Video1.mp4";
import "./BackgroundVideo.css";

function BackgroundVideo() {
  return (
    <div class="video-container">
      <div>
        <div className="overlay"></div>
        <video src={videoBG} type="video/mp4" autoPlay loop muted />
      </div>
      <div className="Video-text">
        <h2>AN AI BASED CONSULTANCY AND </h2>
        <h2>PRODUCT DEVELOPMENT ENTERPRISE</h2>
      </div>
    </div>
  );
}

export default BackgroundVideo;
