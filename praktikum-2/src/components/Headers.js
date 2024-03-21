import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Headers() {
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">IBI Kesatuan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="#home"
            className={`mr-3 ${activeItem === "home" ? "text-light" : ""}`} // Tambahkan className `mr-3`
            onClick={() => handleClick("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            className={`mr-3 ${activeItem === "about" ? "text-light" : ""}`} // Tambahkan className `mr-3`
            onClick={() => handleClick("about")}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className={`mr-3 ${activeItem === "contact" ? "text-light" : ""}`} // Tambahkan className `mr-3`
            onClick={() => handleClick("contact")}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
