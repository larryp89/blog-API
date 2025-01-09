const express = require("express"); // Import express
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express(); // Initialise Express servers
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use("/posts", postRoutes);
app.use("/auth", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My Blog-API App! Listening on Port ${PORT}!`);
});
