import React from "react";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";

const isExternal = (path) => /^https?:\/\//.test(path);

export const CardItem = ({ src, text, label, path, delay = 0 }) => {
  const ref = useReveal();

  const inner = (
    <>
      <figure className="card__media" data-label={label}>
        <img src={src} alt={text} className="card__img" loading="lazy" />
        <div className="card__gradient" />
      </figure>
      <div className="card__body">
        <h5 className="card__title">{text}</h5>
        <span className="card__cta">
          View tour
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
      </div>
    </>
  );

  const commonProps = {
    ref,
    className: "card reveal",
    "data-delay": delay || undefined,
  };

  return isExternal(path) ? (
    <a {...commonProps} href={path} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link {...commonProps} to={path}>
      {inner}
    </Link>
  );
};
