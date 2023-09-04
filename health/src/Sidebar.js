import React from 'react';
import './sidebar.css'; // Import your CSS file for styling
import TabletFill from './TabletFill';
import { useNavigate } from 'react-router-dom';

export default function  Sidebar(){
  const navigate = useNavigate(); // Obtain the navigate function
  return (
    <div className="sidebar">
      <div className="logo">HealthCare Application</div>
      <ul className="nav-links">
        <li onClick={() => window.location.reload()}>Home</li>
        <li onClick={() => 
          navigate("/TabletFill")}>Tablet Prescription</li>
        {/* <li>Tablet Description</li> */}
        <li onClick={() => 
          navigate("/PatientFill")}>Patient Form Fill</li>
        <li>Doctor Appointment</li>
        <li>Contact</li>
        <li onClick={ () => navigate("/NoOfAppointments")}>Number of appointments</li>
        <li>Previous Prescribed tablets</li>
      </ul>
    </div>
  );
};

