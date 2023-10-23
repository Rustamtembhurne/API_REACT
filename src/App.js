import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Prop from "./component/Props";
import Event from "./component/Event";
import Form from "./component/Form";
import UseStateEx from "./component/Usestate_ex";
import UseeffectEx from "./component/Useeffect_ex";
import UseeffectEx2 from "./component/Useeffect_ex2";
import Alert from "./textutilles/Alerts";
import Textform from "./textutilles/TextForm";
import Cards from "./api/Cards";
import News from "./api/MyNews";
import Tempnews from "./api/tempnews";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div
      className="head_text"
      style={{ height: "100%", width: "100vw", paddingBottom: "15px" }}
    >
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <br />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-5">
                <Home />
              </div>
            }
          />

          <Route
            exact
            path="/props"
            element={<Prop brand="Nokia" city="New York" country="USA" />}
          />

          <Route exact path="/event" element={<Event />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/usestate" element={<UseStateEx />} />
          <Route exact path="/useeffect" element={<UseeffectEx />} />
          <Route exact path="/useeffect2" element={<UseeffectEx2 />} />

          {/* Textutilles */}
          <Route
            exact
            path="/textform"
            element={<Textform showAlert={showAlert} />}
          />

          {/* Fetch API project */}
          <Route exact path="/Cards" element={<Cards />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/tempnwes" element={<Tempnews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
