const { Router } = require("express");
const userRoutes = Router();
const userController = require("../controllers/userController");
const { signupValidator } = require("../middleware/validateForms");

userRoutes.post("/signup", signupValidator, userController.createUser);
userRoutes.post("/login", userController.login);

module.exports = userRoutes;
