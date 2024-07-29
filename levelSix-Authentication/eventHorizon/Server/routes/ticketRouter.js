const express = require("express");
const ticketRouter = express.Router();
const Ticket = require("../models/ticket");

// Middleware to protect routes
const { expressjwt } = require("express-jwt");
ticketRouter.use(
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

// Route to create a new ticket
ticketRouter.post("/", async (req, res, next) => {
  try {
    req.body.userId = req.auth._id; // Set the userId from the authenticated user
    const newTicket = new Ticket(req.body); // Create a new ticket with the request body
    const savedTicket = await newTicket.save(); // Save the new ticket to the database
    return res.status(201).send(savedTicket); // Send the saved ticket back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to get all tickets for a specific event
ticketRouter.get("/:eventId", async (req, res, next) => {
  try {
    const tickets = await Ticket.find({ eventId: req.params.eventId }); // Find tickets by eventId
    return res.status(200).send(tickets); // Send the tickets back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to update a ticket
ticketRouter.put("/:ticketId", async (req, res, next) => {
  try {
    const updatedTicket = await Ticket.findOneAndUpdate(
      { _id: req.params.ticketId, userId: req.auth._id }, // Find the ticket by ticketId and userId
      req.body, // Update the ticket with the request body
      { new: true } // Return the updated ticket
    );
    return res.status(200).send(updatedTicket); // Send the updated ticket back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

// Route to delete a ticket
ticketRouter.delete("/:ticketId", async (req, res, next) => {
  try {
    const deletedTicket = await Ticket.findOneAndDelete({
      _id: req.params.ticketId, // Find the ticket by ticketId
      userId: req.auth._id, // Ensure the authenticated user is the owner of the ticket
    });
    return res
      .status(200)
      .send(`Ticket with id ${req.params.ticketId} was successfully deleted.`); // Send a success message back to the client
  } catch (error) {
    res.status(500);
    return next(error); // Pass the error to the error handler
  }
});

module.exports = ticketRouter;
