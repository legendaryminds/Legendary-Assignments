// Switch to the new database
use("newProjectDatabase");

// Create a new collection
db.createCollection("bounties");

// Insert a sample document to verify the collection creation
db.bounties.insertOne({
  firstName: "Darth",
  lastName: "Vader",
  living: false,
  bountyAmount: 1000000,
  type: "Sith",
});

// Fetch the inserted document to verify
db.bounties.find({});
