// Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

// user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
});

// create model
const User = mongoose.model('User', userSchema);

// export model
module.exports = User;
