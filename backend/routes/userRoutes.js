const { Router } = require("express");
const userRoutes = Router();
const userController = require("../controllers/userController");

userRoutes.post("/signup", userController.createUser);
userRoutes.post("/login", userController.login);

module.exports = userRoutes;
