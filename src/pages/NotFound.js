import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <span className="notfound__eyebrow">404 — Page not found</span>
        <h1 className="notfound__title">
          This room <span>doesn't exist.</span>
        </h1>
        <p className="notfound__lede">
          The page you're looking for may have been moved or never existed.
          Let's get you back to the tours.
        </p>
        <Link to="/" className="notfound__btn">
          Back to home
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
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
