import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import videoBG from './Videos/Video1.mp4'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        
      
        <MainRouter />
      </Router>
    </div>
  );
}

export default App;
