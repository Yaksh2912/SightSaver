import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import '../assets/styles/Dashboard.css';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <DashboardNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>
      <div className="dashboard-main">
        <Sidebar isOpen={sidebarOpen} />
        <main className="dashboard-content" onClick={() => sidebarOpen && setSidebarOpen(false)}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
