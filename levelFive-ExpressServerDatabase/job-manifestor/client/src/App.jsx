// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import JobForm from './components/JobForm';
import EditJob from './components/EditJob';
import AdzunaSearch from './components/AdzunaSearch';
import JobDetail from './components/JobDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-job" element={<JobForm />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="/adzuna-search" element={<AdzunaSearch />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
