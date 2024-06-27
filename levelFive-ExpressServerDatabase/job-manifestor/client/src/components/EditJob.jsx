// Import necessary modules and packages
import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 

// EditJob component
const EditJob = ({ updateJob }) => {
  const { id } = useParams(); // Get job ID from URL parameters
  const navigate = useNavigate(); // Get navigate object for navigation
  const [job, setJob] = useState({
    title: '',
    company: '',
    salary: '',
    location: '',
    status: 'wishlist',
    dateSaved: '',
    dateApplied: '',
    followUp: '',
    excitement: 0,
  }); // State to store job data

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

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await updateJob(id, job); // Call updateJob function to update job data
      navigate('/'); // Redirect to the dashboard
    } catch (error) {
      console.error('Error updating job', error); // Log any error
    }
  };

  return (
    <div className="edit-job">
      <h2>Edit Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            value={job.salary}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={job.status}
            onChange={handleChange}
            required
          >
            <option value="wishlist">Wishlist</option>
            <option value="applied">Applied</option>
            <option value="interviewing">Interviewing</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
            <option value="ghosted">Ghosted</option>
            <option value="followup">Followup</option>
          </select>
        </label>
        <label>
          Date Saved:
          <input
            type="date"
            name="dateSaved"
            value={job.dateSaved.split('T')[0]}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date Applied:
          <input
            type="date"
            name="dateApplied"
            value={job.dateApplied ? job.dateApplied.split('T')[0] : ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Follow Up:
          <input
            type="date"
            name="followUp"
            value={job.followUp ? job.followUp.split('T')[0] : ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Excitement Level:
          <input
            type="number"
            name="excitement"
            value={job.excitement}
            onChange={handleChange}
            min="0"
            max="5"
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditJob; // Export the EditJob component
