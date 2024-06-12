const { Router } = require("express");
const router = Router();

const {
  AddBlog,
  ViewBlogs,
  CommentOnBlog,
  CreateNewBlog,
} = require("../controllers/blogController.js");

router.get("/add-new", AddBlog);

router.get("/:id", ViewBlogs);

router.post("/comment/:blogId", CommentOnBlog);

router.post("/", CreateNewBlog);

module.exports = router;
