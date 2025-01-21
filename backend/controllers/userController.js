const userService = require("../services/userService");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("../middleware/validateForms");

const createUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    return res
      .status(400)
      .json({ error: "Validation error", messages: errorMessages });
  }

  const { email, password, username, author } = req.body;
  const role = author ? "author" : "reader";

  try {
    // Check if email exists
    const existingEmail = await userService.getUserByEmail(email);
    if (existingEmail) {
      return res.status(400).json({
        error: "Validation error",
        messages: ["This email is already registered"],
      });
    }

    // Check if username exists
    const existingUsername = await userService.getUserByUsername(username);
    if (existingUsername) {
      return res.status(400).json({
        error: "Validation error",
        messages: ["This username is already taken"],
      });
    }

    await userService.createUser(email, password, username, role);
    return res.json("New user successfully added!");
  } catch (err) {
    console.log(err);
    // Handle specific database constraint errors if they slip through
    if (err.code === "23505") {
      // PostgreSQL unique constraint violation code
      const field = err.detail.includes("email") ? "email" : "username";
      return res.status(400).json({
        error: "Validation error",
        messages: [`This ${field} is already registered`],
      });
    }

    return res
      .status(500)
      .json({ error: "Server error", message: err.message });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password, isAdminSite } = req.body;
  const userDetails = await userService.getUserByEmail(email);

  // Check if user exists
  if (!userDetails) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Check password
  const match = await bcrypt.compare(password, userDetails.password);

  if (isAdminSite && userDetails.role !== "author") {
    return res
      .status(403)
      .json({ error: "Access denied. Author privileges required." });
  }

  if (match) {
    const tokenPayload = {
      authorID: userDetails.id,
      username: userDetails.username,
      role: userDetails.role,
      site: isAdminSite ? "dashboard" : "blog",
    };

    jwt.sign(
      tokenPayload,
      process.env.JWT_SECRET,
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ error: "Error creating token" });
        }

        return res.json({
          token,
          user: {
            username: userDetails.username,
            userID: userDetails.id,
            email: userDetails.email,
            role: userDetails.role,
          },
        });
      },
    );
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  try {
    await userService.deleteUser(email);
    console.log("USER DELETED");
    res.json({ message: "User deleted" });
  } catch (err) {
    console.log("OOPS", err);
    res.status(400).json({ error: err });
  }
});

module.exports = { createUser, login, deleteUser };
