const { Router } = require("express");
const postController = require("../controllers/postController");
const postRoutes = Router();

// Get all posts
postRoutes.get("/", postController.getAllPosts);

// Get a specific post, i.e. /posts/5
postRoutes.get("/:postID", postController.getSinglePost);

// Update a post

// Delete a post
postRoutes.delete("/", postController.deletePost);

// Make a post
postRoutes.post("/", postController.createPost);

module.exports = postRoutes;
