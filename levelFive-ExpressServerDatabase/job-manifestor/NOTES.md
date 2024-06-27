mongodb+srv://legendaryminds:VyiF5jEVeRNuXO6l@cluster1.0xs2fhn.mongodb.net/

import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched jobs:', data); // Log fetched jobs
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const addJob = async (job) => {
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newJob = await response.json();
      setJobs([...jobs, newJob]); // Update state with the new job
      fetchJobs(); // Fetch jobs after adding a new job
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const deleteJob = async (id) => {
    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const updateJob = async (id, updatedJob) => {
    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedJob),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedJobData = await response.json();
      setJobs(jobs.map((job) => (job._id === id ? updatedJobData : job)));
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

import React, { useContext, useEffect } from 'react';
import { JobContext } from './JobContext';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  const { jobs, fetchJobs } = useContext(JobContext);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {jobs.length > 0 ? (
        <DashboardContent jobs={jobs} />
      ) : (
        <p>No jobs available. Add some jobs to get started.</p>
      )}
    </div>
  );
};

export default Dashboard;

import React, { useContext } from 'react';
import { JobContext } from './JobContext';

import React, { useContext, useEffect } from 'react';
import DashboardContent from './DashboardContent';
import { JobContext } from './JobContext';

const Dashboard = () => {
  const { jobs, fetchJobs, deleteJob, updateJob } = useContext(JobContext);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="dashboard">
      <DashboardContent jobs={jobs} deleteJob={deleteJob} updateJob={updateJob} />
    </div>
  );
};

export default Dashboard;
