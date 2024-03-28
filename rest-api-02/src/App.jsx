import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const getDataFromApi = async () => {
    let myEndpoint =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=69fc58c00ae84add99a19037b609b31e";
    try {
      let response = await fetch(myEndpoint);
      let data = await response.json();

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
    <div>
      <h1 className="font-bold text-3xl">Data from our REST API</h1>
      <h3 className="font-bold text-2xl">Authors:</h3>
      {articles.map((article, index) => (
        <p key={index}>{article.author}</p>
      ))}
      <h3 className="font-bold text-2xl">Titles:</h3>
      {articles.map((article, index) => (
        <p key={index}>{article.title}</p>
      ))}
      <h3 className="font-bold text-2xl">Total Results:</h3> {totalResults}
    </div>
  );
}

export default App;
