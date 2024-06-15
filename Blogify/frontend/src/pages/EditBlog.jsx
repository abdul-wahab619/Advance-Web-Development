import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EditBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/blogs/edit/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleEditBlog = (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = {
      title,
      body,
    };
    axios
      .put(`http://localhost:9000/blogs/${id}`, data)
      .then(() => {
        enqueueSnackbar("Blog Edited successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 flex justify-center items-center h-screen">
        <div className="max-w-xl w-full bg-white p-8 rounded shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
          <form onSubmit={handleEditBlog} encType="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-xl font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                className="p-3 text-2xl mt-1 block w-full border-gray-500 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                name="title"
                aria-describedby="title"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="body"
                className="block text-xl font-medium text-gray-700"
              >
                Body
              </label>
              <textarea
                className="p-3 text-2xl mt-1 block w-full border-gray-300 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                name="body"
                id="body"
                rows="5"
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditBlog;
