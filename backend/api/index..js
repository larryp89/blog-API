const express = require("express");
const cors = require("cors");
require("dotenv").config();
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json()); // Used to parse JSON payloads rather than URL encoded which is for directly submitted form

app.use("/api/posts", postRoutes);
app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My Blog-API App! Listening on Port ${PORT}!`);
});
