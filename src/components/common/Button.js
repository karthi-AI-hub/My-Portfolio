import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Button.css";

const Button = ({ text, link }) => {
  return (
    <Link to={link} className="custom-button">
      {text}
    </Link>
  );
};

export default Button;
