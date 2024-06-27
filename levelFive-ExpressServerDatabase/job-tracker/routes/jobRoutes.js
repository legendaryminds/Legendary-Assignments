// jobRoutes.js
const express = require("express");
const router = express.Router();
const axios = require("axios");
const Job = require("../models/jobModels");

// Middleware to get a job by ID
async function getJob(req, res, next) {
  let job;
  try {
    job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: "Cannot find job" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.job = job;
  next();
}

// GET all jobs
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a job
router.post("/jobs", async (req, res) => {
  const job = new Job({
    title: req.body.title,
    company: req.body.company,
    salary: req.body.salary,
    location: req.body.location,
    status: req.body.status,
    dateSaved: req.body.dateSaved,
    dateApplied: req.body.dateApplied,
    followUp: req.body.followUp,
    excitement: req.body.excitement,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a job
router.put("/jobs/:id", getJob, async (req, res) => {
  if (req.body.title != null) {
    res.job.title = req.body.title;
  }
  if (req.body.company != null) {
    res.job.company = req.body.company;
  }
  if (req.body.salary != null) {
    res.job.salary = req.body.salary;
  }
  if (req.body.location != null) {
    res.job.location = req.body.location;
  }
  if (req.body.status != null) {
    res.job.status = req.body.status;
  }
  if (req.body.dateSaved != null) {
    res.job.dateSaved = req.body.dateSaved;
  }
  if (req.body.dateApplied != null) {
    res.job.dateApplied = req.body.dateApplied;
  }
  if (req.body.followUp != null) {
    res.job.followUp = req.body.followUp;
  }
  if (req.body.excitement != null) {
    res.job.excitement = req.body.excitement;
  }

  try {
    const updatedJob = await res.job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a job
router.delete("/jobs/:id", getJob, async (req, res) => {
  try {
    await res.job.remove();
    res.json({ message: "Deleted Job" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Adzuna API credentials
const ADZUNA_APP_ID = "f991e35d";
const ADZUNA_APP_KEY = "0323dcbdee22023852039e6c27bc72ee	";

// GET jobs from Adzuna
router.get("/adzuna-jobs", async (req, res) => {
  const searchTerm = req.query.search || "";
  try {
    const response = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&what=${searchTerm}`
    );
    res.json(response.data); // Ensure this line is correct
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
