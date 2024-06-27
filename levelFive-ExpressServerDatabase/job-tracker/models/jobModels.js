// Import the necessary modules and packages
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction

// Define the Job schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is a required field
  },
  company: {
    type: String,
    required: true, // Company is a required field
  },
  salary: {
    type: Number,
    required: false, // Salary is an optional field
  },
  location: {
    type: String,
    required: false, // Location is an optional field
  },
  status: {
    type: String,
    required: true, // Status is a required field
    enum: [
      "wishlist",
      "applied",
      "interviewing",
      "offer",
      "rejected",
      "ghosted",
      "followup",
    ], // Restrict the status to these values
    default: "wishlist", // Default status is 'wishlist'
  },
  dateSaved: {
    type: Date,
    required: true, // Date saved is a required field
    default: Date.now, // Default to the current date
  },
  dateApplied: {
    type: Date,
    required: false, // Date applied is an optional field
  },
  followUp: {
    type: Date,
    required: false, // Follow-up date is an optional field
  },
  excitement: {
    type: Number,
    required: false, // Excitement level is an optional field
    min: 0, // Minimum value is 0
    max: 5, // Maximum value is 5
  },
});

// Create the Job model from the schema
const Job = mongoose.model("Job", jobSchema);

// Export the Job model
module.exports = Job;
