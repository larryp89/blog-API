commentService = require("../services/commentService");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("../middleware/validateForms");

const addComment = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    return res
      .status(400)
      .json({ error: "Comment error", messages: errorMessages });
  }
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
