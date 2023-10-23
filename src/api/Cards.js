import React from "react";

const Cards = (props) => {
  let { title, imageURL, thumbnailUrl } = props;
  return (
    <center>
      <div className="card my-3" style={{ width: "18rem" }}>
        <img
          src={imageURL ? imageURL : "/public/grial_img.jpg"}
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title : ""}</h5>
          <p className="card-text">{thumbnailUrl}</p>
          <a href="/news" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </center>
  );
};

export default Cards;
