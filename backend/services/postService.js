const postRepository = require("../repositories/postRepository");

const getAllPosts = async () => {
  const posts = await postRepository.getAllPosts();
  return posts;
};

const getPublishedPosts = async () => {
  const posts = await postRepository.getPublishedPosts();
  return posts;
};

const getSinglePost = async (postID) => {
  const post = await postRepository.getSinglePost(postID);
  return post;
};

const getAuthorPosts = async (authorID) => {
  const posts = await postRepository.getAuthorPosts(authorID);
  return posts;
};

const createPost = async (title, content, authorID, isPublished) => {
  await postRepository.createPost(title, content, authorID, isPublished);
};

const deletePost = async (authorID, postID) => {
  await postRepository.deletePost(authorID, postID);
};

const editPost = async (authorID, postID, title, content, isPublished) => {
  await postRepository.editPost(authorID, postID, title, content, isPublished);
};

module.exports = {
  getAllPosts,
  getPublishedPosts,
  createPost,
  deletePost,
  editPost,
  getSinglePost,
  getAuthorPosts,
};
