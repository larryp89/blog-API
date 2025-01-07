const postRepository = require("../repositories/postRepository");

const getAllPosts = async (req, res) => {
  const posts = await postRepository.getAllPosts();
  return posts;
};

module.exports = {
  getAllPosts,
};
