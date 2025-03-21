const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.get("/", postsController.getAllPosts);
router.get("/new", postsController.newPost);
router.post("/", postsController.createPost);
router.get("/:id", postsController.getPost);
router.get("/:id/edit", postsController.editPost);
router.post("/:id", postsController.updatePost);
router.post("/:id/delete", postsController.deletePost);

module.exports = router;
