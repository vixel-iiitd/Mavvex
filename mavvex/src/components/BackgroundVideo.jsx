import React from "react";
import videoBG from "../Videos/Video1.mp4";

function BackgroundVideo() {
  return (
    <div className="videoBG">
      <video src={videoBG} autoPlay loop muted></video>
    </div>
  );
}

export default BackgroundVideo;
