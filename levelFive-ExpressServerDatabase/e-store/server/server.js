const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const port = 3000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://legendaryminds:VdaceqkAMdSm2nJx@legendarycluster0.jss56ro.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Routes
app.use("/api/inventory", require("./routes/InventoryRoutes"));



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
