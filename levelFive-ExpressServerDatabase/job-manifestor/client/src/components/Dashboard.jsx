import React, { useContext, useEffect } from 'react';
import { JobContext } from './JobContext';
import DashboardContent from './DashboardContent';
import './App.css';  // Import the general CSS file

const Dashboard = () => {
  const { jobs, fetchJobs } = useContext(JobContext);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      {jobs.length > 0 ? (
        <DashboardContent jobs={jobs} />
      ) : (
        <p>No jobs available. Add some jobs to get started.</p>
      )}
    </div>
  );
};

export default Dashboard;
