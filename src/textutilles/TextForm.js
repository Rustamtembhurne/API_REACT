import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  ////////////////////////////////////////////////////////////////////////
  const changehear = (e) => {
    setText(e.target.value);
  };
  ////////////////////////////////////////////////////////////////////////
  const uppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("convert uppercase", "success");
  };
  ////////////////////////////////////////////////////////////////////////
  const lowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("convert lowercase", "warning");
  };

  ////////////////////////////////////////////////////////////////////////

  const downloadTextAsFile = () => {
    // Create a Blob with the text content
    const blob = new Blob([text], { type: "text/plain" });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "downloaded_text.txt"; // Set the desired file name
    a.click();

    // Release the temporary URL and remove the anchor element
    URL.revokeObjectURL(url);
  };

  ////////////////////////////////////////////////////////////////////////

  const removeExtraSpaces = () => {
    // Use a regular expression to replace multiple spaces with a single space
    const newText = text.replace(/  +/g, " ");
    setText(newText);
    props.showAlert("convert removeExtraSpaces", "danger ");
  };

  ////////////////////////////////////////////////////////////////////////
  const capitalizeWords = () => {
    // Split the text into an array of words
    const words = text.split(" ");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back into a single string
    const newText = capitalizedWords.join(" ");

    setText(newText);

    props.showAlert("convert capitalizeWords", "danger ");
  };
  ///////////////////////////////////////////////////////////////
  // const generatePdf = () => {
  //   // Create a new blob with the text content
  //   const blob = new Blob([text], { type: "application/pdf" });
  //   const dataUri = URL.createObjectURL(blob);
  //   setText(dataUri);
  // };

  ///////////////////////////////////////////////////////////////////

  return (
    <center>
      <h1>TEXT EDITORS</h1>
      <textarea
        className="form-control container mx-5 my-3"
        id="floatingTextarea"
        cols={30} 
        rows={5} 
        value={text}
        onChange={changehear}
      ></textarea>

           <button type="button" class="btn btn-primary mx-3" onClick={uppercase}>
        Uppercase
      </button>

      <button type="button" class="btn btn-primary mx-3" onClick={lowercase}>
        Lowercase
      </button>

      <button
        type="button"
        class="btn btn-primary mx-3"
        onClick={downloadTextAsFile}
      >
        Dounload
      </button>

      <button className="btn btn-primary mx-3" onClick={removeExtraSpaces}>
        Remove Extra Spaces
      </button>

      <button className="btn btn-primary mx-3 my-3" onClick={capitalizeWords}>
        First Word Capitalize
      </button>

      {/* <button className="btn btn-primary" onClick={generatePdf}>
        Generate PDF
      </button> */}

      <h1>Count Characters : {text.length} </h1>
      <h1>Count Words : {text.split(" ").length} </h1>
      <h5>Preview : {text}</h5>
    </center>
  );
};

export default TextForm;
