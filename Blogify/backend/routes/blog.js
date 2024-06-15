import express from "express";
import multer from "multer";
import path from "path";
import Blog from "../models/blog.js";
import Comment from "../models/comment.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// Add a new blog form
router.get("/add", (req, res) => {
  return res.json({
    user: req.user,
  });
});

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json({
      count: blogs.length,
      data: blogs,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Get a single blog and its comments
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    const comments = await Comment.find({ blogId: req.params.id }).populate(
      "createdBy"
    );
    return res.json({
      user: req.user,
      blog,
      comments,
    });
  } catch (error) {
    console.error("Error fetching blog or comments:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Comment on a blog
router.post("/comment/:blogId", async (req, res) => {
  const { content } = req.body;
  console.log("content", content);
  try {
    const comment = await Comment.create({
      content: content,
      blogId: req.params.blogId,
      // createdBy: req.user._id,
    });
    return res.json({
      message: "Comment added successfully",
      comment,
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Create a new blog
router.post("/create", upload.single("coverImage"), async (req, res) => {
  try {
    const { title, body } = req.body;
    const coverImageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !body) {
      return res.status(400).json({ message: "Title and body are required" });
    }

    const blog = await Blog.create({
      title,
      body,
      coverImageUrl,
      // createdBy: req.user._id, // Uncomment if you have user authentication
    });

    return res.json({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
