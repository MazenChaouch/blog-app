const express = require("express");
const router = express.Router();

router.get("/" /*  add getAllPosts */); // display all posts
router.get("/new" /*  add newPost */); // form add post
router.post("/" /*  add createPost */); // api create post
router.get("/:id" /*  add getPost */); // display post by id
router.get("/:id/edit" /*  add editPost */); // form update post
router.post("/:id" /* add updatePost */); // api update post
router.post("/:id/delete" /* add deletePost*/); // api delete post

module.exports = router;
