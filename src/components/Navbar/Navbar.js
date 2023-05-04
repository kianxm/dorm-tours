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
              <Scroll
                to="hero"
                spy={true}
                smooth={true}
                className="nav-links"
                offset={0}
                duration={1000}
                onClick={closeMobileMenu}
              >
                Home
              </Scroll>
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
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Scroll
                to="matterport"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={closeMobileMenu}
              >
                Learn More
              </Scroll>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Learn More</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
