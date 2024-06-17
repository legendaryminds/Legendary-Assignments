// Middleware to parse JSON bodies
app.use(express.json())

Parse: To convert data from one format to another.

express.json(): A middleware function in Express that parses JSON payloads in incoming HTTP requests and converts them into JavaScript objects, making it easier to access and manipulate the data in your route handlers.

{
  "firstName": "Han",
  "lastName": "Solo",
  "living": true,
  "bountyAmount": 100000,
  "type": "Smuggler"
}


use npm start to run site, duh

// mongodb+srv://legendaryminds:VdaceqkAMdSm2nJx@legendarycluster0.jss56ro.mongodb.net/



