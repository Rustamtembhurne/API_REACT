import React, { useState, useEffect } from "react";

const Useeffect_ex2 = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <center>
      <h1>count is {count} </h1>

      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        add
      </button>

     

      <h1>calculation {calculation} </h1>
    </center>
  );
};

export default Useeffect_ex2;
