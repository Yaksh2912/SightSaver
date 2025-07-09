import React from 'react';
import '../../../assets/styles/PatientDetails.css';

const PatientDetails = () => {
  return (
    <div className="pd-container">
      <div className="pd-tabs">
        <button className="pd-tab pd-active">Basic Details</button>
        <button className="pd-tab">History</button>
        <button className="pd-tab">Vision Test</button>
        <button className="pd-tab">Reports</button>
        <button className="pd-tab">Prescription</button>
        <button className="pd-tab">Billings</button>
      </div>

      <div className="pd-section-title">Patient Details</div>
      <form className="pd-form">
        <div className="pd-row">
          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Middle Name" />
          <input type="text" placeholder="Last Name*" />
        </div>
        <div className="pd-row">
          <input type="date" placeholder="Date of Birth*" />
          <select>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input type="text" placeholder="Mobile Number*" />
        </div>
        <div className="pd-row">
          <input type="text" placeholder="Address*" />
          <input type="text" placeholder="Postal Code" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="pd-row">
          <input type="text" placeholder="City*" />
          <input type="text" placeholder="State*" />
          <input type="text" placeholder="Country*" />
        </div>

        <div className="pd-section-title">Insurance Details</div>
        <div className="pd-row">
          <input type="text" placeholder="Enter Policy holder's name" />
          <input type="text" placeholder="Enter insurance provider name" />
          <input type="text" placeholder="Enter policy number" />
        </div>
        <div className="pd-row">
          <input type="date" placeholder="Start Date" />
          <input type="date" placeholder="End Date" />
          <input type="text" placeholder="Enter coverage amount" />
        </div>

        <button type="submit" className="pd-submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default PatientDetails;
