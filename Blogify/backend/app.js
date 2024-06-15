import dotenv from "dotenv";
import path from "path";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import Blog from "./models/blog.js";
import userRoute from "./routes/user.js";
import blogRoute from "./routes/blog.js";
import contactRoute from "./routes/contact.js";

import { checkForAuthenticationCookie } from "./middlewares/authentication.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.use("/user", userRoute);
app.use("/blogs", blogRoute);
app.use("/contact", contactRoute);

app.get("/", async (req, res) => {
  try {
    const allBlogs = await Blog.find({}).sort("createdAt");
    res.render("home", {
      user: req.user,
      blogs: allBlogs,
    });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
