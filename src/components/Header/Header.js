import React, { useState } from "react";
import "../style/style.css";
import logo from "../images/logo.png"; // Adjust path as needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />          
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Service</a>
          <a href="#portfolio" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <span className="bar-icon">&#9776;</span>
          )}
        </div>
      </nav>

      <div id="header">
        <div className="container">
          <div className="header-text">
            <p style={{ fontSize: "16px" }}>بسم الله الرحمن الرحيم</p>
            <p>Web Developer</p>
            <h1 className="smlScrn">
              Hi, I'm <span>Mohamed</span> <span>Isham</span> <br />
              From Adirai - 614701
            </h1>
            <h1 className="smlScrn1">
              Hi, I'm <span>Mohamed</span> <br />
              <span>Isham</span> From
              <br />
              Adirai - 614701
            </h1>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
