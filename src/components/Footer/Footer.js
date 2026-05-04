import React from "react";
import { Link as Scroll } from "react-scroll";
import "./Footer.css";

const FOOTER_LINKS = [
  { id: "dorms", label: "Dorms", offset: -50 },
  { id: "about", label: "About", offset: -50 },
  { id: "matterport", label: "Tech", offset: -60 },
  { id: "faq", label: "FAQ", offset: -60 },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3>SCU Virtual Dorm Tours</h3>
            <p>
              Step inside every Santa Clara residence hall — from anywhere.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <span className="footer__nav-title">Explore</span>
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <Scroll
                    to={link.id}
                    smooth
                    offset={link.offset}
                    duration={700}
                  >
                    {link.label}
                  </Scroll>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__resources">
            <span className="footer__nav-title">Resources</span>
            <ul>
              <li>
                <a
                  href="https://www.scu.edu/living/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SCU Residential Living
                </a>
              </li>
              <li>
                <a
                  href="https://www.scu.edu/living/discover/fysy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  First-Year & Sophomore Year
                </a>
              </li>
              <li>
                <a
                  href="https://www.scu.edu/living/residential-living-options/2022-2023-room--board-rates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Room & Board Rates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <span>© {year} Santa Clara University</span>
          <span>
            Built by Eva Stenberg, Kian Malakooti, and Matthew Gates · Senior
            Design Project
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
