commentService = require("../services/commentService");
const asyncHandler = require("express-async-handler");

const addComment = asyncHandler(async (req, res) => {
  const content = req.body.content;
  const userID = parseInt(req.body.userID);
  const postID = parseInt(req.params.postID);
  await commentService.addComment(content, userID, postID);
  res.json("YOU POSTED A COMMENT YOUNG PADAWAN");
});

const getAllPostComments = asyncHandler(async (req, res) => {
  const postID = parseInt(req.params.postID);
  const allComments = await commentService.getAllPostComments(postID);
  res.json({ comments: allComments });
});

module.exports = { addComment, getAllPostComments };
