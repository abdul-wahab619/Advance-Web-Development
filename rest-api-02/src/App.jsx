import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(0);

  const getDataFromApi = async () => {
    const myEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=69fc58c00ae84add99a19037b609b31e&page=${currentPage}&pageSize=${pageSize}`;

    try {
      const response = await fetch(myEndpoint);
      const data = await response.json();
      const totalPages = Math.ceil(data.totalResults / pageSize);

      setTotalPages(totalPages);
      setTotalResults(data.totalResults);
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, [currentPage, pageSize]);

  return (
    <Router>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
          >
            <div className="top-1 w-full">
              <img
                className="w-full h-auto rounded-lg"
                src={article.urlToImage || "default_image_url"}
                alt={article.title}
              />
            </div>
            <h4 className="my-2 text-gray-500">{article.source?.name}</h4>
            <div className="flex justify-start items-center gap-x-2">
              <h2 className="my-1">{article.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <BiUserCircle className="text-red-300 text-2xl" />
              <h2 className="my-1">{article.author || "Unknown Author"}</h2>
            </div>
            <h2 className=" top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
              {article.publishedAt}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center align-middle gap-5 m-3 pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`bg-blue-400 text-white font-bold py-3 px-4 rounded-full  ${
            currentPage === 1 ? "bg-blue-200" : "bg-blue-400"
          }`}
        >
          Previous
        </button>
        <p
          className={`bg-blue-400 text-white font-bold py-3 px-4 rounded-full`}
        >
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-blue-400 text-white font-bold py-3 px-4 rounded-full ${
            currentPage === totalPages ? "bg-blue-200" : "bg-blue-400"
          }`}
        >
          Next
        </button>
      </div>
    </Router>
  );
}

export default App;
