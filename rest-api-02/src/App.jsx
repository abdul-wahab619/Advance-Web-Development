import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const getDataFromApi = async () => {
    let myEndpoint =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=69fc58c00ae84add99a19037b609b31e";
    try {
      let response = await fetch(myEndpoint);
      let data = await response.json();

      console.log("data", data);

      setTotalResults(data.totalResults);
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <Router>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
          >
            <h2 className=" top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
              {article.publishedAt}
            </h2>
            <h4 className="my-2 text-gray-500">{article.source[1]}</h4>
            <div className="flex justify-start items-center gap-x-2">
              <PiBookOpenTextLight className="text-red-300 text-2xl" />
              <h2 className="my-1">{article.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <BiUserCircle className="text-red-300 text-2xl" />
              <h2 className="my-1">{article.author}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
              <BiShow
                className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                onClick={() => setShowModal(true)}
              />
              <Link to={`/books/details/${article._id}`}>
                <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
              </Link>
              <Link to={`/books/edit/${article._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
              </Link>
              <Link to={`/books/delete/${article._id}`}>
                <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Router>
  );
}

export default App;
