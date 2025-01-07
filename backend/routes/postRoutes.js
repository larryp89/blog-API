const { Router } = require("express");
const postRoutes = Router();

postRoutes.get("/", (req, res) => {
  res.send("ALL THE POSTS");
});
module.exports = postRoutes;
