// src/pages/Landing/LandingPage.js
import React from 'react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Diagnosis from './Diagnosis';
import Contact from './Contact';

const LandingPage = () => {
  return (
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
    </main>
  );
};

export default LandingPage;
