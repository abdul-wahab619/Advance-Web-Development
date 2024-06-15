import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { BASE_URL } from "../config.js";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/contact`, formData);
      enqueueSnackbar("Email sent successfully", { variant: "success" });
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      enqueueSnackbar("Error submitting form", { variant: "error" });
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="mt-24 bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-18 font-light text-center text-gray-600">
            Got a technical issue? Want to send feedback about a beta feature?
            Let us know.
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Let us know about the issue..."
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                rows={6}
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write the detailed message here..."
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
