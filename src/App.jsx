import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import LandingLayout from './Layouts/LandingLayout';
import DashboardLayout from './Layouts/DashboardLayout';

// Pages
import LandingPage from './pages/Landing/LandingPage';
import LoginModal from './pages/Landing/LoginModal';
import RegisterModal from './pages/Landing/RegisterModal';
import Dashboard from './pages/Dashboard';

// dashboard sub pages
import PatientRegistration from './pages/Dashboard/Reception/PatientRegister';
import Billing from './pages/Dashboard/Reception/billing';
import PrintPrescription from './pages/Dashboard/Reception/PrintPrescription';

import AppointmentsList from './pages/Dashboard/Appointments/listing';
import BookAppointment from './pages/Dashboard/Appointments/book';

import DoctorList from './pages/Dashboard/Doctor/List';
import Consultation from './pages/Dashboard/Doctor/Consultation';
import DoctorPrescription from './pages/Dashboard/Doctor/Prescription';
import DoctorPatients from './pages/Dashboard/Doctor/Patients';
import PatientDetails from './pages/Dashboard/Doctor/PatientDetails';

import Fundus from './pages/Dashboard/Opthomologist/FundusCapture';
import OCT from './pages/Dashboard/Opthomologist/Oct';
import Vision from './pages/Dashboard/Opthomologist/vision';

import AllUsers from './pages/Dashboard/Users/list';
import OphomologistUsers from './pages/Dashboard/Users/OpthomologistList';

import LaboratoryTests from './pages/Dashboard/LabTests';

import Reports from './pages/Dashboard/Reports';


const App = () => {
  return (
    <Routes>
      {/* Landing Layout */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
      </Route>

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/reception/registration" element={<PatientRegistration />} />
        <Route path="/reception/billing" element={<Billing />} />
        <Route path="/reception/prescription" element={<PrintPrescription />} />

        <Route path="/appointments/list" element={<AppointmentsList />} />
        <Route path="/appointments/book" element={<BookAppointment />} />

        <Route path="/doctor/list" element={<DoctorList />} />
        <Route path="/doctor/consultation" element={<Consultation />} />
        <Route path="/doctor/prescription" element={<DoctorPrescription />} />
        <Route path="/doctor/patients" element={<DoctorPatients />} />
        <Route path="/doctor/patient-details" element={<PatientDetails />} />

        <Route path="/opthomologist/fundus" element={<Fundus />} />
        <Route path="/opthomologist/oct" element={<OCT />} />
        <Route path="/opthomologist/vision" element={<Vision />} />

        <Route path="/users/all" element={<AllUsers />} />
        <Route path="/users/opthomologist" element={<OphomologistUsers />} />

        <Route path="/laboratory-tests" element={<LaboratoryTests />} />
        <Route path="/reports" element={<Reports />} />
      </Route>

    </Routes>
  );
};

export default App;
