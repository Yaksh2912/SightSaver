import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/Navbar.css';
import CDAC from '../assets/images/cdac-logo.png';
import MedClg from '../assets/images/gmch.png';
import Ministry from '../assets/images/ministry-logo.png';
import Sightsaver from '../assets/images/sight-saver-logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openLogin = () => navigate('/login', { state: { backgroundLocation: location } });
  const openRegister = () => navigate('/register', { state: { backgroundLocation: location } });

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const languageRef = useRef(null);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLanguageOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (languageRef.current && !languageRef.current.contains(e.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close menu on mobile after scroll
    }
  };

  return (
    <header className={`navbar sticky ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-top">
        <div className="navbar-left">
          <img src={Sightsaver} alt="Sightsaver Logo" className="logo" />
          <span className="brand-name">SIGHTSAVER</span>
          <div className="vertical-line" />
          <img src={Ministry} alt="Ministry Logo" className="ministry-logo" />
        </div>

        <div className="navbar-right">
          <div className="language-dropdown" ref={languageRef} onClick={() => setLanguageOpen(!languageOpen)}>
            {selectedLanguage} <span className="dropdown-icon">▼</span>
            {languageOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleLanguageSelect('English')}>English</li>
                <li onClick={() => handleLanguageSelect('Hindi')}>हिन्दी</li>
              </ul>
            )}
          </div>
          <div className="vertical-line" />
          <div className="partner-logos">
            <img src={CDAC} alt="CDAC Logo" className="circle-logo" />
            <img src={MedClg} alt="Institute Logo" className="circle-logo" />
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        </div>
      </div>

      <nav className={`navbar-bottom ${menuOpen ? 'show' : ''}`}>
        <div className="navbar-links">
          <button onClick={() => handleScrollTo('home')}>Home</button>
          <button onClick={() => handleScrollTo('about')}>About Us</button>
          <button onClick={() => handleScrollTo('features')}>Features</button>
          <button onClick={() => handleScrollTo('diagnosis')}>Disease Diagnostics</button>
          <button onClick={() => handleScrollTo('contact')}>Contact</button>
        </div>
        <div className="auth-buttons">
          <button className="btn login" onClick={openLogin}>Login</button>
          <button className="btn register" onClick={openRegister}>Register</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
