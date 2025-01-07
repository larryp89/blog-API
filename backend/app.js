const express = require("express"); // Import express
const app = express(); // Initialise Express servers
const postRoutes = require("./routes/postRoutes");

app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My Blog-API App! Listening on Port ${PORT}!`);
});
