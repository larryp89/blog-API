const { prisma } = require("../config/client");

async function createUser(email, password, username, role) {
  return await prisma.user.create({
    data: {
      email: email,
      password: password,
      username: username,
      role: role,
    },
  });
}

async function getUserByEmail(email) {
  return await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
}

async function getUserByUsername(username) {
  return await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
}

async function deleteUser(email) {
  return await prisma.user.delete({
    where: {
      email: email,
    },
  });
}

module.exports = { createUser, getUserByEmail, getUserByUsername, deleteUser };
