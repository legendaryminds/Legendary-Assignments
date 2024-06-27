import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation

const LandingPage = () => (
  <div className="landing-page">
    <h1>Welcome to Job Manifestor</h1>
    <p>Organize and track your job applications efficiently.</p>
    <Link to="/dashboard" className="btn">Go to Dashboard</Link>
  </div>
);

export default LandingPage; // Export the LandingPage component as the default export
