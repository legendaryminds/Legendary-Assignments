const express = require("express");
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const tvShows = [
  { title: "Rick and Morty", _id: uuidv4() },
  { title: "Watchmen", _id: uuidv4() },
  { title: "Westworld", _id: uuidv4() },
  { title: "Friends", _id: uuidv4() },
];

// GET All
tvShowRouter.get("/", (req, res) => {
  res.send(tvShows);
});

// GET One
tvShowRouter.get('/:tvShowId', (req, res) => {
  const tvShowId = req.params.tvShowId
  const foundShow = tvShows.find(tvShow => tvShow._id === tvShowId)
  res.send(foundShow)
})

tvShowRouter.post("/", (req, res) => {
  const newShow = req.body;
  newShow._id = uuidv4();
  tvShows.push(newShow);
  res.send(`Successfully added ${newShow.title} to the database!`);
});



module.exports = tvShowRouter;