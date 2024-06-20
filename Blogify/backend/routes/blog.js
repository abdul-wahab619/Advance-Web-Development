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

// Get blog by id for editing
router.get("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({
      ...blog._doc,
      coverImageUrl: blog.coverImageUrl ? `${req.protocol}://${req.get('host')}${blog.coverImageUrl}` : null,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Update Blog by id
router.put("/:id", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  try {
    if (!title || !body) {
      return res.status(400).send({
        message: "Send All required fields: title, body, coverImage",
      });
    }

    const { id } = req.params;
    const updateData = { title, body };

    if (req.file) {
      updateData.coverImageUrl = `/uploads/${req.file.filename}`;
    }

    const result = await Blog.findByIdAndUpdate(id, updateData, { new: true });

    if (!result) {
      return res.status(404).send({ message: "Blog not found" });
    }

    return res
      .status(200)
      .send({ message: "Blog updated successfully", blog: result });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
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

// // Update Blog by id
// router.put("/:id", upload.single("coverImage"), async (req, res) => {
//   const { title, body } = req.body;
//   try {
//     if (!title || !body) {
//       return res.status(400).send({
//         message: "Send All required fields: title, body, coverImage",
//       });
//     }

//     const { id } = req.params;
//     const updateData = { title, body };

//     if (req.file) {
//       updateData.coverImageUrl = `/uploads/${req.file.filename}`;
//     }

//     const result = await Blog.findByIdAndUpdate(id, updateData, { new: true });

//     if (!result) {
//       return res.status(404).send({ message: "Blog not found" });
//     }

//     return res
//       .status(200)
//       .send({ message: "Blog updated successfully", blog: result });
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send({ message: err.message });
//   }
// });

// delete Blog by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ message: "Blog not found" });
    }
    return res.status(200).send({ message: "Blog deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export default router;
