import React, { useState, useEffect } from 'react';
import '../../../assets/styles/Prescription.css';

const data = [
  { id: 12, name: 'Sam', reason: 'Blur', mobile: '0327423946', date: '18/03/2025', gender: 'Male' },
  { id: 11, name: 'Suresh Chabra', reason: '', mobile: '9729453681', date: '07/11/2024', gender: 'Male' },
  { id: 10, name: 'Ramesh Chabra', reason: '', mobile: '9729453681', date: '07/11/2024', gender: 'Male' },
  { id: 9, name: 'Sabana Chabra', reason: '', mobile: '9729453681', date: '27/11/2024', gender: 'Male' },
  { id: 8, name: 'Raman', reason: 'Irritation,Other', mobile: '34343434343434', date: '22/07/2024', gender: 'Female' },
  { id: 7, name: 'Rohit Bansal', reason: 'Irritation,Low', mobile: '9373682631', date: '15/07/2024', gender: 'Male' },
  { id: 6, name: 'Kuldeep Yadav', reason: 'Irritation,Blur', mobile: '0878654456', date: '16/07/2024', gender: 'Male' },
  { id: 5, name: 'Sonia Dosanjh', reason: 'Blur,Other', mobile: '0975467464', date: '15/07/2024', gender: 'Female' },
];

const prescription = () => {
  const [search, setSearch] = useState({
    id: '', name: '', reason: '', mobile: '', date: '', gender: ''
  });

  const handleSearch = (field, value) => {
    setSearch(prev => ({ ...prev, [field]: value }));
  };

  const filteredData = data.filter(patient =>
    patient.id.toString().includes(search.id) &&
    patient.name.toLowerCase().includes(search.name.toLowerCase()) &&
    patient.reason.toLowerCase().includes(search.reason.toLowerCase()) &&
    patient.mobile.includes(search.mobile) &&
    patient.date.includes(search.date) &&
    patient.gender.toLowerCase().includes(search.gender.toLowerCase())
  );

  return (
    <div className="prescription-container">
      <div className="prescription-title">PATIENTS LIST</div>

      <table className="prescription-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Consultation Reason</th>
            <th>Mobile</th>
            <th>Date</th>
            <th>Gender</th>
            <th>View</th>
          </tr>
          <tr>
            <th><input type="text" onChange={e => handleSearch('id', e.target.value)} /></th>
            <th><input type="text" onChange={e => handleSearch('name', e.target.value)} /></th>
            <th><input type="text" onChange={e => handleSearch('reason', e.target.value)} /></th>
            <th><input type="text" onChange={e => handleSearch('mobile', e.target.value)} /></th>
            <th><input type="text" onChange={e => handleSearch('date', e.target.value)} /></th>
            <th><input type="text" onChange={e => handleSearch('gender', e.target.value)} /></th>
            <th><input type="text" disabled placeholder="-" /></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((patient, idx) => (
            <tr key={idx}>
              <td data-label="ID">{patient.id}</td>
              <td data-label="Name">{patient.name}</td>
              <td data-label="Reason">{patient.reason}</td>
              <td data-label="Mobile">{patient.mobile}</td>
              <td data-label="Date">{patient.date}</td>
              <td data-label="Gender">{patient.gender}</td>
              <td data-label="View">
                <button className="view-btn">Prescription / Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default prescription;
