import React, { useState, useEffect } from 'react';
import '../../../assets/styles/OphthalmologistList.css';

const USERS_PER_PAGE = 5;

const ophthalmologists = [
  { id: 21, name: 'Test12345', email: 'kishu5412@gmail.com', mobile: '0987812322' },
  { id: 20, name: 'Test12345', email: 'kishu541@gmail.com', mobile: '0987812322' },
  { id: 19, name: 'Test12345', email: 'tester12345678@mailinator.com', mobile: '0987812322' },
  { id: 18, name: 'Test12345', email: 'tester12@mailinator.com', mobile: '0987812322' },
  { id: 17, name: 'user45', email: 'user45@mailinator.com', mobile: '5765756765' },
  { id: 16, name: 'soniadosanjh', email: 'soniasidhu75@gmail.com', mobile: '9876072229' },
  { id: 9, name: 'user234', email: 'user234@mailinator.com', mobile: '7206513168' },
  { id: 6, name: 'sanjeev', email: 'sanjeev@gmail.com', mobile: '097654666' },
];

const OphthalmologistList = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchMobile, setSearchMobile] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = ophthalmologists.filter(user => {
    const idMatch = user.id.toString().includes(searchId);
    const nameMatch = user.name.toLowerCase().includes(searchName.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchEmail.toLowerCase());
    const mobileMatch = user.mobile.includes(searchMobile);
    return idMatch && nameMatch && emailMatch && mobileMatch;
  });

  const totalPages = Math.ceil(filteredList.length / USERS_PER_PAGE);
  const indexOfLast = currentPage * USERS_PER_PAGE;
  const indexOfFirst = indexOfLast - USERS_PER_PAGE;
  const currentUsers = filteredList.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchId, searchName, searchEmail, searchMobile]);

  return (
    <div className="ophthalmologist-container">
      <div className="ophthalmologist-title">OPTHOMOLOGIST LIST</div>

      <table className="ophthalmologist-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
          <tr>
            <th><input type="text" placeholder="Search ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} /></th>
            <th><input type="text" placeholder="Search Name" value={searchName} onChange={(e) => setSearchName(e.target.value)} /></th>
            <th><input type="text" placeholder="Search Email" value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)} /></th>
            <th><input type="text" placeholder="Search Mobile" value={searchMobile} onChange={(e) => setSearchMobile(e.target.value)} /></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index} className="fade-in">
              <td data-label="ID">{user.id}</td>
              <td data-label="Name">{user.name}</td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Mobile">{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>«</button>
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>»</button>
      </div>
    </div>
  );
};

export default OphthalmologistList;
