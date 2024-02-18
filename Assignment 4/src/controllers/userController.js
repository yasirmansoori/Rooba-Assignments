// Dependencies
const bcrypt = require('bcrypt');
const { createUser, updateUser } = require('../validations/userValidation');
const { signAccessToken} = require('../config/tokenGenerator')
const createError = require('http-errors');
const User = require('../models/user')
require('dotenv').config('../../.env');

// Module scaffolding
const userController = {};

// Create user 
userController.register = async (req, res, next) => {
  try {
    // Check if email already exists
    const result = await createUser.validateAsync(req.body)
    await User.findOne({ email: result.email }).then((user) => {
      if (user) throw createError.Conflict("This email has already an account. Please login")
    })

    // Hash password and register user
    result.password = await hashPassword(result.password);
    const user = new User(result)
    const savedUser = await user.save()

    // Generate tokens
    const accessToken = await signAccessToken(savedUser.id)

    // Send response
    const payload = {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      country: savedUser.country,
      age: savedUser.age,
      accessToken
    };
    res.status(201).json(payload)
  } catch (error) {
    if (error.isJoi === true) error.status = 422
    next(error);
  }
};

// Retrieve all users
userController.getAllUsers = async (req, res, next) => {
  try {
    // Retrieve all users
    const users = await User.find({}, { password: 0, __v: 0 });

    // Check if users exist
    if (users.length === 0) throw createError.NotFound("No users found");

    // Send response
    const payload = {
      message: "All users",
      total: users.length,
      users
    };
    res.status(200).json(payload);
  } catch (error) {
    next(error);
  }
};

// Retrieve a single user controller
userController.getSingleUser = async (req, res, next) => {
  try {
    // Retrieve a single user
    const user = await User.findById(req.params.id, { password: 0, __v: 0 });

    // Check if user exists
    if (!user) throw createError.NotFound("User not found");

    // Send response
    const payload = {
      message: "User found",
      user
    };
    res.status(200).json(payload);
  }
  catch (error) {
    next(error);
  }
}

// Update a user 
userController.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Validate user input
    const result = await updateUser.validateAsync(req.body);

    // find the user by id 
    const user = await User.findById(userId);

    // Check if user exists
    if (!user) throw createError.NotFound("User not found");

    // if the request body is the same as the existing user, throw an error
    if (
      user.name === result.name &&
      user.email === result.email &&
      user.age === result.age &&
      user.country === result.country
    ) throw createError.Conflict("No changes detected");

    // Update user
    const updatedUser = await User.findByIdAndUpdate(userId, result, {
      new: true,
      projection: { __v: 0, password: 0 },
    });

    // Send response
    const payload = {
      message: "User updated",
      updatedUser
    };

    res.status(200).json(payload);
  } catch (error) {
    next(error);
  }
}

// Delete a user 
userController.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) throw createError.NotFound("User not found");

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userId, {
      projection: { __v: 0, password: 0 },
    });

    // Send response
    const payload = {
      message: "User deleted successfully",
      deletedUser
    };
    res.status(200).json(payload);
  } catch (error) {
    next(error);
  }
}

// Helper Function to hash password
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// Export module
module.exports = userController;

