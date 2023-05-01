import React from "react";
import "./Button.css";
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStlye = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to="dorms"
      className="btn-mobile"
      spy={true}
      smooth={true}
      offset={-50}
      duration={1000}
    >
      <button
        className={`btn ${checkButtonStlye} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
