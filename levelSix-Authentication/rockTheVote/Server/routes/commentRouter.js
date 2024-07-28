const express = require("express");
const Comment = require("../models/comment");
const commentRouter = express.Router();

// Middleware to protect routes
const { expressjwt } = require("express-jwt");

// JWT middleware
commentRouter.use(expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }));

// Post a new comment
commentRouter.post("/", async (req, res, next) => {
    try {
        req.body.userId = req.auth._id;
        req.body.username = req.auth.username;
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        return res.status(201).send(savedComment);
    } catch (error) {
        res.status(500);
        return next(error)
    }
});

// Get comments for a specific issue
commentRouter.get("/:issueId", async (req, res, next) => {
    try {
        const comments = await Comment.find({ issueId: req.params.issueId });
        return res.status(200).send(comments);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Update a comment
commentRouter.put("/:commentId", async (req, res, next) => {
    try {
        const updatedComment = await Comment.findOneAndUpdate(
            { _id: req.params.commentId, userId: req.auth._id },
            req.body,
            { new: true }
        );
        return res.status(200).send(updatedComment);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Delete a comment
commentRouter.delete("/:commentId", async (req, res, next) => {
    try {
        const deletedComment = await Comment.findOneAndDelete({
            _id: req.params.commentId,
            userId: req.auth._id,
        });
        return res.status(200).send(`Comment with id ${req.params.commentId} was successfully deleted.`);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

module.exports = commentRouter;