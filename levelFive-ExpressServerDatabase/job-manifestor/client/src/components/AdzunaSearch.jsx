import React, { useState, useContext } from 'react';
import axios from 'axios';
import { JobContext } from './JobContext';

const AdzunaSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [adzunaJobs, setAdzunaJobs] = useState([]);
  const { addJob } = useContext(JobContext);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/adzuna-jobs?search=${searchTerm}`);
      console.log('Adzuna API response:', response.data); // Log the entire response data
      if (response.data.results) {
        setAdzunaJobs(response.data.results); 
      } else {
        setAdzunaJobs([]);
      }
    } catch (error) {
      console.error('Error fetching Adzuna jobs:', error);
    }
  };

  const handleSaveJob = (job) => {
    const jobData = {
      title: job.title,
      company: job.company.display_name,
      salary: job.salary_max,
      location: job.location.display_name,
      status: 'adzuna',
      dateSaved: new Date().toISOString().split('T')[0],
      excitement: 0,
    };
    addJob(jobData);
  };

  return (
    <div className="adzuna-search">
      <h1>Search Adzuna Jobs</h1>
      <input
        type="text"
        placeholder="Enter job title or keyword"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="adzuna-job-list">
        {adzunaJobs.length > 0 ? (
          adzunaJobs.map((job) => (
            <div key={job.id} className="adzuna-job">
              <h2>{job.title}</h2>
              <p>{job.company.display_name}</p>
              <p>{job.location.display_name}</p>
              <p>Max Salary: {job.salary_max}</p>
              <button onClick={() => handleSaveJob(job)}>Save Job</button>
            </div>
          ))
        ) : (
          <p>No jobs found. Try another search term.</p>
        )}
      </div>
    </div>
  );
};

export default AdzunaSearch;
