import React from "react";
import "./Books.css";

function Book({ title, img, descrtpion }) {
  return (
    <div className="books">
      <h2>{title}</h2>
      <div className="cont">
        <img src={img} alt="the first book" />
        <p> {descrtpion} </p>
      </div>
    </div>
  );
}

export default Book;
