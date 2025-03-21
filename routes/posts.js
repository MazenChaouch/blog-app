const express = require("express");
const router = express.Router();

router.get("/" /*  add getAllPosts */);
router.get("/new" /*  add newPost */);
router.post("/" /*  add createPost */);
router.get("/:id" /*  add getPost */);
router.get("/:id/edit" /*  add editPost */);
router.post("/:id" /* add updatePost */);
router.post("/:id/delete" /* add deletePost*/);

module.exports = router;
