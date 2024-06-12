const multer = require("multer");
const path = require("path");

const Blog = require("../models/blog.js");
const Comment = require("../models/comment.js");

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

function AddBlog(req, res) {
  return res.render("addBlog", {
    user: req.user,
  });
}

async function ViewBlogs(req, res) {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    "createdBy"
  );
  return res.render("blog", {
    user: req.user,
    blog,
    comments,
  });
}

async function CommentOnBlog(req, res) {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
}

const CreateNewBlog = [
  upload.single("coverImage"),
  async function (req, res) {
    try {
      const { title, body } = req.body;
      const blog = await Blog.create({
        body,
        title,
        createdBy: req.user._id,
        coverImageUrl: `/uploads/${req.file.filename}`,
      });
      return res.redirect(`/blog/${blog._id}`);
    } catch (error) {
      console.error("Error creating blog:", error);
      return res.status(500).send("Internal Server Error");
    }
  },
];

module.exports = { AddBlog, ViewBlogs, CommentOnBlog, CreateNewBlog };
