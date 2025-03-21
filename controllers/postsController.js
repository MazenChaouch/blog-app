const posts = [];

exports.getAllPosts = (req, res) => {
  res.render("posts", { posts });
};

exports.getPost = (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.render("post", { post });
};

exports.newPost = (req, res) => {
  res.render("new");
};

exports.createPost = (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(post);
  res.redirect("/posts");
};

exports.editPost = (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.render("edit", { post });
};

exports.updatePost = (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect("/posts");
};

exports.deletePost = (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send("Post not found");
  posts.splice(postIndex, 1);
  res.redirect("/posts");
};
