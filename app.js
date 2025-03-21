const express = require("express");
const postsRoutes = require("./routes/posts");

const app = express();

// add middlewares and set view engine

app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.redirect("/posts");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
