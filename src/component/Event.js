import React from "react";
import ReactDOM from 'react-dom/client';


const Event = () => {
  const click = () => {
    alert("Event i triggerd..");
  };

  return (
  <button onClick={click}>click hear</button>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Event />);

export default Event;
