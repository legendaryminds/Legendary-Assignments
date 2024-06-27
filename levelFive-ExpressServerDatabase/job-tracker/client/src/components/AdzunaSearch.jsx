import React, { useState, useContext } from 'react';
import axios from 'axios';
import { JobContext } from './JobContext';

const AdzunaSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [adzunaJobs, setAdzunaJobs] = useState([]);
  const { addJob } = useContext(JobContext);

  const handleSearch = async () => {
    try {
      const ADZUNA_APP_ID = 'your_adzuna_app_id';
      const ADZUNA_APP_KEY = 'your_adzuna_app_key';
      const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&what=${searchTerm}`;
      
      const response = await axios.get(apiUrl);
      setAdzunaJobs(response.data.results); // Adjust based on the actual structure of the Adzuna response
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
        {adzunaJobs.map((job) => (
          <div key={job.id} className="adzuna-job">
            <h2>{job.title}</h2>
            <p>{job.company.display_name}</p>
            <p>{job.location.display_name}</p>
            <p>Max Salary: {job.salary_max}</p>
            <button onClick={() => handleSaveJob(job)}>Save Job</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdzunaSearch;
