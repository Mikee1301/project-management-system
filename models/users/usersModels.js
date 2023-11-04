const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
        type: String,
        required: true
  },
  lastname: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  },
  active: {
    type: Boolean,
    default: true
  }
});


const User = mongoose.model("Users", userSchema);

module.exports = User;
