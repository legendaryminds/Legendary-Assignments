const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Comment schema definition
const commentSchema = new Schema({
  text: {
    type: String,
    required: true, // Comment text is required
  },
  issueId: {
    type: Schema.Types.ObjectId,
    required: true, // Reference to the associated issue
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true, // Reference to the user who created the comment
  },
  username: {
    type: String,
    required: true, // Username of the user who created the comment
  },
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp for when the comment was created
  },
});

// Export the Comment model
module.exports = mongoose.model("Comment", commentSchema);
