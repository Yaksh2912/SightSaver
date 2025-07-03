import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Sidebar.css';
import {
  FaTachometerAlt, FaUserMd, FaFlask, FaUsers,
  FaCalendarAlt, FaShareAlt, FaAngleRight
} from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    reception: false,
    appointments: false,
    doctor: false,
    opthomologist: false,
    users: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => {
      const newMenus = {};
      Object.keys(prev).forEach(key => {
        newMenus[key] = key === menu ? !prev[menu] : false;
      });
      return newMenus;
    });
  };

  return (
    <aside className={`sidebar ${menuOpen ? '' : 'collapsed'}`}>
      <div className="sidebar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <MdOutlineMenu size={20} />
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/dashboard" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <FaTachometerAlt /> {menuOpen && <span>Dashboard</span>}
        </NavLink>

        <div className="sidebar-item" onClick={() => toggleMenu('reception')}>
          <FaUserMd /> <span>Reception</span>
          {menuOpen && <FaAngleRight className={`arrow ${openMenus.reception ? 'rotate' : ''}`} />}
        </div>
        {menuOpen && (
          <div className={`sidebar-submenu ${!openMenus.reception ? 'closed' : ''}`}>
            <NavLink to="/reception/registration" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Patient Registration</NavLink>
            <NavLink to="/reception/billing" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Billing</NavLink>
            <NavLink to="/reception/prescription" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Print Prescription</NavLink>
          </div>
        )}

        <div className="sidebar-item" onClick={() => toggleMenu('appointments')}>
          <FaCalendarAlt /> <span>Appointments</span>
          {menuOpen && <FaAngleRight className={`arrow ${openMenus.appointments ? 'rotate' : ''}`} />}
        </div>
        {menuOpen && (
          <div className={`sidebar-submenu ${!openMenus.appointments ? 'closed' : ''}`}>
            <NavLink to="/appointments/list" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>List</NavLink>
            <NavLink to="/appointments/book" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Book Appointment</NavLink>
          </div>
        )}

        <div className="sidebar-item" onClick={() => toggleMenu('doctor')}>
          <IoLocationSharp /> <span>Doctor</span>
          {menuOpen && <FaAngleRight className={`arrow ${openMenus.doctor ? 'rotate' : ''}`} />}
        </div>
        {menuOpen && (
          <div className={`sidebar-submenu ${!openMenus.doctor ? 'closed' : ''}`}>
            <NavLink to="/doctor/list" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>List</NavLink>
            <NavLink to="/doctor/consultation" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Consultation</NavLink>
            <NavLink to="/doctor/prescription" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Prescription</NavLink>
            <NavLink to="/doctor/patients" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Patients</NavLink>
            <NavLink to="/doctor/patient-details" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Patient Details</NavLink>
          </div>
        )}

        <div className="sidebar-item" onClick={() => toggleMenu('opthomologist')}>
          <IoLocationSharp /> <span>Ophomologist</span>
          {menuOpen && <FaAngleRight className={`arrow ${openMenus.opthomologist ? 'rotate' : ''}`} />}
        </div>
        {menuOpen && (
          <div className={`sidebar-submenu ${!openMenus.opthomologist ? 'closed' : ''}`}>
            <NavLink to="/opthomologist/fundus" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Fundus Capture</NavLink>
            <NavLink to="/opthomologist/oct" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>OCT Test</NavLink>
            <NavLink to="/opthomologist/vision" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Vision Test</NavLink>
          </div>
        )}

        <NavLink to="/laboratory-tests" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <FaFlask /> {menuOpen && <span>Laboratory Tests</span>}
        </NavLink>

        <NavLink to="/reports" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
          <FaShareAlt /> {menuOpen && <span>Reports</span>}
        </NavLink>

        <div className="sidebar-item" onClick={() => toggleMenu('users')}>
          <FaUsers /> <span>Users</span>
          {menuOpen && <FaAngleRight className={`arrow ${openMenus.users ? 'rotate' : ''}`} />}
        </div>
        {menuOpen && (
          <div className={`sidebar-submenu ${!openMenus.users ? 'closed' : ''}`}>
            <NavLink to="/users/all" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>All</NavLink>
            <NavLink to="/users/opthomologist" className={({ isActive }) => `sidebar-subitem ${isActive ? 'active' : ''}`}>Ophomologist</NavLink>
          </div>
        )}
      </nav>

      <div className="sidebar-footer">
        © 2024 SIGHTSAVER. ALL RIGHTS RESERVED | DESIGNED <br />
        AND DEVELOPED BY C-DAC MOHALI
      </div>
    </aside>
  );
};

export default Sidebar;
