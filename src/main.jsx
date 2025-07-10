import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
// import TopBar from './Zerodha/TopBar';
// import Sidebar from './Zerodha/Sidebar';
// import Dashboard from './Zerodha/Dashboard';
// import './index.css'; // Make sure this file exists
import LoginForm from './loginform/Loginform';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className="app-container">
      <TopBar />
      <div className="main-layout">
        <Sidebar />
        <Dashboard />

      </div>
    </div> */}
    <>
      <LoginForm />
    </>
  </StrictMode>
);
