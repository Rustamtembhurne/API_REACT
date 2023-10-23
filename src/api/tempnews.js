import React, { useEffect, useState } from "react";
import axios from "axios";

function ImageComponent() {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Define the URL of the image you want to fetch
    const imageUrlToFetch = "https://jsonplaceholder.typicode.com/photos";

    // Use Axios to fetch the image data
    axios
      .get(imageUrlToFetch, { responseType: "arraybuffer" })
      .then((response) => {
        const base64Image = Buffer.from(response.data, "binary").toString(
          "base64"
        );
        const imageDataUrl = `data:${response.headers["content-type"]};base64,${base64Image}`;
        setImageURL(imageDataUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return;
  <div>{imageURL && <img src={imageURL} alt="Fetched Image" />}</div>;
}

export default ImageComponent;
