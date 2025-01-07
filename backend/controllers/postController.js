const postRepository = require("../repositories/postRepository");

const getAllPosts = async (req, res) => {
  const posts = await postRepository.getAllPosts();
  res.json({ posts });
};

module.exports = {
  getAllPosts,
};
