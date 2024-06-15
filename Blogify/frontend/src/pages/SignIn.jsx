import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    const userData = {
        email,
        password,
      };
    try {
      await axios.post("http://localhost:9000/user/signin", userData);
      
      enqueueSnackbar("Signin successful", { variant: "success" });
      navigate("/");
    }
     catch (err) {
      enqueueSnackbar("Error during signin", { variant: "error" });
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signin</h2>
        <form onSubmit={handleSigninSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="mt-2 text-sm text-gray-600">
              We'll never share your email with anyone else.
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
