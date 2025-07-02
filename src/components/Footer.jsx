import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGoogle, FaDribbble } from 'react-icons/fa';
import Logo from '../assets/images/sightsaver_cloud.png'; // your Sightsaver logo
import Cdac from '../assets/images/cdac-logo.png';
import Gmch from '../assets/images/gmch.png';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Branding + Logos */}
        <div className="footer-branding">
          <img src={Logo} alt="Sightsaver Logo" className="footer-logo" />
          <p className="footer-tagline">AI based Solution with Sightsaver</p>
          <div className="footer-logos">
            <img src={Cdac} alt="CDAC" />
            <img src={Gmch} alt="GMCH" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <div className="footer-col">
            <h4>Disease Detections</h4>
            <a href="#">DR</a>
            <a href="#">HTNR</a>
            <a href="#">Glaucoma</a>
            <a href="#">Vascular Occlusion</a>
            <a href="#">Others</a>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <a href="#">About</a>
            <a href="#">Subscription</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-socials">
        <FaFacebookF />
        <FaGithub />
        <FaLinkedinIn />
        <FaGoogle />
        <FaDribbble />
      </div>

      <div className="copyright">
        <p className="footer-copy">
            © 2025 SIGHTSAVER. All Rights Reserved.<br />
            Designed and Developed by C-DAC Mohali
          </p>
      </div>
    </footer>
  );
};

export default Footer;