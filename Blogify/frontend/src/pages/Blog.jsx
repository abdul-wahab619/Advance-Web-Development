import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import defaultImg from "../assets/images/default1.png";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/blogs/${id}`, {
          withCredentials: true, // Ensure cookies are sent
        });
        setBlog(response.data.blog);
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlogData();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:9000/blogs/comment/${blog._id}`,
        {
          content: newComment,
        },
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );
      setComments([...comments, response.data.comment]);
      setNewComment("");

      // Redirect back to the same blog page after adding comment
      navigate(`/blog/${id}`);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="mt-24 container mx-auto my-10 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={`http://localhost:9000${blog.coverImageUrl}`}
            className="w-full h-96 object-cover"
            alt="Blog cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-lg text-gray-700">{blog.body}</p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Comments - ({comments.length})
          </h2>
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Enter your comment"
              className="w-full p-4 border rounded-lg"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-700"
            >
              Add Comment
            </button>
          </form>
          <div>
            {comments.map((comment) => (
              <div key={comment._id} className="mb-4">
                <div className="flex items-center mb-2">
                  <img
                    src={defaultImg}
                    alt="User"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">
                      {comment.createdBy && comment.createdBy.fullName
                        ? comment.createdBy.fullName
                        : "Anonymous"}
                    </p>
                  </div>
                </div>
                <p className="ml-14">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
