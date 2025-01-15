const userService = require("../services/userService");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const role = req.body.role;
  try {
    await userService.createUser(email, password, username, role);
    return res.json("New user successfully added!");
  } catch (err) {
    return res.json("Something went wrong:", err);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userDetails = await userService.getUser(email);
  const match = await bcrypt.compare(password, userDetails.password);
  if (match) {
    // Only include necessary user data in the token (never password)
    const tokenPayload = {
      authorID: userDetails.id,
      email: userDetails.email,
      username: userDetails.username,
    };
    jwt.sign(tokenPayload, "secretkey", { expiresIn: "30s" }, (err, token) => {
      if (err) {
        return res.status(500).json({ error: "Error creating token" });
      }

      return res.json({ token });
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = { createUser, login };
