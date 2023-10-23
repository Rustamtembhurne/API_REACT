// useEffect: Used for managing side effects and mimicking lifecycle methods.
//The useEffect Hook allows you to perform side effects in your componen

import { useState, useEffect } from "react";

const Useeffect_ex = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  },[]);

  return (
    <center>
      <h1>Time start now {count} </h1>
    </center>
  );
};

export default Useeffect_ex;
