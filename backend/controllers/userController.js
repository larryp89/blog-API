const userService = require("../services/userService");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const role = req.body.role;
  await userService.createUser(email, password, username, role);
  res.send("New user successfully added!");
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userDetails = await userService.getUser(email);

  const match = await bcrypt.compare(password, userDetails.password);

  if (match) {
    // Only include necessary user data in the token (never password)
    const tokenPayload = {
      userId: userDetails.id,
      email: userDetails.email,
    };

    jwt.sign(tokenPayload, "secretkey", { expiresIn: "2h" }, (err, token) => {
      if (err) {
        return res.status(500).json({ error: "Error creating token" });
      }

      res.json({ token });
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = { createUser, login };
