import React, { useState } from 'react';
import '../../../assets/styles/DoctorList.css';

const DoctorList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    email: '',
    mobile: '',
    department: '',
    license: '',
  });

  const rowsPerPage = 7;

  const doctors = [
    { id: 24, name: "Neeraj", email: "neerajkn86@gmail.com", mobile: "8676566464", department: "Dentist", license: "DL432" },
    { id: 22, name: "manik", email: "pb06manik@gmail.com", mobile: "6283122501", department: "ENT", license: "DO42927" },
    { id: 15, name: "Gulbadan", email: "gulbadan@cdac.in", mobile: "0975347653", department: "ENT", license: "DO61833" },
    { id: 14, name: "sumit", email: "sumit@mailinator.com", mobile: "0977177778", department: "ENT", license: "DO3212" },
    { id: 13, name: "Mukesh", email: "mukesh@mailinator.com", mobile: "0976857433", department: "ENT", license: "AL432563" },
    { id: 12, name: "kashishc12", email: "kashish12334@mailinator.com", mobile: "9066383888", department: "Tester", license: "AL43256" },
    { id: 11, name: "kashishc", email: "kashish123@mailinator.com", mobile: "9066383888", department: "Tester", license: "AL43256" },
    { id: 10, name: "kashishc", email: "kashishc@mailinator.com", mobile: "9066383888", department: "Tester", license: "AL4321" },
    { id: 8, name: "user mailinator", email: "user23@mailinator.com", mobile: "9832732727", department: "Optho", license: "444555" },
    { id: 4, name: "kashishc2234", email: "kashish.owc2234@gmail.com", mobile: "098865544", department: "AAIA", license: "666777" },
  ];

  const handleFilterChange = (e, key) => {
    setCurrentPage(1); // Reset to first page when filter changes
    setFilters({ ...filters, [key]: e.target.value.toLowerCase() });
  };

  const filteredDoctors = doctors.filter(doc =>
    doc.id.toString().includes(filters.id) &&
    doc.name.toLowerCase().includes(filters.name) &&
    doc.email.toLowerCase().includes(filters.email) &&
    doc.mobile.toLowerCase().includes(filters.mobile) &&
    doc.department.toLowerCase().includes(filters.department) &&
    doc.license.toLowerCase().includes(filters.license)
  );

  const totalPages = Math.ceil(filteredDoctors.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentDoctors = filteredDoctors.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="doctor-list-page">
      <div className="doctor-list-header">DOCTORS LIST</div>
      <div className="doctor-list-table-wrapper">
        <table className="doctor-list-table">
          <thead>
            <tr>
              <th><input placeholder="ID" onChange={(e) => handleFilterChange(e, 'id')} /></th>
              <th><input placeholder="Name" onChange={(e) => handleFilterChange(e, 'name')} /></th>
              <th><input placeholder="Email" onChange={(e) => handleFilterChange(e, 'email')} /></th>
              <th><input placeholder="Mobile" onChange={(e) => handleFilterChange(e, 'mobile')} /></th>
              <th><input placeholder="Department" onChange={(e) => handleFilterChange(e, 'department')} /></th>
              <th><input placeholder="License" onChange={(e) => handleFilterChange(e, 'license')} /></th>
            </tr>
          </thead>
          <tbody>
            {currentDoctors.length > 0 ? (
              currentDoctors.map(doc => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.name}</td>
                  <td>{doc.email}</td>
                  <td>{doc.mobile}</td>
                  <td>{doc.department}</td>
                  <td>{doc.license}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '1rem' }}>
                  No matching doctors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="doctor-pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>«</button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>»</button>
      </div>
    </div>
  );
};

export default DoctorList;
