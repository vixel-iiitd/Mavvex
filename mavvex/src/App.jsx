import './App.css';

// import {useState, useEffect} from "react";
// import {getTest} from "./functions/test";
import React from 'react';
// import ReactDOM from 'react-dom';
import MainRouter from "./MainRouter.jsx";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => (

  <div>
    <Router>
        <MainRouter />
    </Router>
    <p>HELLO</p>
  </div>
);

export default App;