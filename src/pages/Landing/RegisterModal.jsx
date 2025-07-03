import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/RegisterModal.css';

const RegisterModal = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate('/');
  };

  return (
    <div className="register-overlay" onClick={closeModal}>
      <div className="register-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>×</button>
        <h2 className="title">Sign Up</h2>
        <form className="register-form">
          <label>Email *</label>
          <input type="email" placeholder="Enter email address" required />

          <label>Username *</label>
          <input type="text" placeholder="Enter username" required />

          <label>Select Role *</label>
          <select required>
            <option value="">Select...</option>
            <option>Doctor</option>
            <option>Ophthalmologist</option>
            <option>Other</option>
          </select>

          <label>License Number</label>
          <input type="text" placeholder="License Number" />

          <label>Department</label>
          <input type="text" placeholder="Department" />

          <label>Mobile Number *</label>
          <input type="tel" placeholder="Enter Mobile Number" required />

          <label>Password *</label>
          <input type="password" placeholder="Enter Password" required />

          <label>Confirm Password *</label>
          <input type="password" placeholder="Confirm Password" required />

          <p className="terms">
            By registering you agree to the <a href="#">Terms of Use</a>
          </p>

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
