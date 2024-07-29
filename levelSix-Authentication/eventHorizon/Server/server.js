// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const { expressjwt } = require("express-jwt");

// Initialize Express app
const app = express();

// Middleware for parsing JSON and logging HTTP requests
app.use(express.json());
app.use(morgan("dev"));

// Function to connect to MongoDB
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
}

// Call the function to connect to the database
connectToDb();

// Routes for authentication
app.use("/api/auth", require("./routes/authRouter"));

// Middleware to protect routes with JWT
app.use(
  "/api/main",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }).unless({
    path: ["/api/auth/login", "/api/auth/signup"],
  })
);

// Routes for events, tickets, and attendees
app.use("/api/main/events", require("./routes/eventRouter"));
app.use("/api/main/tickets", require("./routes/ticketRouter"));
app.use("/api/main/attendees", require("./routes/attendeeRouter"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  } else {
    res.status(500);
  }
  return res.send({ errMsg: err.message });
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
