import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/styles/Landing.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openLogin = () => navigate('/login', { state: { backgroundLocation: location } });
  const openRegister = () => navigate('/register', { state: { backgroundLocation: location } });

  return (
    <div className="landing-container">
      <Navbar />
    </div>
  );
};

export default LandingPage;
