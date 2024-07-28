const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Issue schema definition
const issueSchema = new Schema({
  title: {
    type: String,
    required: true, // Title of the issue is required
  },
  description: {
    type: String,
    required: true, // Description of the issue is required
  },
  imgUrl: {
    type: String, // Optional image URL associated with the issue
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the user who created the issue
  },
  username: {
    type: String,
    required: true, // Username of the user who created the issue
  },
  upvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // References to users who upvoted the issue
    },
  ],
  downvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // References to users who downvoted the issue
    },
  ],
});

// Export the Issue model
module.exports = mongoose.model("Issue", issueSchema);
