import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/DashboardNavbar.css';
import sightLogo from '../assets/images/sight-saver-logo.png';
import ministryLogo from '../assets/images/ministry-logo.png';
import cdacLogo from '../assets/images/cdac-logo.png';
import medicalLogo from '../assets/images/gmch.png';

const DashboardNavbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const langRef = useRef();
  const userRef = useRef();

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dashboard-header">
      <div className="dashboard-left">
        <img src={sightLogo} alt="SightSaver" className="dashboard-logo" />
        <span className="dashboard-title">SIGHTSAVER</span>
        <img src={ministryLogo} alt="Ministry" className="dashboard-ministry" />
      </div>

      <div className="dashboard-right">
        {/* Language dropdown */}
        <div className="dashboard-dropdown" ref={langRef}>
          <button className="dashboard-dropdown-btn" onClick={() => setLangOpen(!langOpen)}>
            English ▼
          </button>
          {langOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">English</div>
              <div className="dropdown-item">Hindi</div>
              <div className="dropdown-item">Punjabi</div>
            </div>
          )}
        </div>

        {/* User dropdown */}
        <div className="dashboard-dropdown" ref={userRef}>
          <button className="dashboard-dropdown-btn" onClick={() => setUserOpen(!userOpen)}>
            <div className="dashboard-user">
              <div className="dashboard-avatar">👤</div>
              <span>Sonia Dosanjh</span>
            </div>
          </button>
          {userOpen && (
            <div className="dropdown-menu right-align">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>

        {/* Logos */}
        <img src={cdacLogo} alt="CDAC" className="dashboard-circle-logo" />
        <img src={medicalLogo} alt="Medical" className="dashboard-circle-logo" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
