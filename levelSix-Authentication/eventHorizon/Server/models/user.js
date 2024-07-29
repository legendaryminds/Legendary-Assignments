const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre-save hook to hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to check the password during login
userSchema.methods.checkPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Method to remove the password from the user object before sending it to the client
userSchema.methods.withoutPassword = function () {
  const user = this.toObject(); // Using the built-in toObject method here
  delete user.password;
  return user;
};

// Export the User model
module.exports = mongoose.model("User", userSchema);