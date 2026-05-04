import React from "react";
import { Link as Scroll } from "react-scroll";
import "./HeroSection.css";

import swig from "../../images/dorm_images/pics/swig.jpg";
import finn from "../../images/dorm_images/pics/finn.jpg";
import graham from "../../images/dorm_images/pics/graham.jpg";
import sobrato from "../../images/dorm_images/pics/sobrato.jpg";
import dunne from "../../images/dorm_images/pics/dunne.jpg";

const SLIDES = [swig, finn, graham, sobrato, dunne];

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero__media" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="hero__slide"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * 6}s`,
            }}
          />
        ))}
        <div className="hero__overlay" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content">
        <span className="hero__eyebrow">Santa Clara University</span>
        <h1 className="hero__title">
          Discover your <span className="hero__title-accent">dream</span> dorm
          <br />
          before you arrive.
        </h1>
        <p className="hero__lede">
          Step inside every residence hall with immersive 3D tours. Compare
          rooms, explore amenities, and find the community that fits you best.
        </p>

        <div className="hero__cta">
          <Scroll
            to="dorms"
            smooth
            offset={-50}
            duration={800}
            className="hero__btn hero__btn--primary"
          >
            Explore dorms
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </Scroll>
          <Scroll
            to="matterport"
            smooth
            offset={-60}
            duration={900}
            className="hero__btn hero__btn--ghost"
          >
            How it works
          </Scroll>
        </div>

        <ul className="hero__stats">
          <li>
            <strong>12</strong>
            <span>residence halls</span>
          </li>
          <li>
            <strong>8+</strong>
            <span>immersive scans</span>
          </li>
          <li>
            <strong>360°</strong>
            <span>walk-throughs</span>
          </li>
        </ul>
      </div>

      <Scroll
        to="dorms"
        smooth
        offset={-50}
        duration={800}
        className="hero__scroll"
        aria-label="Scroll to dorms"
      >
        <span />
      </Scroll>
    </section>
  );
}

export default HeroSection;
