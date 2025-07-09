import React from 'react';
import '../../../assets/styles/ConsultationForm.css';

const ConsultationForm = () => {
  return (
    <div className="consultation-container">
      <div className="consultation-heading">CONSULTATION FORM</div>

      <form className="consultation-form">
        {/* Basic Details */}
        <fieldset className="form-section">
          <legend className="form-section-title">Basic Detail</legend>
          <div className="form-grid">
            <div className="form-group">
              <label>Patient Name*</label>
              <input type="text" placeholder="Patient Name" />
            </div>
            <div className="form-group">
              <label>Age*</label>
              <input type="text" placeholder="Age" />
            </div>
            <div className="form-group">
              <label>Height(in cms)*</label>
              <input type="text" placeholder="In cms" />
            </div>
            <div className="form-group">
              <label>Weight*</label>
              <input type="text" placeholder="In kgs" />
            </div>
            <div className="form-group">
              <label>Reason for Consultation</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>History*</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Medications</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Relevant Family History</label>
              <input type="text" />
            </div>
            <div className="form-group full-width">
              <label>Occupation details*</label>
              <input type="text" />
            </div>
          </div>
        </fieldset>

        {/* Consultation Reason */}
        <fieldset className="form-section">
          <legend className="form-section-title">Consultation Reason</legend>
          <div className="form-grid">
            <div className="form-group">
              <label>Problem in which eye:</label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Left</label>
                <label><input type="checkbox" /> Right</label>
              </div>
            </div>
            <div className="form-group">
              <label>Duration:</label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Days</label>
                <label><input type="checkbox" /> Weeks</label>
                <label><input type="checkbox" /> Months</label>
                <label><input type="checkbox" /> Years</label>
              </div>
            </div>
            <div className="form-group">
              <label>Do you have Headache?</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Allergies</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Any contact with person with contagious eye infection?</label>
              <input type="text" />
            </div>
          </div>
        </fieldset>

        {/* Buttons */}
        <div className="consultation-buttons">
          <button type="button">Generate Prescription</button>
          <button type="button">Optometrist</button>
          <button type="button">Lab Test</button>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
