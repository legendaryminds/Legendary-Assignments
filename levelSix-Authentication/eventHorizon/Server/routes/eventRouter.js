const express = require("express");
const eventRouter = express.Router();
const Event = require("../models/event");
const { expressjwt } = require("express-jwt");

// Middleware to protect routes
eventRouter.use(
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

// Route to create a new event
eventRouter.post("/", async (req, res, next) => {
  try {
    req.body.userId = req.auth._id; // Set the userId from the authenticated user
    const newEvent = new Event(req.body); // Create a new event with the request body
    const savedEvent = await newEvent.save(); // Save the new event to the database
    return res.status(201).send(savedEvent); // Send the saved event back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to get all events created by the logged-in user
eventRouter.get("/user/:userId", async (req, res, next) => {
  try {
    const events = await Event.find({ userId: req.params.userId }); // Find events by userId
    return res.status(200).send(events); // Send the events back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to get a specific event by ID
eventRouter.get("/:eventId", async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.eventId); // Find event by ID
    if (!event) {
      res.status(404);
      return next(new Error("Event not found"));
    }
    return res.status(200).send(event); // Send the event back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to update an event
eventRouter.put("/:eventId", async (req, res, next) => {
  try {
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: req.params.eventId, userId: req.auth._id }, // Find the event by eventId and userId
      req.body, // Update the event with the request body
      { new: true } // Return the updated event
    );
    return res.status(200).send(updatedEvent); // Send the updated event back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to get all events created by the logged-in user
eventRouter.get("/user/:userId", async (req, res, next) => {
  try {
    const events = await Event.find({ userId: req.params.userId }); // Find events by userId
    return res.status(200).send(events); // Send the events back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});


// Route to delete an event
eventRouter.delete("/:eventId", async (req, res, next) => {
  try {
    const deletedEvent = await Event.findOneAndDelete({
      _id: req.params.eventId, // Find the event by eventId
      userId: req.auth._id, // Ensure the authenticated user is the owner of the event
    });
    return res
      .status(200)
      .send(`Event with id ${req.params.eventId} was successfully deleted.`); // Send a success message back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

module.exports = eventRouter;
