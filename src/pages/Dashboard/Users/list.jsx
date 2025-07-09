import React, { useState, useEffect } from 'react';
import '../../../assets/styles/AllUsers.css';

const USERS_PER_PAGE = 5;

const usersData = [
  { name: 'Neeraj', email: 'neerajkhn86@gmail.com', role: 'Doctor', mobile: '8675656464', status: 'Approved' },
  { name: 'Sonia', email: 'gdhf@gmail.com', role: 'Receptionist', mobile: '9999999999', status: 'Pending' },
  { name: 'Manik', email: 'pb06manik@gmail.com', role: 'Doctor', mobile: '6283122501', status: 'Approved' },
  { name: 'Test12345', email: 'kishu5412@gmail.com', role: 'Ophomologist', mobile: '0987812322', status: 'Pending' },
  { name: 'Test12345', email: 'kishu541@gmail.com', role: 'Ophomologist', mobile: '0987812322', status: 'Approved' },
  { name: 'Test12345', email: 'tester12345678@mailinator.com', role: 'Ophomologist', mobile: '0987812322', status: 'Pending' },
  { name: 'Test12345', email: 'tester12@mailinator.com', role: 'Ophomologist', mobile: '0987812322', status: 'Pending' },
  { name: 'User45', email: 'user45@mailinator.com', role: 'Ophomologist', mobile: '5765756765', status: 'Pending' },
  { name: 'Soniadosanjh', email: 'soniasidhu75@gmail.com', role: 'Ophomologist', mobile: '9876072229', status: 'Approved' },
  { name: 'Gulbadan', email: 'gulbadan@cdac.in', role: 'Doctor', mobile: '0975347653', status: 'Approved' }
];

const list = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Search fields
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchRole, setSearchRole] = useState('');
  const [searchMobile, setSearchMobile] = useState('');

  // Filter logic
  const filteredUsers = usersData.filter(user => {
    const statusMatch = statusFilter === 'All' || user.status === statusFilter;
    const nameMatch = user.name.toLowerCase().includes(searchName.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchEmail.toLowerCase());
    const roleMatch = user.role.toLowerCase().includes(searchRole.toLowerCase());
    const mobileMatch = user.mobile.includes(searchMobile);
    return statusMatch && nameMatch && emailMatch && roleMatch && mobileMatch;
  });

  // Pagination logic
  const indexOfLastUser = currentPage * USERS_PER_PAGE;
  const indexOfFirstUser = indexOfLastUser - USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  // Reset page on filter/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, searchName, searchEmail, searchRole, searchMobile]);

  return (
    <div className="users-container">
      <div className="users-title">USERS LIST</div>

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr>
            <th><input type="text" placeholder="Search Name" value={searchName} onChange={(e) => setSearchName(e.target.value)} /></th>
            <th><input type="text" placeholder="Search Email" value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)} /></th>
            <th><input type="text" placeholder="Search Role" value={searchRole} onChange={(e) => setSearchRole(e.target.value)} /></th>
            <th><input type="text" placeholder="Search Mobile" value={searchMobile} onChange={(e) => setSearchMobile(e.target.value)} /></th>
            <th>
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option>All</option>
                <option>Approved</option>
                <option>Pending</option>
              </select>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index} className="fade-in">
              <td data-label="Name">{user.name}</td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Role">{user.role}</td>
              <td data-label="Mobile">{user.mobile}</td>
              <td data-label="Status">{user.status}</td>
              <td data-label="Action">
                {user.status === 'Pending' ? (
                  <>
                    <button className="approve-btn">Approve</button>
                    <button className="reject-btn">Reject</button>
                  </>
                ) : (
                  <button className="reject-btn">Reject</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>«</button>
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} className={i + 1 === currentPage ? 'active' : ''} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>»</button>
      </div>
    </div>
  );
};

export default list;
