// Import necessary modules and packages
import React from 'react'; // Import React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Routes, and Route from React Router
import Navbar from './components/Navbar'; // Import Navbar component
import LandingPage from './components/LandingPage'; // Import LandingPage component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import JobForm from './components/JobForm'; // Import JobForm component
import EditJob from './components/EditJob'; // Import EditJob component
import JobDetail from './components/JobDetail'; // Import JobDetail component
import AdzunaSearch from './components/AdzunaSearch'; // Import AdzunaSearch component
import { JobProvider } from './components/JobContext'; // Import JobProvider from JobContext
import './App.css'; // Import App.css for styling

// App component
const App = () => {
  return (
    <JobProvider> {/* Provide job context to the entire app */}
      <Router> {/* Wrap the app in Router to enable routing */}
        <div className="App">
          <Navbar /> {/* Render the Navbar component */}
          <Routes>
            {/* Define routes for different pages */}
            <Route path="/" element={<LandingPage />} /> {/* Route for the landing page */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the dashboard */}
            <Route path="/add-job" element={<JobForm />} /> {/* Route for adding a job */}
            <Route path="/edit-job/:id" element={<EditJob />} /> {/* Route for editing a job */}
            <Route path="/job/:id" element={<JobDetail />} /> {/* Route for job details */}
            <Route path="/adzuna-search" element={<AdzunaSearch />} /> {/* Route for Adzuna job search */}
          </Routes>
        </div>
      </Router>
    </JobProvider>
  );
};

export default App; // Export the App component
