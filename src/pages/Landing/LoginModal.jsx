import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/LoginModal.css';

const LoginModal = () => {
  const navigate = useNavigate();
  
  const closeModal = () => {
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-overlay"  onClick={closeModal}>
      <div className="login-modal"  onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={closeModal}>×</span>
        <h3>Sign In</h3>

        <label>Email</label>
        <input type="email" placeholder="Enter email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter Password" required />

        <div className="checkbox-row">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button className="submit-btn" onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default LoginModal;
