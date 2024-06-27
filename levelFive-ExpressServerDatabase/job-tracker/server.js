// Import necessary modules and packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const jobRoutes = require("./routes/jobRoutes");

// Initialize the express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // Log HTTP requests

// MongoDB connection string
const uri =
  "mongodb+srv://legendaryminds:xy6N3my4AN5EK4z0@cluster3.dfoo1xd.mongodb.net/job-tracker";

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api", jobRoutes); // Use job routes

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
