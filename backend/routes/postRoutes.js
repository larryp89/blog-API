const { Router } = require("express");
const postController = require("../controllers/postController");
const postRoutes = Router();

// Get all posts
postRoutes.get("/", postController.getAllPosts);

// Get a specific post
postRoutes.get("/:postID", (req, res) => {
  const postID = req.params.postID;
  res.send(`POST NUMBER: ${postID}`);
});

// Update a post

// Make a post
postRoutes.post("/", (req, res) => {
  res.json({ message: "YOU MADE A POST" });
});

module.exports = postRoutes;
