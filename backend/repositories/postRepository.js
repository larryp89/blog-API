const { prisma } = require("../config/client");

async function getAllPosts() {
  return await prisma.post.findMany({
    include: { author: { select: { username: true } } },
  });
}

async function getPublishedPosts() {
  return await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { username: true } } },
  });
}

async function getSinglePost(postID) {
  return await prisma.post.findFirst({
    where: { id: postID },
    include: {
      author: { select: { username: true } },
    },
  });
}

async function getAuthorPosts(authorID) {
  return await prisma.post.findMany({
    where: { authorId: authorID },
    include: {
      author: { select: { username: true } },
    },
  });
}

async function createPost(title, content, authorID, isPublished) {
  return await prisma.post.create({
    data: {
      title: title,
      content: content,
      authorId: authorID,
      published: isPublished,
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

async function editPost(authorID, postID, title, content, isPublished) {
  return await prisma.post.update({
    where: {
      authorId: authorID,
      id: postID,
    },

    data: {
      published: isPublished,
      title: title,
      content: content,
    },
  });
}

module.exports = {
  getAllPosts,
  getPublishedPosts,
  getSinglePost,
  createPost,
  deletePost,
  getAuthorPosts,
  editPost,
};
