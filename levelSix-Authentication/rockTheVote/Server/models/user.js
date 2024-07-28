const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// User schema definition
const userSchema = new Schema({
  username: {
    type: String,
    required: true, // Username is required
    lowercase: true, // Convert username to lowercase
    unique: true, // Username must be unique
  },
  password: {
    type: String,
    required: true, // Password is required
  },
  memberSince: {
    type: Date,
    default: Date.now, // Default to the current date
  },
  isAdmin: {
    type: Boolean,
    default: false, // Default to false, indicating the user is not an admin
  },
});

// Pre-save middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    // Only hash the password if it has been modified
    try {
      const hash = await bcrypt.hash(user.password, 10); // Hash the password with a salt round of 10
      user.password = hash;
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    next();
  }
});

// Method to compare the password entered by the user with the hashed password in the database
userSchema.methods.checkPassword = async function (passwordAttempt) {
  try {
    return bcrypt.compare(passwordAttempt, this.password);
  } catch (error) {
    throw error;
  }
};

// Method to return the user object without the password
userSchema.methods.withoutPassword = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

// Export the User model
module.exports = mongoose.model("User", userSchema);
