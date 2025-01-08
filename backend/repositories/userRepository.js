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

module.exports = { createUser };
