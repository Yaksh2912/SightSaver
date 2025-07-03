import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './pages/Landing/Hero';
import About from './pages/Landing/About';
import LoginModal from './pages/Landing/LoginModal';
import RegisterModal from './pages/Landing/RegisterModal';
import Navbar from './components/Navbar';
import Features from './pages/Landing/Features';
import Diagnosis from './pages/Landing/Diagnosis';
import Contact from './pages/Landing/Contact';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <Navbar />

      {/* Single Page Sections */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="diagnosis">
          <Diagnosis />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="Footer">
          <Footer />
        </section>
      </main>

      {/* Modals on top (triggered via route change) */}
      <Routes>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
      </Routes>
    </>
  );
};

export default App;
