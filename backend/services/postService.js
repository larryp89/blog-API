const postRepository = require("../repositories/postRepository");

const getAllPosts = async () => {
  const posts = await postRepository.getAllPosts();
  return posts;
};

const getSinglePost = async (postID) => {
  const post = await postRepository.getSinglePost(postID);
  return post;
};

const getAuthorPosts = async (authorID) => {
  console.log(authorID);
  const posts = await postRepository.getAuthorPosts(authorID);
  return posts;
};

const createPost = async (title, content, authorID) => {
  await postRepository.createPost(title, content, authorID);
};

const deletePost = async (authorID, postID) => {
  await postRepository.deletePost(authorID, postID);
};

const updatePublishedStatus = async (authorID, postID, isPublished) => {
  await postRepository.updatePublishedStatus(authorID, postID, isPublished);
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  updatePublishedStatus,
  getSinglePost,
  getAuthorPosts,
};
