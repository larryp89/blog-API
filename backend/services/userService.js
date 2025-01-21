const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/userRepository");

async function createUser(email, password, username, role) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await userRepository.createUser(email, hashedPassword, username, role);
}

async function getUserByEmail(email) {
  return await userRepository.getUserByEmail(email);
}

async function getUserByUsername(username) {
  return await userRepository.getUserByUsername(username);
}

// TODO: add delete user

module.exports = { createUser, getUserByEmail, getUserByUsername };
