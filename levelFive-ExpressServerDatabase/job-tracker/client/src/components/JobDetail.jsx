import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        setError('Failed to fetch job');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="job-detail">
      <h1>{job.title}</h1>
      <p>Company: {job.company}</p>
      <p>Salary: {job.salary ? `$${job.salary}` : 'N/A'}</p>
      <p>Location: {job.location}</p>
      <p>Status: {job.status}</p>
      <p>Date Saved: {job.dateSaved}</p>
      <p>Date Applied: {job.dateApplied}</p>
      <p>Follow Up: {job.followUp}</p>
      <StarRating rating={job.excitement} />
    </div>
  );
};

export default JobDetail;
