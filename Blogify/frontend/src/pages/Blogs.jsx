import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:9000/blogs");
        setBlogs(response.data.data); // Assuming `data` is an object with a `data` property containing the array of blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="mt-24 flex justify-center my-10">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearch}
          className="w-1/2 font-medium text-xl px-5 py-2 rounded-lg border border-gray-400 focus:border-blue-400 focus:bg-blue-100"
        />
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-semibold">Our Blogs ({filteredBlogs.length})</h3>
        <hr className="mt-2 mb-4 ml-[43%] items-center border-b-4 w-44"/>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {filteredBlogs.map((blog) => (
          <div
            key={blog._id}
            className="p-3 card w-full bg-white shadow-2xl rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-2 flex justify-between text-2xl text-primaryColor">
              <Link to={`/edit/blog/${blog._id}`}>
                <AiFillEdit />
              </Link>
              <Link to={`/delete/blog/${blog._id}`}>
                <AiOutlineDelete className="text-red-500" />
              </Link>
            </div>
            <img
              src={`http://localhost:9000${blog.coverImageUrl}`}
              className="rounded-lg card-img-top w-full h-48 object-cover"
              alt="Blog cover"
            />
            <div className="card-body p-4">
              <h5 className="card-title text-2xl font-bold mb-2">
                {blog.title}
              </h5>
              <button
                onClick={() => navigate(`/blog/${blog._id}`)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
