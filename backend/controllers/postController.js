const postService = require("../services/postService");
const asyncHandler = require("express-async-handler");

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await postService.getAllPosts();
  const user = req.user;
  res.json({ posts, user });
});

const getSinglePost = asyncHandler(async (req, res) => {
  const postID = parseInt(req.params.postID);
  const post = await postService.getSinglePost(postID);
  res.json({ post });
});

const getAuthorPosts = asyncHandler(async (req, res) => {
  console.log("REQ USER", req.user);
  const authorID = parseInt(req.user.authorID);
  console.log(authorID);
  const posts = await postService.getAuthorPosts(authorID);
  res.json({ posts });
});

const createPost = asyncHandler(async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  // TODO: Authenticating the user
  const authorID = parseInt(req.body.authorID);
  await postService.createPost(title, content, authorID);
  res.send("You successfully posted!");
});

const deletePost = asyncHandler(async (req, res) => {
  const authorID = parseInt(req.body.authorID);
  const postID = parseInt(req.body.postID);
  await postService.deletePost(authorID, postID);
  res.send("Post deleted!");
});

// TODO:This will need to change once sort the front end
// const updatePublishedStatus = async (req, res) => {
//   const authorID = req.body.authorID;
//   const postID = req.body.postID;
//   const isPublished = req.body.isPublished;
//   await postService.updatePublishedStatus(authorID, postID, isPublished);
// };

module.exports = {
  getAllPosts,
  createPost,
  getSinglePost,
  deletePost,
  getAuthorPosts,
};
