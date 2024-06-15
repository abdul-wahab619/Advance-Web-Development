import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Blogs from "./pages/Blogs.jsx";
import DeleteBlog from "./pages/DeleteBlog.jsx";
import EditBlog from "./pages/EditBlog.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/create" element={<CreateBlog />} />
      <Route path="/edit/blog/:id" element={<EditBlog />} />
      <Route path="/delete/blog/:id" element={<DeleteBlog />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  );
};

export default App;
