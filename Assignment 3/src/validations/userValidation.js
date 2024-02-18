const Joi = require('joi');

// Register validation schema
const createUser = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).max(100).required(),
  country: Joi.string().required(),
  password: Joi.string().min(6).required(),
})

// Update validation schema
const updateUser = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  age: Joi.number().min(18).max(100),
  country: Joi.string(),
})

module.exports = { createUser, updateUser };