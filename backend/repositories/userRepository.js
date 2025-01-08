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

async function getUser(email) {
  return await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
}

module.exports = { createUser, getUser };
