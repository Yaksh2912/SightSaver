import React, { useState } from 'react';
import '../../../assets/styles/listing.css'; // adjust path if needed

const AppointmentsList = () => {
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    datetime: '',
    mobile: '',
    gender: '',
    consultation: ''
  });

  const appointments = [
    { id: 9, name: 'Karan Jaiswal', datetime: '05/08/2024 23:39', mobile: '7821566577', gender: 'Male', consultation: 'Blur,Irritation' },
    { id: 8, name: 'Ramesh', datetime: '24/07/2024 02:15', mobile: '09171765555', gender: 'Male', consultation: 'Blur,Irritation' },
    { id: 7, name: 'Ramesh', datetime: '24/07/2024 02:15', mobile: '09171765555', gender: 'Male', consultation: 'Blur,Irritation' },
    { id: 6, name: 'Ramesh', datetime: '24/07/2024 02:15', mobile: '09171765555', gender: 'Male', consultation: 'Blur,Irritation' },
  ];

  const handleChange = (e, key) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  const filtered = appointments.filter((a) =>
    a.id.toString().includes(filters.id) &&
    a.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    a.datetime.toLowerCase().includes(filters.datetime.toLowerCase()) &&
    a.mobile.toLowerCase().includes(filters.mobile.toLowerCase()) &&
    a.gender.toLowerCase().includes(filters.gender.toLowerCase()) &&
    a.consultation.toLowerCase().includes(filters.consultation.toLowerCase())
  );

  return (
    <div className="appointments-page">
      <div className="appointments-header">APPOINTMENTS LIST</div>

      <div className="appointments-table-wrapper">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date Time</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Consultation</th>
            </tr>
            <tr>
              <th><input type="text" onChange={(e) => handleChange(e, 'id')} placeholder="Search ID" /></th>
              <th><input type="text" onChange={(e) => handleChange(e, 'name')} placeholder="Search Name" /></th>
              <th><input type="text" onChange={(e) => handleChange(e, 'datetime')} placeholder="Search Date" /></th>
              <th><input type="text" onChange={(e) => handleChange(e, 'mobile')} placeholder="Search Mobile" /></th>
              <th><input type="text" onChange={(e) => handleChange(e, 'gender')} placeholder="Search Gender" /></th>
              <th><input type="text" onChange={(e) => handleChange(e, 'consultation')} placeholder="Search Type" /></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.datetime}</td>
                  <td>{item.mobile}</td>
                  <td>{item.gender}</td>
                  <td>{item.consultation}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '1rem' }}>No matching records</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsList;
