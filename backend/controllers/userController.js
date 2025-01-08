const userService = require("../services/userService");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const role = req.body.role;
  await userService.createUser(email, password, username, role);
  res.send("New user successfully added!");
});

const login = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userDetails = await userService.getUser(email);
  const match = await bcrypt.compare(password, userDetails.password);
  if (match) {
    res.send("YOU ARE LEGIT");
  } else {
    res.send("FRAUD");
  }
});

module.exports = { createUser, login };
