import { useState, useEffect } from "react";
function App() {
  const [dataStatus, setdataStatus] = useState("");
  const [datatotalResults, setdatatotalResults] = useState("");
  const [dataArticles, setArticles] = useState([]);
  const getDataFromApi = async () => {
    const myEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=69fc58c00ae84add99a19037b609b31e`;
    let myData = await fetch(myEndpoint); /* Must wait for fetching */
    let parsedData = await myData.json(); /* Must wait for myData.json */
    console.log("parsed received Data: ", parsedData);
    setdataStatus(parsedData.status);
    setdatatotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
  };
  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div>
      <h1 className="m-5">Data from our REST API</h1>

      <p className="m-5">
        <b>Status:</b> {dataStatus}
      </p>
      <p className="m-5">
        <b>Total Results:</b> {datatotalResults}
      </p>
      <p className="m-5">
        <b>Articles:</b>
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dataArticles.map((element, index) => {
          let authorEdit = element.author;
          if (authorEdit === null) {
            authorEdit = "Abdul Wahab";
          }
          //if no image, then use our own
          let imageEdit = element.urlToImage;
          if (imageEdit === null) {
            imageEdit =
              "https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww";
          }
          return (
            <div
              key={index}
              className="rounded-lg border border-black p-3 m-5 flex flex-col gap-2"
            >
              <img
                src={imageEdit}
                className="w-50 h-40 rounded-lg"
                alt="Image for News"
              />
              <p className="text-red-500 font-bold">Title: {element.title}</p>
              <p className="text-orange-500 font-semibold">
                Author: {authorEdit}
              </p>
              <p className="text-green-500 font-medium">
                PublishedAt: {element.publishedAt}
              </p>
              <hr
                style={{ borderWidth: "5px" }}
                className="mt-2 mb-2 text-black"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
