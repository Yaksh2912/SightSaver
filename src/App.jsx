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
import Dashboard from './pages/Dashboard'; // 👈 Import your dashboard component

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Show navbar only outside dashboard */}
      {location.pathname !== '/dashboard' && <Navbar />}

      {/* Landing Page Sections (shown only on root path "/") */}
      {location.pathname === '/' && (
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
      )}

      {/* Top-level routes */}
      <Routes>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
