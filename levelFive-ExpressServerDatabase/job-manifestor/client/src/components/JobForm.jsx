import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobContext } from './JobContext';

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
    <div className="job-form-container">
      <h1>Add Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Max Salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="wishlist">Wishlist</option>
          <option value="applied">Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
          <option value="ghosted">Ghosted</option>
          <option value="followup">Followup</option>
        </select>
        <input
          type="date"
          name="dateSaved"
          value={formData.dateSaved}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateApplied"
          value={formData.dateApplied}
          onChange={handleChange}
        />
        <input
          type="date"
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
