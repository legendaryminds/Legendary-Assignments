import React, { useState } from 'react'; // Import necessary React hooks
import { Link } from 'react-router-dom'; // Import Link component from React Router for navigation
import StarRating from './StarRating'; // Import StarRating component

const DashboardContent = ({ jobs, deleteJob, updateJob }) => {
  const [editableJob, setEditableJob] = useState({}); // State to track editable jobs

  // Function to capitalize the first letter of each word
  const capitalizeFirstLetter = (string) => {
    return string.replace(/\b\w/g, char => char.toUpperCase());
  };

  // Function to handle changes in input fields
  const handleInputChange = (e, jobId) => {
    const { name, value } = e.target;
    const formattedValue = ['title', 'company', 'location'].includes(name) ? capitalizeFirstLetter(value) : value;
    setEditableJob((prev) => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        [name]: formattedValue,
      },
    }));
  };

  // Function to handle blur event on input fields
  const handleBlur = (jobId) => {
    if (editableJob[jobId]) {
      updateJob(jobId, editableJob[jobId]);
      setEditableJob((prev) => {
        const updated = { ...prev };
        delete updated[jobId];
        return updated;
      });
    }
  };

  // Function to handle rating change
  const handleRatingChange = (jobId, rating) => {
    updateJob(jobId, { excitement: rating });
  };

  // Function to format date to 'YYYY-MM-DD'
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  // Ensure jobs is always an array
  const validJobs = Array.isArray(jobs) ? jobs : [];

  // Separate jobs into user-created and Adzuna jobs
  const adzunaJobs = validJobs.filter(job => job.status === 'adzuna');
  const userJobs = validJobs.filter(job => job.status !== 'adzuna');

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <Link to="/add-job" className="btn">Add Job</Link>

      <h2>Your Jobs</h2>
      <table className="job-table">
        <thead>
          <HeaderRow />
        </thead>
        <tbody>
          {userJobs.map((job) => (
            <JobRow 
              key={job._id} 
              job={job} 
              editableJob={editableJob} 
              handleInputChange={handleInputChange} 
              handleBlur={handleBlur} 
              handleRatingChange={handleRatingChange} 
              deleteJob={deleteJob}
              formatDate={formatDate} // Pass formatDate as a prop
            />
          ))}
        </tbody>
      </table>

      <h2>Adzuna Jobs</h2>
      <table className="job-table">
        <thead>
          <HeaderRow />
        </thead>
        <tbody>
          {adzunaJobs.map((job) => (
            <JobRow 
              key={job._id} 
              job={job} 
              editableJob={editableJob} 
              handleInputChange={handleInputChange} 
              handleBlur={handleBlur} 
              handleRatingChange={handleRatingChange} 
              deleteJob={deleteJob}
              formatDate={formatDate} // Pass formatDate as a prop
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Component for table header row
const HeaderRow = () => (
  <tr>
    <th>Job Position</th>
    <th>Company</th>
    <th>Max. Salary</th>
    <th>Location</th>
    <th>Status</th>
    <th>Date Saved</th>
    <th>Date Applied</th>
    <th>Follow Up</th>
    <th>Excitement</th>
    <th>Actions</th>
  </tr>
);

// Component for table data row
const JobRow = ({ job, editableJob, handleInputChange, handleBlur, handleRatingChange, deleteJob, formatDate }) => (
  <tr>
    {['title', 'company', 'salary', 'location'].map((field) => (
      <td key={field}>
        <input
          type="text"
          name={field}
          value={editableJob[job._id]?.[field] ?? job[field] ?? ''}
          onChange={(e) => handleInputChange(e, job._id)}
          onBlur={() => handleBlur(job._id)}
          className="editable-cell"
        />
      </td>
    ))}
    <td>
      <select
        name="status"
        value={editableJob[job._id]?.status ?? job.status ?? ''}
        onChange={(e) => handleInputChange(e, job._id)}
        onBlur={() => handleBlur(job._id)}
        className="editable-cell"
      >
        <option value="wishlist">Wishlist</option>
        <option value="applied">Applied</option>
        <option value="interviewing">Interviewing</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
        <option value="ghosted">Ghosted</option>
        <option value="followup">Followup</option>
      </select>
    </td>
    <td>
      <input
        type="date"
        name="dateSaved"
        value={editableJob[job._id]?.dateSaved ?? formatDate(job.dateSaved)}
        onChange={(e) => handleInputChange(e, job._id)}
        onBlur={() => handleBlur(job._id)}
        className="editable-cell"
      />
    </td>
    <td>
      <input
        type="date"
        name="dateApplied"
        value={editableJob[job._id]?.dateApplied ?? formatDate(job.dateApplied)}
        onChange={(e) => handleInputChange(e, job._id)}
        onBlur={() => handleBlur(job._id)}
        className="editable-cell"
      />
    </td>
    <td>
      <input
        type="date"
        name="followUp"
        value={editableJob[job._id]?.followUp ?? formatDate(job.followUp)}
        onChange={(e) => handleInputChange(e, job._id)}
        onBlur={() => handleBlur(job._id)}
        className="editable-cell"
      />
    </td>
    <td>
      <StarRating rating={job.excitement} onRatingChange={(rating) => handleRatingChange(job._id, rating)} />
    </td>
    <td>
      <button onClick={() => deleteJob(job._id)} className="btn btn-delete">Delete</button>
    </td>
  </tr>
);

export default DashboardContent;
