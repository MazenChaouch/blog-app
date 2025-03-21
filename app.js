const express = require("express");
const bodyParser = require("body-parser");
const postsRoutes = require("./routes/posts");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.redirect("/posts");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
