import React, { useState, useEffect } from 'react';
import '../../assets/styles/Diagnosis.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Feature from '../../assets/images/features_image.png';

const messages = [
  'SightSaver.ai can detect DR, HTNR, Glucoma and Occlusion.',
  'Our model is trained on 35,166 fundus images with 38 labels.',
  'The platform supports deployment across hospitals and camps.'
];

const DiagnosisSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
  <>



    <div className="diagnosis-section">
      <h2 className="diagnosis-heading">Disease Diagnostics</h2>

      <div className={`diagnosis-slider-row ${direction}`}>
        <button onClick={prevSlide} className="arrow-btn left-arrow">
          <FaChevronLeft />
        </button>

        <div className="diagnosis-slider">
          <p className="diagnosis-text">{messages[currentIndex]}</p>
        </div>

        <button onClick={nextSlide} className="arrow-btn right-arrow">
          <FaChevronRight />
        </button>
      </div>

      <div className="slider-controls">
        <div className="dots">
          {messages.map((_, i) => (
            <span key={i} className={`dot ${i === currentIndex ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
    </div>


    <div className="diagnosis-stats">
      <div className="stat-box">
        <h3 className="stat-number">10+</h3>
        <p className="stat-label">Hospitals</p>
      </div>
      <div className="stat-box">
        <h3 className="stat-number">224</h3>
        <p className="stat-label">Doctors</p>
      </div>
      <div className="stat-box">
        <h3 className="stat-number">35</h3>
        <p className="stat-label">Ophthalmologists</p>
      </div>
      <div className="stat-box">
        <h3 className="stat-number">374</h3>
        <p className="stat-label">Nurses and Others</p>
      </div>
    </div>

    <div className="work-process-section">
      <h2 className="work-process-heading">Our Work Process</h2>
      <p className="work-process-subtext">
        Below is the workflow of how the developed model works to detect diseases.
      </p>
      <div className="work-process-image-wrapper">
        <img
          src={Feature}
          alt="Work process diagram"
          className="work-process-image"
        />
      </div>
    </div>



  </>
  );
};

export default DiagnosisSlider;
