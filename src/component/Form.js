import { useState } from "react";
import ReactDOM from "react-dom/client";

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <center>
    <form onSubmit={handleSubmit} >
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <input type="submit" />
    </form>
    
    </center>

  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);

export default Form;