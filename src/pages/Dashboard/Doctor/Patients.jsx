import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../assets/styles/Patients.css';

const Patients = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [note, setNote] = useState('');

  const patients = [
    'Sara', 'Suresh Chabra', 'Ramesh Chabra', 'Sohan Chabra',
    'Raman', 'Rohit Bansal', 'Kuldeep Yadav', 'Sonia Dosanjh',
    'Gul Khan', 'Kashish Chabra', 'Karan Chabra'
  ];

  return (
    <div className="patients-container">
      <div className="patients-header">PATIENTS</div>

      <div className="patients-top-section">
        <div className="calendar-box">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </div>

        <div className="patient-list-box">
          <h4>Select Registered Patient</h4>
          <ul>
            {patients.map((p, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedPatient(p)}
                className={selectedPatient === p ? 'selected' : ''}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="selected-patient-info">
          <p>{selectedPatient ? selectedPatient : 'No Patient Selected'}</p>
        </div>
      </div>

      <div className="editor-section">
        <h4>Editor</h4>
        <button className="record-btn">🎙️ Start Recording</button>
        <textarea
          className="editor-textarea"
          rows={6}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="editor-buttons">
          <button className="btn">Print</button>
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Patients;
