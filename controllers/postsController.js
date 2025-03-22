const posts = [];

getAllPosts = (req, res) => {
  res.render("posts", { posts });
};

getPost = (req, res) => {
  const post = posts.find((post) => post.id == req.params.id);
  if (!post) res.status(404).send("post not found");
  else res.render("post", { post });
};

newPost = (req, res) => {
  res.render("new");
};

createPost = (req, res) => {
  const data = req.body;
  const { title, content } = data;
  const post = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    title,
    content,
  };
  posts.push(post);
  res.redirect("/posts");
};

editPost = (req, res) => {
  const post = posts.find((post) => post.id == req.params.id);
  if (!post) res.status(404).send("post not found");
  else res.render("edit", { post });
};

updatePost = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const index = posts.findIndex((post) => post.id == req.params.id);
  posts[index].title = title;
  posts[index].content = content;
  res.redirect(`/posts/${req.params.id}`);
};

deletePost = (req, res) => {
  const id = req.params.id;
  const start = posts.findIndex((post) => post.id == id);
  posts.splice(start, 1);
  res.redirect("/posts");
};

// export all controllers
module.exports = {
  getAllPosts,
  getPost,
  newPost,
  createPost,
  editPost,
  updatePost,
  deletePost,
};
