const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require("uuid");


const movies = [
  { title: "die hard", genre: "action", _id: uuidv4() },
  { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
  { title: "lion king", genre: "fantasy", _id: uuidv4() },
  { title: "friday the 13th", genre: "horror", _id: uuidv4() },
];

// GET All
movieRouter.get("/", (req, res) => {
  console.log("GET request to /movies");
  res.status(200).send(movies);
});

// GET One
movieRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const foundMovie = movies.find(movie => movie._id === movieId);
  if (!foundMovie) {
    const error = new Error(`The item with the id ${movieId} was not found`)
    res.status(500)
    return next(error)
  }
  res.status(200).send(foundMovie)
})

// GET by Genre
movieRouter.get("/search/genre", (req, res, next) => {
  const genre = req.query.genre
  if (!genre) {
    const error = new Error("You must provide a genre")
    res.status(500)
    return next(error)
  }


  const filteredMovies = movies.filter(movie => movie.genre === genre)
  res.status(200).send(filteredMovies)
})

// POST One
movieRouter.post("/", (req, res) => {
  console.log("POST request to /movies with body:", req.body);
  const newMovie = req.body;
  newMovie._id = uuidv4();
  movies.push(newMovie);
  res.status(201).send(newMovie);
});

//  DELETE One
movieRouter.delete("/:movieId", (req, res) => {
  const movieId = req.params.movieId
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  movies.splice(movieIndex, 1)
  res.status(200).send("Successfully deleted movie!")
})

// UPDATE One
movieRouter.put("/:movieId", (req, res) => {
  const movieId = req.params.movieId
  const updateObject = req.body
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  const updatedMovie = Object.assign(movies[movieIndex], updateObject)
  res.status(201).send(updatedMovie)

})

// movieRouter.route("/").get((req, res) => {
//   res.send(movies);
// })
// .post((req, res) => {
//   const newMovie = req.body;
//   newMovie._id = uuidv4();
//   movies.push(newMovie);
//   res.send(`Successfully added ${newMovie.title} to the database!`);
// });


module.exports = movieRouter