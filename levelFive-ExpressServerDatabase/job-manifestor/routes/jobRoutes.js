const express = require("express");
const axios = require("axios");
const Job = require("../models/jobModels"); // Ensure the path is correct
const router = express.Router();

// Adzuna API credentials (replace with your actual credentials)
const ADZUNA_APP_ID = "f991e35d";
const ADZUNA_APP_KEY = "0323dcbdee22023852039e6c27bc72ee";
const ADZUNA_BASE_URL = "https://api.adzuna.com/v1/api/jobs";

// Adzuna job search route
router.get("/adzuna-jobs", async (req, res) => {
  const { search } = req.query;
  const url = `${ADZUNA_BASE_URL}/us/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&results_per_page=10&what=${search}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching Adzuna jobs:", error);
    res.status(500).json({ message: "Error fetching Adzuna jobs" });
  }
});

// GET all jobs (local)
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET one job (local)
router.get("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new job (local)
router.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update a job (local)
router.put("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a job (local)
router.delete("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json({ message: "Job deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
