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
  "mongodb+srv://legendaryminds:VyiF5jEVeRNuXO6l@cluster1.0xs2fhn.mongodb.net/job-manifestor-1?retryWrites=true&w=majority";


  
// Connect to MongoDB
mongoose
  .connect(uri) 
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api", jobRoutes); // Use job routes


// Log registered routes
app._router.stack.forEach(function (r) {
  if (r.route && r.route.path) {
    console.log(r.route.path);
  }
});

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
