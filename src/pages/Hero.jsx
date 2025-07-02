import React from 'react';
import Face from '../assets/images/half_face.png';
import '../assets/styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Artificial Intelligence based Solution with SightSaver
      </h1>
      <p className="hero-subtitle">
        Detection of chronic illness using Data Analytics for detection of Chronic Illness from Retinal Images.
      </p>
      <img src={Face} alt="Eye Checkup" className="hero-image" />
    </section>
  );
};

export default Hero;
