import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserManagement from './pages/UserManagementPage';
import ChargingStationManagement from './pages/ChargingStationPage';
import Dashboard from './pages/Dashboard';
import EditChargingStationPage from './pages/EditChargingStationPage';
import Header from './components/Header';
import TechnicalPage from './pages/TechnicalPage';
import HistoryChargingPage from './pages/HistoryChargingPage';
import EditUserPage from './pages/EditUserPage';
import HistoryUserStationPage from './pages/HistoryUserStationPage';
import AddUserPage from './pages/AddUserPage';
import AddChargingStationPage from './pages/AddChargingStationPage';

const App: React.FC = () => {

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-6 flex-1">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/charging-stations" element={<ChargingStationManagement />} />
            <Route path="/edit-station/:id" element={<EditChargingStationPage />} />
            <Route path="/edit-user/:id" element={<EditUserPage />} />
            <Route path="/technical-support" element={<TechnicalPage/>} />
            <Route path="/history-charging/:id" element={<HistoryChargingPage />} />
            <Route path="/charging-station-history/:stationName" element={<HistoryUserStationPage />} />
            <Route path="/add-user" element={<AddUserPage />} />
            <Route path="/add-station" element={<AddChargingStationPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
