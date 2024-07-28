const express = require("express");
const Issue = require("../models/issue");
const issueRouter = express.Router();

// Middleware to protect routes
const { expressjwt } = require("express-jwt");

// JWT middleware
issueRouter.use(
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

// Post a new issue
issueRouter.post("/", async (req, res, next) => {
  try {
    req.body.username = req.auth.username;
    req.body.userId = req.auth._id;
    const newIssue = new Issue(req.body);
    const savedIssue = await newIssue.save();
    return res.status(201).send(savedIssue);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Get user-specific issues
issueRouter.get("/user", async (req, res, next) => {
  try {
    const userIssues = await Issue.find({ userId: req.auth._id });
    return res.status(200).send(userIssues);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Get all issues (for an admin or public view)
issueRouter.get("/", async (req, res, next) => {
  try {
    const allIssues = await Issue.find().sort({ upvotes: -1 }); // Sort by upvotes in descending order
    return res.status(200).send(allIssues);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Route to upvote an issue
issueRouter.put("/upvotes/:issueId", async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(
      req.params.issueId,
      {
        $addToSet: { upvotes: req.auth._id },
        $pull: { downvotes: req.auth._id },
      },
      { new: true }
    );
    return res.status(201).send(updatedIssue);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Route to downvote an issue
issueRouter.put("/downvotes/:issueId", async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(
      req.params.issueId,
      {
        $addToSet: { downvotes: req.auth._id },
        $pull: { upvotes: req.auth._id },
      },
      { new: true }
    );
    return res.status(201).send(updatedIssue);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Update an existing issue
issueRouter.put("/:issueId", async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findOneAndUpdate(
      { _id: req.params.issueId, userId: req.auth._id },
      req.body,
      { new: true }
    );
    return res.status(200).send(updatedIssue);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

// Delete an existing issue
issueRouter.delete("/:issueId", async (req, res, next) => {
  try {
    const deletedIssue = await Issue.findOneAndDelete({
      _id: req.params.issueId,
      userId: req.auth._id,
    });
    return res
      .status(200)
      .send(`Issue with id ${req.params.issueId} was successfully deleted.`);
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

module.exports = issueRouter;
