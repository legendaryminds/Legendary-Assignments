// Import necessary modules and packages
import React, { useEffect, useState } from 'react'; // Import React and hooks
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks from React Router for URL parameters and navigation
import axios from 'axios'; // Import Axios for making HTTP requests

// JobDetail component
const JobDetail = () => {
  const { id } = useParams(); // Get job ID from URL parameters
  const navigate = useNavigate(); // Get navigate object for navigation
  const [job, setJob] = useState(null); // State to store job data

  // Fetch job data when the component mounts
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`); // Make a GET request to fetch job data
        setJob(response.data); // Update state with fetched job data
      } catch (error) {
        console.error('Error fetching job data', error); // Log any error
      }
    };

    fetchJob(); // Call the fetchJob function
  }, [id]);

  // Handle delete job
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`); // Make a DELETE request to delete the job
      navigate('/'); // Redirect to the dashboard
    } catch (error) {
      console.error('Error deleting job', error); // Log any error
    }
  };

  // Handle edit job
  const handleEdit = () => {
    navigate(`/edit-job/${id}`); // Redirect to the edit job page
  };

  // Render job details
  return (
    <div className="job-detail">
      {job ? (
        <>
          <h2>{job.title}</h2>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Salary:</strong> {job.salary ? `$${job.salary}` : 'Not specified'}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Date Saved:</strong> {new Date(job.dateSaved).toLocaleDateString()}</p>
          <p><strong>Date Applied:</strong> {job.dateApplied ? new Date(job.dateApplied).toLocaleDateString() : 'Not applied yet'}</p>
          <p><strong>Follow Up:</strong> {job.followUp ? new Date(job.followUp).toLocaleDateString() : 'No follow-up date'}</p>
          <p><strong>Excitement Level:</strong> {job.excitement}</p>
          <button onClick={handleEdit} className="btn btn-edit">Edit</button>
          <button onClick={handleDelete} className="btn btn-delete">Delete</button>
        </>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default JobDetail; // Export the JobDetail component
