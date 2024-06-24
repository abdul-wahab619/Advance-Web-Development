import express from "express";

import {
  getAllBlogs,
  getSingleBlog,
  editBlog,
  updateBlog,
  commentOnBlog,
  deleteBlog,
  createNewBlog,
} from "../controllers/blogController.js";

const router = express.Router();

// Get all blogs
router.get("/", getAllBlogs);

// Get a single blog and its comments
router.get("/:id", getSingleBlog);

// Get blog by id for editing
router.get("/edit/:id", editBlog);

// Update Blog by id
router.put("/:id", updateBlog);

// Comment on a blog
router.post("/comment/:blogId", commentOnBlog);

// Create a new blog
router.post("/create", createNewBlog);

// delete Blog by id
router.delete("/:id", deleteBlog);

export default router;
