import React, { useState } from 'react';
import '../../../assets/styles/Vision.css';

const Vision = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    odSphere: '', odCylinder: '', odAxis: '', odAdd: '',
    osSphere: '', osCylinder: '', osAxis: '', osAdd: '',
    muscleFunction: 'Normal',
    otherProblem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      patientName: '',
      odSphere: '', odCylinder: '', odAxis: '', odAdd: '',
      osSphere: '', osCylinder: '', osAxis: '', osAdd: '',
      muscleFunction: 'Normal',
      otherProblem: ''
    });
  };

  const handleSubmit = () => {
    console.log('Forwarding Data:', formData);
    alert('Data forwarded to doctor!');
  };

  return (
    <div className="vision-test-container">
      <div className="vision-test-title">VISION TEST</div>

      <form className="vision-form" onSubmit={(e) => e.preventDefault()}>
        <label className="input-label">Patient Name*</label>
        <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />

        <button type="button" className="check-btn">Check Vision</button>

        {/* OD Right Eye */}
        <fieldset className="eye-section">
          <legend>O.D. - Right Eye</legend>
          <div className="eye-row">
            <div><label>Sphere</label><input name="odSphere" value={formData.odSphere} onChange={handleChange} /></div>
            <div><label>Cylinder</label><input name="odCylinder" value={formData.odCylinder} onChange={handleChange} /></div>
          </div>
          <div className="eye-row">
            <div><label>Axis</label><input name="odAxis" value={formData.odAxis} onChange={handleChange} /></div>
            <div><label>Add</label><input name="odAdd" value={formData.odAdd} onChange={handleChange} /></div>
          </div>
        </fieldset>

        {/* OS Left Eye */}
        <fieldset className="eye-section">
          <legend>O.S. - Left Eye</legend>
          <div className="eye-row">
            <div><label>Sphere</label><input name="osSphere" value={formData.osSphere} onChange={handleChange} /></div>
            <div><label>Cylinder</label><input name="osCylinder" value={formData.osCylinder} onChange={handleChange} /></div>
          </div>
          <div className="eye-row">
            <div><label>Axis</label><input name="osAxis" value={formData.osAxis} onChange={handleChange} /></div>
            <div><label>Add</label><input name="osAdd" value={formData.osAdd} onChange={handleChange} /></div>
          </div>
        </fieldset>

        {/* Muscle Function */}
        <div className="muscle-section">
          <label>Muscle Function</label>
          <div className="radio-group">
            <label><input type="radio" name="muscleFunction" value="Normal" checked={formData.muscleFunction === 'Normal'} onChange={handleChange} /> Normal</label>
            <label><input type="radio" name="muscleFunction" value="Abnormal" checked={formData.muscleFunction === 'Abnormal'} onChange={handleChange} /> Abnormal</label>
          </div>
        </div>

        {/* Other Problems */}
        <label className="input-label">Any other problem:</label>
        <input type="text" name="otherProblem" value={formData.otherProblem} onChange={handleChange} />

        <div className="form-buttons">
          <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
          <button type="button" onClick={handleSubmit} className="forward-btn">Forward to Doctor</button>
        </div>
      </form>
    </div>
  );
};

export default Vision;
