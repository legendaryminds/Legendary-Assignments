const mongoose = require('mongoose')
// Get the Schema constructor from Mongoose
const Schema = mongoose.Schema

// Define the Bounty schema
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        // Enumeration of allowed values
    enum: ['Sith', 'Jedi', 'Smuggler'],
    required: true}
});

// Export the Bounty model based on the schema
module.exports = mongoose.model('Bounty', bountySchema);