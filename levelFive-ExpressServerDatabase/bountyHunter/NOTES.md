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


await Bounty.find({}):

Bounty.find({}): This is a Mongoose query that returns a Promise which, when resolved, contains an array of all bounty documents in the database.
await: This pauses the execution of the async function until the Promise returned by Bounty.find({}) is resolved. When the Promise resolves, the result (an array of bounty documents) is assigned to the bounties variable.
Error Handling: If the Promise is rejected (e.g., due to a database error), the catch block is executed, passing the error to the error handling middleware via next(err).

BountyForm: Handles the creation and editing of bounties via a form.
BountyList: Displays a list of bounties and provides options to edit or delete them.


mongodb+srv://legendaryminds:nlHGflANYjIMCdmZ@cluster0.kzqrqur.mongodb.net/
