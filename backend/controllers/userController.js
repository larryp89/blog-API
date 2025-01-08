const userService = require("../repositories/userService");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const username = req.body.username;
  const role = req.body.role;
  await userService.login(email, password, username, role);
});

module.exports = { createUser };
