import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import sculogo from "../../images/sculogo.png";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "dorms", label: "Dorms", offset: -50 },
  { id: "about", label: "About", offset: -50 },
  { id: "matterport", label: "Tech", offset: -60 },
  { id: "faq", label: "FAQ", offset: -60 },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    close();
  }, [location.pathname]);

  return (
    <nav
      className={`nav ${scrolled || !onHome ? "nav--solid" : ""} ${
        open ? "nav--open" : ""
      }`}
    >
      <div className="nav__container">
        <Link to="/" className="nav__brand" onClick={close}>
          <img src={sculogo} alt="SCU Virtual Dorm Tours" />
        </Link>

        <ul className="nav__menu">
          {NAV_LINKS.map((item) =>
            onHome ? (
              <li key={item.id} className="nav__item">
                <Scroll
                  to={item.id}
                  className="nav__link"
                  spy
                  smooth
                  offset={item.offset}
                  duration={700}
                  onClick={close}
                  activeClass="nav__link--active"
                >
                  {item.label}
                </Scroll>
              </li>
            ) : (
              <li key={item.id} className="nav__item">
                <Link
                  to={`/#${item.id}`}
                  className="nav__link"
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        <ul>
          {NAV_LINKS.map((item) =>
            onHome ? (
              <li key={item.id}>
                <Scroll
                  to={item.id}
                  smooth
                  offset={item.offset}
                  duration={700}
                  onClick={close}
                >
                  {item.label}
                </Scroll>
              </li>
            ) : (
              <li key={item.id}>
                <Link to={`/#${item.id}`} onClick={close}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
