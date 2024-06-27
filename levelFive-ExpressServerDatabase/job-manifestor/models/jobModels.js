const mongoose = require("mongoose");

// Define the Job schema
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: Number, required: false },
  location: { type: String, required: false },
  status: {
    type: String,
    required: true,
    enum: [
      "wishlist",
      "applied",
      "interviewing",
      "offer",
      "rejected",
      "ghosted",
      "followup",
    ],
    default: "wishlist",
  },
  dateSaved: { type: Date, required: true, default: Date.now },
  dateApplied: { type: Date, required: false },
  followUp: { type: Date, required: false },
  excitement: { type: Number, required: false, min: 0, max: 5 },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
