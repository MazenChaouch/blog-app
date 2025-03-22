const express = require("express");
const postsRoutes = require("./routes/posts");
const methodOverride = require("method-override");
const app = express();

// add middlewares and set view engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// custom middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(methodOverride("_method"));

app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something went wrong! be patient");
  next();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
