import apiClient from "./api-clientWrapper";

// Posts endpoints
const fetchPosts = () => apiClient.get("/posts");

const fetchSinglePost = (postId) => apiClient.get(`/posts/${postId}`);

const fetchAuthorPosts = () => apiClient.get("/posts/auth-posts");

const createPost = (postData) => apiClient.post("/posts", postData);

const editPost = (postData) => apiClient.put("/posts", postData);

const deletePost = (postData) => apiClient.delete("/posts", postData);

// Auth endpoints
const login = (formData) => apiClient.post("/auth/login", formData);

const signup = (formData) => apiClient.post("/auth/signup", formData);

export {
  fetchPosts,
  login,
  signup,
  fetchSinglePost,
  fetchAuthorPosts,
  createPost,
  editPost,
  deletePost,
};
