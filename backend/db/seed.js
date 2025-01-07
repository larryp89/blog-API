const { prisma } = require("../config/config");

async function main() {
  await prisma.user.create({
    data: {
      email: "lonce@mail.com",
      password: "hello123",
      username: "lonce",
      role: "author",
    },
  });

  await prisma.post.create({
    data: {
      title: "First Post",
      content: "Just writing my first post, having a good time.",
      authorId: 1,
    },
  });
}

main();
