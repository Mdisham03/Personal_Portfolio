import React, { useState } from "react";
import "../style/style.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const clr = {
    color: "black",
  };

  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <img src={logo} alt="Logo" className="logo" />
            <ul id="sidemenu" style={{ right: menuOpen ? "0" : "-200px" }}>
              {/* <ul id="sidemenu" className={menuOpen ? 'open' : ''}> */}
              <li>
                <a href="#header" onClick={closeMenu}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  SERVICE
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={closeMenu}>
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  ABOUT
                </a>
              </li>

              <FontAwesomeIcon
                icon={faXmark}
                className="fa-solid fa-bars"
                style={clr}
                onClick={closeMenu}
              />
            </ul>
            <FontAwesomeIcon
              icon={faBars}
              className="fa-solid fa-bars"
              style={clr}
              onClick={openMenu}
            />
            {/* <i className="fa-solid fa-bars" onClick={openMenu}></i> */}
          </nav>
          <div className="header-text">
            <p><p style={{ fontSize: "16px" }}>بسم الله الرحمن الرحيم</p>Web Developer</p>
            <h1 className="smlScrn">
              Hi,I'm <span>Mohamed</span> <span>Isham</span> <br />
              From Chennai
            </h1>
            <h1 className="smlScrn1">
              Hi,I'm <span>Mohamed</span> <br />
              <span>Isham</span> From
              <br />
              Chennai
            </h1>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
