import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Router>
          <MainRouter />
        </Router>
      </div>
    </div>
  );
}

export default App;
