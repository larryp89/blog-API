const { prisma } = require("../config/config");

async function getAllPosts() {
  return await prisma.post.findMany();
}

module.exports = {
  getAllPosts,
};
