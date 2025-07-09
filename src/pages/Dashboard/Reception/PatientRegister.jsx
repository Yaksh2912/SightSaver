import React, { useState } from 'react';
import '..//../../assets/styles/PatientRegister.css';

const PatientRegister = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    dob: '',
    address: '',
    gender: '',
    maritalStatus: '',
    insuranceName: '',
    insuranceNumber: '',
    consultation: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        consultation: checked
          ? [...prev.consultation, value]
          : prev.consultation.filter((item) => item !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      contact: '',
      dob: '',
      address: '',
      gender: '',
      maritalStatus: '',
      insuranceName: '',
      insuranceNumber: '',
      consultation: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // replace with API call
  };

  return (
    <div className="patient-register-container">
      <div className="form-title">PATIENT REGISTRATION</div>

      <form className="patient-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Basic Detail</legend>
          <div className="form-row">
            <div>
              <label>Patient Name*</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Contact No.*</label>
              <input type="text" name="contact" value={form.contact} onChange={handleChange} required />
            </div>
            <div>
              <label>Date of Birth</label>
              <input type="date" name="dob" value={form.dob} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="full-width">
              <label>Patient’s Address*</label>
              <input type="text" name="address" value={form.address} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Gender*</label>
              <div className="radio-group">
                <label><input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} /> Male</label>
                <label><input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} /> Female</label>
              </div>
            </div>

            <div>
              <label>Marital Status</label>
              <div className="radio-group">
                {['Single', 'Married', 'Divorced', 'Widowed'].map(status => (
                  <label key={status}>
                    <input type="radio" name="maritalStatus" value={status} checked={form.maritalStatus === status} onChange={handleChange} /> {status}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Insurance Info</legend>
          <div className="form-row">
            <div>
              <label>Insurance Name</label>
              <input type="text" name="insuranceName" value={form.insuranceName} onChange={handleChange} />
            </div>
            <div>
              <label>Insurance Number</label>
              <input type="text" name="insuranceNumber" value={form.insuranceNumber} onChange={handleChange} />
            </div>
            <div>
              <label>Consultation For:</label>
              <div className="checkbox-group">
                {['Low Vision', 'Blur Vision', 'Irritation', 'Other'].map(item => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={form.consultation.includes(item)}
                      onChange={handleChange}
                    /> {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-buttons">
          <button type="button" className="btn reset" onClick={handleReset}>Reset</button>
          <button type="submit" className="btn submit">Submit</button>
          <button type="button" className="btn close">Close</button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegister;
