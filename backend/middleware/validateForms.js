const { body, validationResult } = require("express-validator");

const signupValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email field cannot be empty")
    .isEmail()
    .withMessage("Must be a valid email address"),
  body("username")
    .notEmpty()
    .withMessage("Username cannot be empty")
    .isAlphanumeric()
    .withMessage("Username can only contain alphamueric characters")
    .isLength({ min: 5, max: 10 })
    .withMessage("Username must be 5-10 characters in length"),
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .matches(/^(?=.*[0-9])(?=.*[A-Z]).*$/)
    .withMessage("Password must contain an uppercase letter and a number"),
];

module.exports = { validationResult, signupValidator };
