import React, { useEffect, useState } from 'react';
import Slide1 from '../../assets/images/slide1.jpg';
import Slide2 from '../../assets/images/Slide2.jpg';
import Slide3 from '../../assets/images/slide3.jpg';
import '../../assets/styles/Hero.css';

const images = [Slide1, Slide2, Slide3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fade-out

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true); // Trigger fade-in for new image
      }, 400); // Match fade-out duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-title">
        Artificial Intelligence based Solution with SightSaver
      </h1>
      <p className="hero-subtitle">
        Detection of chronic illness using Data Analytics for detection of Chronic Illness from Retinal Images.
      </p>
      <img
        src={images[currentImageIndex]}
        alt="AI Eye"
        className={`hero-image ${fadeIn ? 'fade-in' : 'fade-out'}`}
      />
    </section>
  );
};

export default Hero;
