const express = require('express');
const app = express();
const port = 3333;

// Import the magic middleware
const magicMiddleware = require('./magicMiddleware');

// Use the magic middleware
app.use(magicMiddleware);

// GET request handler
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Magic World!', spell: req.spell });
});

app.listen(port, () => {
    console.log(`Magic server is running on http:localhost:${port}`);
})