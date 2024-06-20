import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EditBlog = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:9000/blogs/edit/${id}`)
      .then((res) => {
        setCoverImageUrl(res.data.coverImageUrl);
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleEditBlog = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);

    if (coverImageFile) {
      formData.append("coverImage", coverImageFile);
    }

    axios
      .put(`http://localhost:9000/blogs/${id}`, formData)
      .then(() => {
        enqueueSnackbar("Blog edited successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Error editing blog", { variant: "error" });
        console.log(err);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImageFile(file);
    setCoverImageUrl(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar />
      <div className="mt-52 mb-52 flex justify-center items-center h-screen">
        <div className="max-w-xl w-full bg-white p-8 rounded shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
          <form onSubmit={handleEditBlog} encType="multipart/form-data">
            <div className="mb-4">
              <label
                htmlFor="coverImage"
                className="block text-xl font-medium text-gray-700"
              >
                Cover Image
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                id="coverImage"
                name="coverImage"
                aria-describedby="coverImage"
              />
              {coverImageUrl && (
                <img
                  className="h-full w-full mt-2"
                  src={coverImageUrl}
                  alt="cover"
                />
              )}
            </div>
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
