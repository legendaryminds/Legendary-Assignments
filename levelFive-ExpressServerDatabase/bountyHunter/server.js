const express = require('express')
// Express for handling routes and server
const mongoose = require('mongoose')
// Morgan for logging HTTP requests
const morgan = require("morgan")
const Bounty = require('./models/Bounty')


const app = express()
const port = 7878


// Connection string for MongoDB Atlas
// const uri = 'mongodb+srv://legendaryminds:VdaceqkAMdSm2nJx@legendarycluster0.jss56ro.mongodb.net/newProjectDatabase?retryWrites=true&w=majority';
const uri = "mongodb+srv://legendaryminds:nlHGflANYjIMCdmZ@cluster0.kzqrqur.mongodb.net/"
// Connect to MongoDB Atlas using the new database name
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


// Middleware to parse JSON bodies
app.use(express.json())
// Middleware to log HTTP requests
app.use(morgan('dev'))



// GET all bounties
app.get('/bounty', async (req, res, next) => {
  try {
    const bounties = await Bounty.find({});
    // Fetch all bounties from the database
    res.json(bounties);
    // Send the list of bounties as JSON
  } catch (err) {
    next(err);
  }
});

// GET a single bounty by ID
app.get('/bounty/:id', async (req, res, next) => {
  try {
    // Extract the ID from the URL parameters
    const { id } = req.params;
    // Find the bounty by ID
    const bounty = await Bounty.findById(id);
    if (!bounty) {
      const error = new Error("Bounty not found");
      error.status = 404;
      throw error;
    }
    res.json(bounty);
  } catch (err) {
    next(err);
  }
});

// POST a new bounty
app.post('/bounty', async (req, res, next) => {
  try {
    // Create a new Bounty instance with request data
    const newBounty = new Bounty(req.body);
    // Save the new bounty to the database
    const savedBounty = await newBounty.save();
    // Send the saved bounty data with status 201 (Created)
    res.status(201).json(savedBounty);
  } catch (err) {
    next(err);
  }
});

// PUT/Update an existing bounty
app.put('/bounty/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    // Find and update the bounty
    const updatedBounty = await Bounty.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBounty) {
      const error = new Error("Bounty not found");
      error.status = 404;
      throw error;
    }
    // Send the updated bounty data as JSON
    res.json(updatedBounty);
  } catch (err) {
    next(err);
  }
});

// DELETE endpoint to remove an existing bounty
app.delete('/bounty/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBounty = await Bounty.findByIdAndDelete(id);
    if (!deletedBounty) {
      const error = new Error('Bounty not found');
      error.status = 404;
      throw error;
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

// 404 middleware
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ errMsg: err.message });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Request logging middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} request for ${req.url}`);
//   next();
//   // Pass control to the next middleware
// });

// Initial array of bounties
// let bounties = [
//   {
//     firstName: "Darth",
//     lastName: "Vader",
//     living: false,
//     bountyAmount: 1000000,
//     type: "Sith",
//     id: uuidv4(),
//   },
//   {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     living: true,
//     bountyAmount: 500000,
//     type: "Jedi",
//     id: uuidv4(),
//   },
//   {
//     firstName: "Obi-Wan",
//     lastName: "Kenobi",
//     living: true,
//     bountyAmount: 750000,
//     type: "Jedi",
//     id: uuidv4(),
//   },
//   {
//     firstName: "Palpatine",
//     lastName: "",
//     living: true,
//     bountyAmount: 1500000,
//     type: "Sith",
//     id: uuidv4(),
//   },
// ];


//   const bounty = bounties.find(bounty => bounty.id === id); // Find the bounty with the given id

//   if (bounty) {
//     res.json(bounty); // Respond with the found bounty
//   } else {
//     const err = new Error("Bounty not found");
//     err.status = 404;
//     next(err); // Pass the error to the error handling middleware
//   }
// });

// POST a new bounty
// Define a POST endpoint at the /bounty route
// app.post('/bounty', (req, res, next) => {
//   // Create a new bounty object with data from the request body
//   const newBounty = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     living: req.body.living,
//     bountyAmount: req.body.bountyAmount,
//     type: req.body.type,
//     id: uuidv4(),
//   };
  // Add the new bounty to the bounties array
  // bounties.push(newBounty);
  // Send the new bounty as a JSON response with status 201 (Created)
//     res.status(201).json(newBounty);
// });


// // DELETE endpoint to remove an existing bounty
// app.delete('/bounty/:id', (req, res) => {
//   // Extract id from the URL parameters
//   const { id } = req.params;
//   // Find the index of the bounty with the given id
//   const bountyIndex = bounties.findIndex(bounty => bounty.id === id); 

//   if (bountyIndex !== -1) {
//     // Remove the bounty from the array
//     bounties.splice(bountyIndex, 1);
//     // Respond with 204 No Content
//     res.status(204).send();
//   } else {
//     const err = new Error("Bounty not found");
//     err.status = 404;
//     next(err);
//   }
// })

// // 404 middleware
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err); // Pass the error to the error handling middleware
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(err.status || 500).send({ errMsg: err.message });
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })