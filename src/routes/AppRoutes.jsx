// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import Contact from '../pages/Contact';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<><Home /><LoginModal /></>} />
      <Route path="/register" element={<><Home /><RegisterModal /></>} />
    </Routes>
  );
};

export default AppRoutes;
