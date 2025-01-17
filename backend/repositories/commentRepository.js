const { prisma } = require("../config/client");

async function addComment(content, userID, postID) {
  return await prisma.comment.create({
    data: {
      content: content,
      userId: userID,
      postId: postID,
    },
  });
}

async function getAllPostComments(postID) {
  return await prisma.comment.findMany({
    where: {
      postId: postID,
    },
    include: {
      author: { select: { username: true } },
    },
  });
}

module.exports = { addComment, getAllPostComments };
