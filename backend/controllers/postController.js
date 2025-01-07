const postService = require("../services/postService");

const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  res.json({ posts });
};

module.exports = {
  getAllPosts,
};
