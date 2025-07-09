// src/pages/BookAppointment.jsx
import React, { useState } from 'react';
import '../../../assets/styles/book.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    datetime: '',
    address: '',
    gender: '',
    doctor: '',
    consultation: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updated = checked
          ? [...prev.consultation, value]
          : prev.consultation.filter((item) => item !== value);
        return { ...prev, consultation: updated };
      });
    } else if (type === 'radio') {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Submitted:', formData);
    alert('Appointment booked successfully!');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      datetime: '',
      address: '',
      gender: '',
      doctor: '',
      consultation: []
    });
  };

  return (
    <div className="book-appointment-page">
      <div className="book-appointment-header">BOOK APPOINTMENT</div>

      <div className="book-appointment-card">
        <div className="book-appointment-section-title">Basic Detail</div>

        <form className="book-appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient Name*</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Contact No.*</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Date Time*</label>
            <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Address*</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Gender*</label>
            <div className="radio-group">
              <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female</label>
            </div>
          </div>

          <div className="form-group">
            <label>Select Doctor*</label>
            <select name="doctor" value={formData.doctor} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Dr. Sharma">Dr. Sharma</option>
              <option value="Dr. Gupta">Dr. Gupta</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Consultation For:</label>
            <div className="checkbox-group">
              <label><input type="checkbox" value="Low Vision" onChange={handleChange} checked={formData.consultation.includes('Low Vision')} /> Low Vision</label>
              <label><input type="checkbox" value="Blur Vision" onChange={handleChange} checked={formData.consultation.includes('Blur Vision')} /> Blur Vision</label>
              <label><input type="checkbox" value="Irritation" onChange={handleChange} checked={formData.consultation.includes('Irritation')} /> Irritation</label>
              <label><input type="checkbox" value="Other" onChange={handleChange} checked={formData.consultation.includes('Other')} /> Other</label>
            </div>
          </div>

          <div className="book-appointment-buttons full-width">
            <button type="button" onClick={handleReset}>Reset</button>
            <button type="submit">Submit</button>
            <button type="button">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
