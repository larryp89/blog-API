const postService = require("../services/postService");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("../middleware/validateForms");

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await postService.getAllPosts();
  const user = req.user;
  res.json({ posts, user });
});

const getPublishedPosts = asyncHandler(async (req, res) => {
  const posts = await postService.getPublishedPosts();
  const user = req.user;
  res.json({ posts, user });
});

const getSinglePost = asyncHandler(async (req, res) => {
  const postID = parseInt(req.params.postID);
  const post = await postService.getSinglePost(postID);
  res.json({ post });
});

const getAuthorPosts = asyncHandler(async (req, res) => {
  const authorID = parseInt(req.user.authorID);
  const posts = await postService.getAuthorPosts(authorID);
  const user = req.user;
  res.json({ posts, user });
});

const createPost = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    return res
      .status(400)
      .json({ error: "Form error", messages: errorMessages });
  }

  const title = req.body.title;
  const content = req.body.content;
  const isPublished = req.body.isPublished;
  const authorID = req.user.authorID;
  await postService.createPost(title, content, authorID, isPublished);
  res.json({ message: "You successfully posted!" });
});

const deletePost = asyncHandler(async (req, res) => {
  const authorID = parseInt(req.user.authorID);
  const postID = parseInt(req.body.postID);
  await postService.deletePost(authorID, postID);
  res.json({ message: "Post deleted!" });
});

const editPost = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    return res
      .status(400)
      .json({ error: "Form error", messages: errorMessages });
  }

  const postID = req.body.postID;
  const title = req.body.title;
  const content = req.body.content;
  const isPublished = req.body.isPublished;
  const authorID = req.user.authorID;
  await postService.editPost(authorID, postID, title, content, isPublished);
  res.json({ messge: "Post successfully updated!" });
});

module.exports = {
  getAllPosts,
  getPublishedPosts,
  createPost,
  getSinglePost,
  deletePost,
  getAuthorPosts,
  editPost,
};
