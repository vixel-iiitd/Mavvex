import React from 'react';
import Navbar from './components/nav'

import { Route, Routes } from 'react-router-dom';

console.log('here')
function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/about" element={<Navbar />} />
      <Route path="/contact" element={<Navbar />} />
    </Routes>
  
  );
}

export default MainRouter;
