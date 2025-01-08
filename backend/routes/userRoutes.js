const { Router } = require("express");
const userRoutes = Router();
const userController = require("../controllers/userController");

// Sign up
userRoutes.post("/signup", userController.createUser);

module.exports = userRoutes;
