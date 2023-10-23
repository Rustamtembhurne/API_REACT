import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import News1 from "./Cards";

const MyNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const updateNews = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;

    try {
      const response = await axios.get(url); // Use Axios to make the GET request

      setArticles(response.data);
    } catch (err) {
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <div className="row">
      {error ? (
        <div>Error: {error}</div>
      ) : (
        articles.map((element, id) => (
          <div className="col-md-3" key={id}>
            <News1
              title={element.title}
              imageURL={element.url}
              thumbnailUrl={element.thumbnailUrl}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default MyNews;
