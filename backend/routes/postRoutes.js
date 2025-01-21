const { Router } = require("express");
const postRoutes = Router();
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const verifyToken = require("../middleware/verifyToken");
const { postValidator } = require("../middleware/validateForms");

// Post routes
postRoutes.get("/", verifyToken, postController.getPublishedPosts);
postRoutes.delete("/", verifyToken, postController.deletePost);
postRoutes.post("/", verifyToken, postValidator, postController.createPost);
postRoutes.put("/", verifyToken, postValidator, postController.editPost);
postRoutes.get("/auth-posts", verifyToken, postController.getAuthorPosts);
postRoutes.get("/:postID", postController.getSinglePost);

// Nested comment routes
postRoutes.get("/:postID/comments", commentController.getAllPostComments); // Get all comments for a post
postRoutes.post("/:postID/comments", commentController.addComment); // Post a comment to a post
postRoutes.delete("/:postID/comments"); // Delete a comment from a post

module.exports = postRoutes;
