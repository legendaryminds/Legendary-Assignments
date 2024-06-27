import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('/api/jobs');
      console.log('Fetched jobs:', response.data); // Log fetched jobs
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const addJob = async (job) => {
    try {
      const response = await axios.post('/api/jobs', job);
      setJobs([...jobs, response.data]); // Update state with the new job
      fetchJobs(); // Fetch jobs after adding a new job
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const updateJob = async (id, updatedJob) => {
    try {
      const response = await axios.put(`/api/jobs/${id}`, updatedJob);
      setJobs(jobs.map((job) => (job._id === id ? response.data : job)));
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob, updateJob, fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
};
