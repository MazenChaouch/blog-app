const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPost,
  newPost,
  createPost,
  editPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");

router.get("/", getAllPosts); // display all posts
router.get("/new", newPost); // form add post
router.post("/", createPost); // api create post
router.get("/:id", getPost); // display post by id
router.get("/:id/edit", editPost); // form update post
router.put("/:id", updatePost); // api update post
router.delete("/:id/delete", deletePost); // api delete post

module.exports = router;
