const express = require("express");
const cors = require("cors");
const path = require("node:path");

require("dotenv").config();
const postRoutes = require("../backend/routes/postRoutes");
const userRoutes = require("../backend/routes/userRoutes");
const assetsPath = path.join(__dirname, "../public");

const app = express();
app.use(express.static(assetsPath));
app.use(
  cors({
    origin: [
      "https://blog-api-blog.vercel.app",
      "https://blog-api-dashboard.vercel.app",
    ],
    credentials: true,
  }),
);
app.use(express.json()); // Used to parse JSON payloads rather than URL encoded which is for directly submitted form
app.use(express.urlencoded({ extended: true }));
app.use("/api/posts", postRoutes);
app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My Blog-API App! Listening on Port ${PORT}!`);
});
