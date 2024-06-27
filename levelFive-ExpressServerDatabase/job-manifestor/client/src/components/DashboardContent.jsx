import React, { useContext } from 'react';
import { JobContext } from './JobContext';
import { useNavigate } from 'react-router-dom';
import './App.css';  // Import the general CSS file

const DashboardContent = ({ jobs }) => {
  const { deleteJob } = useContext(JobContext);
  const navigate = useNavigate();

  return (
    <div className="dashboard-content">
      {jobs.map((job) => (
        <div key={job._id} className="job-item">
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Date Saved:</strong> {new Date(job.dateSaved).toLocaleDateString()}</p>
          {job.dateApplied && <p><strong>Date Applied:</strong> {new Date(job.dateApplied).toLocaleDateString()}</p>}
          {job.followUp && <p><strong>Follow Up:</strong> {new Date(job.followUp).toLocaleDateString()}</p>}
          <p><strong>Excitement Level:</strong> {job.excitement}</p>
          <button onClick={() => deleteJob(job._id)}>Delete</button>
          <button onClick={() => navigate(`/edit-job/${job._id}`)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;
