import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="mx-3">
              <Link to="/home"> Home </Link>
            </div>
            <div className="mx-3">
              <Link to="/props"> Props </Link>
            </div>
            <div className="mx-3">
              <Link to="/event">Event</Link>
            </div>
            <div className="mx-3">
              <Link to="/form">Form</Link>
            </div>
            <div className="mx-3">
              <Link to="/usestate">Usestate</Link>
            </div>
            <div className="mx-3">
              <Link to="/useeffect">Useeffect</Link>
            </div>
            <div className="mx-3">
              <Link to="/useeffect2">Useeffect2</Link>
            </div>
            <div className="mx-3">
              <Link to="/usecontext">Usecontext</Link>
            </div>

            <NavDropdown title="Textutilles" id="basic-nav-dropdown">
              <NavDropdown.Item href="./textform">TextForm</NavDropdown.Item>
            </NavDropdown>

            <br />

            <NavDropdown title="News API" id="basic-nav-dropdown">
              <div className="mx-3">
                <Link to="/Cards">Cards</Link>
              </div>

              <div className="mx-3">
                <Link to="/News">MyNews</Link>
              </div>

              <div className="mx-3">
                <Link to="/tempnwes">Tempnews</Link>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
