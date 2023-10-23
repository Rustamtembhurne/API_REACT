// useState: Used for managing component state.

import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Name");
  const [brand, setBrand] = useState("Brand");
  const [model, setModel] = useState("Model");
  const [year, setYear] = useState("Year");
  const [color, setColor] = useState("Color");

  return (
    <>
      <center>
        <h1 style={{ color: "cyan" }}>
          My name is {name} {brand} {model} {year} {color}
        </h1>

        <br />
        <br />

        <button type="button" onClick={() => setName("Rustam")}>
          Name
        </button>

        <button
          type="submit"
          onClick={() => {
            setBrand("B7");
          }}
        >
          Brand
        </button>

        <button
          type="submit"
          onClick={() => {
            setModel("9ties");
          }}
        >
          Model
        </button>

        <button
          type="submit"
          onClick={() => {
            setYear("1998");
          }}
        >
          Year
        </button>

        <button
          type="submit"
          onClick={() => {
            setColor("Blue");
          }}
        >
          color
        </button>
      </center>
    </>
  );
};

export default MyComponent;
