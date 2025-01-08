const commentRepository = require("../repositories/commentRepository");

const addComment = async (content, userID, postID) => {
  return await commentRepository.addComment(content, userID, postID);
};

const getAllPostComments = async (postID) => {
  return await commentRepository.getAllPostComments(postID);
};

module.exports = { addComment, getAllPostComments };
