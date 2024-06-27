import React, { useContext } from 'react';
import { JobContext } from './JobContext';

const DashboardContent = ({ jobs }) => {
  const { deleteJob } = useContext(JobContext);

  return (
    <div className="dashboard-content">
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.salary}</p>
          <button onClick={() => deleteJob(job._id)}>Delete</button>
          {/* Add more job details and edit functionality here */}
        </div>
      ))}
    </div>
  );
};

export default DashboardContent;
