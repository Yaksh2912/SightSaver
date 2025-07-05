import React from 'react';
import '../../../assets/styles/PatientRegister.css';

const PatientRegister = () => {
  return (
    <section className="pr-dashboard-content">
      <div className="pr-form-container">
        <div className="pr-form-title">PATIENT REGISTRATION</div>

        <form className="pr-registration-form">
          <fieldset>
            <legend>Basic Detail</legend>
            <div className="pr-form-grid">
              <div>
                <label>Patient Name*</label>
                <input type="text" />
              </div>
              <div>
                <label>Contact No.*</label>
                <input type="tel" />
              </div>
              <div>
                <label>Date of Birth</label>
                <input type="date" />
              </div>
              <div className="pr-full-width">
                <label>Patient's Address*</label>
                <input type="text" />
              </div>
              <div>
                <label>Gender*</label>
                <div className="pr-radio-group">
                  <label><input type="radio" name="gender" /> Male</label>
                  <label><input type="radio" name="gender" /> Female</label>
                </div>
              </div>
              <div>
                <label>Marital Status</label>
                <div className="pr-radio-group">
                  <label><input type="radio" name="marital" /> Single</label>
                  <label><input type="radio" name="marital" /> Married</label>
                  <label><input type="radio" name="marital" /> Divorced</label>
                  <label><input type="radio" name="marital" /> Widowed</label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Insurance Info</legend>
            <div className="pr-form-grid">
              <div>
                <label>Insurance Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Insurance Number</label>
                <input type="text" />
              </div>
              <div className="pr-full-width">
                <label>Consultation For:</label>
                <div className="pr-checkbox-group">
                  <label><input type="checkbox" /> Low Vision</label>
                  <label><input type="checkbox" /> Blur Vision</label>
                  <label><input type="checkbox" /> Irritation</label>
                  <label><input type="checkbox" /> Other</label>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="pr-button-group">
            <button type="reset" className="pr-btn primary">Reset</button>
            <button type="submit" className="pr-btn primary">Submit</button>
            <button type="button" className="pr-btn primary">Close</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PatientRegister;
