// EditJob.jsx
// Component to edit an existing job entry.

import React, { useState, useEffect } from 'react'; // Import React and hooks
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks from react-router-dom for routing
import axios from 'axios'; // Import axios for HTTP requests

const EditJob = () => {
  const { id } = useParams(); // Get the job ID from the URL parameters
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Initialize state for the job
  const [job, setJob] = useState({
    title: '',
    company: '',
    salary: '',
    location: '',
    dateApplied: '',
    followUp: '',
    excitement: '',
    status: ''
  });

  // Fetch the job data when the component mounts
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data); // Set the job state with the fetched data
      } catch (error) {
        console.error('Error fetching the job data', error);
      }
    };

    fetchJob();
  }, [id]);

  // Handle form submission to update the job
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/jobs/${id}`, job);
      navigate('/dashboard'); // Redirect to dashboard after successful update
    } catch (error) {
      console.error('Error updating the job', error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value
    }));
  };

  return (
    <div className="job-form">
      <h1>Edit Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={job.title}
          onChange={handleChange}
          placeholder="Job Title"
          required
        />
        <input
          type="text"
          name="company"
          value={job.company}
          onChange={handleChange}
          placeholder="Company"
          required
        />
        <input
          type="number"
          name="salary"
          value={job.salary}
          onChange={handleChange}
          placeholder="Salary"
        />
        <input
          type="text"
          name="location"
          value={job.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="date"
          name="dateApplied"
          value={job.dateApplied}
          onChange={handleChange}
        />
        <input
          type="date"
          name="followUp"
          value={job.followUp}
          onChange={handleChange}
        />
        <input
          type="number"
          name="excitement"
          value={job.excitement}
          onChange={handleChange}
          placeholder="Excitement (1-5)"
        />
        <select name="status" value={job.status} onChange={handleChange}>
          <option value="wishlist">Wishlist</option>
          <option value="applied">Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
          <option value="ghosted">Ghosted</option>
          <option value="followup">Followup</option>
        </select>
        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;
