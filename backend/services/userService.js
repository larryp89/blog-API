const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/userRepository");

async function createUser(email, password, username, role) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await userRepository.createUser(email, hashedPassword, username, role);
}

async function getUser(email) {
  return await userRepository.getUser(email);
}

module.exports = { createUser, getUser };
