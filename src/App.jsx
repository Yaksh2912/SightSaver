import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import LoginModal from './pages/LoginModal';
import RegisterModal from './pages/RegisterModal';
import Navbar from './components/Navbar';
import Features from './pages/Features';
import Diagnosis from './pages/Diagnosis';
import Contact from './pages/Contact';
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
