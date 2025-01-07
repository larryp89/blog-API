const { prisma } = require("../config/config");

async function getAllPosts() {
  return await prisma.post.findMany();
}

async function getSinglePost(postID) {
  return await prisma.post.findFirst({
    where: {
      id: postID,
    },
  });
}

async function createPost(title, content, authorID) {
  return await prisma.post.create({
    data: {
      title: title,
      content: content,
      authorId: authorID,
    },
  });
}

async function deletePost(authorID, postID) {
  return await prisma.post.delete({
    where: {
      authorId: authorID,
      id: postID,
    },
  });
}

async function updatePublishedStatus(authorID, postID, isPublished) {
  return await prisma.post.update({
    where: {
      authorID: authorID,
      id: postID,
    },

    data: {
      published: isPublished,
    },
  });
}

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePublishedStatus,
};
