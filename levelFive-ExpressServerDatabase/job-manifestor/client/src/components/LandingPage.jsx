// Import necessary modules and packages
import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link for navigation

// LandingPage component
const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Job Manifestor</h1>
      <p>Your ultimate job tracking tool. Stay organized and keep track of all your job applications in one place.</p>
      <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
    </div>
  );
};

export default LandingPage; // Export the LandingPage component
