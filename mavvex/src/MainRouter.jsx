import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function MainRouter() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default MainRouter;
