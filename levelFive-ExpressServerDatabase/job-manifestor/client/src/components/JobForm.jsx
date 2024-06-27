import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobContext } from './JobContext';
import './App.css';  // Import the general CSS file

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    salary: '',
    location: '',
    status: 'wishlist',
    dateSaved: '',
    dateApplied: '',
    followUp: '',
    excitement: 0,
  });

  const { addJob } = useContext(JobContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(formData);
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h1>Add Job</h1>
      <form onSubmit={handleSubmit} className="job-form">
        <label htmlFor="title">Job Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="salary">Max Salary:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          placeholder="Max Salary"
          value={formData.salary}
          onChange={handleChange}
        />
        
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange}>
          <option value="wishlist">Wishlist</option>
          <option value="applied">Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
          <option value="ghosted">Ghosted</option>
          <option value="followup">Followup</option>
        </select>
        
        <label htmlFor="dateSaved">Date Saved:</label>
        <input
          type="date"
          id="dateSaved"
          name="dateSaved"
          value={formData.dateSaved}
          onChange={handleChange}
        />
        
        <label htmlFor="dateApplied">Date Applied:</label>
        <input
          type="date"
          id="dateApplied"
          name="dateApplied"
          value={formData.dateApplied}
          onChange={handleChange}
        />
        
        <label htmlFor="followUp">Follow Up:</label>
        <input
          type="date"
          id="followUp"
          name="followUp"
          value={formData.followUp}
          onChange={handleChange}
        />
        
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;
