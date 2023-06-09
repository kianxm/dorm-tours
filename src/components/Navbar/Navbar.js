import React, { useState, useEffect } from "react";
// import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import sculogo from "../../images/sculogo.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              className="navbar__logo"
              src={sculogo}
              alt="SCU Virtual Dorm Tours"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Scroll
                to="dorms"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                onClick={closeMobileMenu}
              >
                Dorms
              </Scroll>
            </li>
            <li className="nav-item">
              <Scroll
                to="about"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                onClick={closeMobileMenu}
              >
                About Us
              </Scroll>
            </li>
            <li className="nav-item">
              <Scroll
                to="matterport"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
                onClick={closeMobileMenu}
              >
                Matterport
              </Scroll>
            </li>
            <li className="nav-item">
              <Scroll
                to="faq"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
                onClick={closeMobileMenu}
              >
                FAQ
              </Scroll>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
