const express = require("express");
const Comment = require("../models/comment");
const commentRouter = express.Router();

// Middleware to protect routes
const { expressjwt } = require("express-jwt");

// JWT middleware
commentRouter.use(
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

// Route to post a new comment
commentRouter.post("/", async (req, res, next) => {
  try {
    req.body.userId = req.auth._id; // Set the userId from the authenticated user
    req.body.username = req.auth.username; // Set the username from the authenticated user
    const newComment = new Comment(req.body); // Create a new comment with the request body
    const savedComment = await newComment.save(); // Save the new comment to the database
    return res.status(201).send(savedComment); // Send the saved comment back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to get comments for a specific issue
commentRouter.get("/:issueId", async (req, res, next) => {
  try {
    const comments = await Comment.find({ issueId: req.params.issueId }); // Find comments by issueId
    return res.status(200).send(comments); // Send the comments back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to update a comment
commentRouter.put("/:commentId", async (req, res, next) => {
  try {
    const updatedComment = await Comment.findOneAndUpdate(
      { _id: req.params.commentId, userId: req.auth._id }, // Find the comment by commentId and userId
      req.body, // Update the comment with the request body
      { new: true } // Return the updated comment
    );
    return res.status(200).send(updatedComment); // Send the updated comment back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to delete a comment
commentRouter.delete("/:commentId", async (req, res, next) => {
  try {
    const deletedComment = await Comment.findOneAndDelete({
      _id: req.params.commentId, // Find the comment by commentId
      userId: req.auth._id, // Ensure the authenticated user is the owner of the comment
    });
    return res
      .status(200)
      .send(
        `Comment with id ${req.params.commentId} was successfully deleted.`
      ); // Send a success message back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

module.exports = commentRouter;
