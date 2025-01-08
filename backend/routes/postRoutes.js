const { Router } = require("express");
const postRoutes = Router();
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const verifyToken = require("../middleware/verifyToken");

// Post routes
postRoutes.get("/", verifyToken, postController.getAllPosts);
postRoutes.get("/:postID", postController.getSinglePost);
postRoutes.delete("/", postController.deletePost);
postRoutes.post("/", postController.createPost);

// Update a post
// TODO: Add this bit

// Nested comment routes
postRoutes.get("/:postID/comments", commentController.getAllPostComments); // Get all comments for a post
postRoutes.post("/:postID/comments", commentController.addComment); // Post a comment to a post
postRoutes.delete("/postID/comments"); // Delete a comment from a post

module.exports = postRoutes;
