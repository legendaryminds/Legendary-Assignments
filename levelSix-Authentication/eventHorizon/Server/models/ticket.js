const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Ticket schema definition
const ticketSchema = new Schema({
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event", // Reference to the event
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the user who bought the ticket
    required: true,
  },
  price: {
    type: Number,
    required: true, // Ticket price is required
  },
  purchasedAt: {
    type: Date,
    default: Date.now, // Timestamp for when the ticket was purchased
  },
});

// Export the Ticket model
module.exports = mongoose.model("Ticket", ticketSchema);
