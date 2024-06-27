import React, { useContext } from 'react';
import { JobContext } from './JobContext';
import DashboardContent from './DashboardContent';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { jobs, isLoading } = useContext(JobContext);

  return (
    <div className="dashboard">
      <Link to="/add-job" className="btn">Add Job</Link>
      <DashboardContent jobs={jobs} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
