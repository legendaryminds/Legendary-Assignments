// First Express Server
const express = require("express")
const app = express() 
const morgan = require("morgan");

// Middleware (for every request)
app.use(express.json()) 
// Looks for a request body, and turns it into 'req.body'
app.use(morgan("dev"));
// Logs request to the console

// app.use("/items")

// Routes
app.use("/movies", require("./routes/movieRouter.js"))

app.use("/tvshows", require("./routes/tvShowRouter.js"));

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


//1: PORT 2:CB
app.listen(5555, () => {
    console.log("We are up and running on port 5555!")
})