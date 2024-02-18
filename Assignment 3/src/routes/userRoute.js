// Dependencies
const express = require('express');

// Controller
const userController = require("../controllers/userController");

// Module scaffolding
const userRoute = express.Router();

// create a new user
userRoute.post("/user", userController.register);
// Retrieve all users
userRoute.get("/users", userController.getAllUsers);
// Retrieve a single user
userRoute.get("/users/:id", userController.getSingleUser);
// Update a user
userRoute.put("/users/:id", userController.updateUser);
// Delete a user
userRoute.delete("/users/:id", userController.deleteUser);

// Export module
module.exports = userRoute;
