// components/Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  text = "Click me",
  bgColor = "#000",
  color = "#ffffff",
  hoverBgColor = "#CF1941",
  hoverTextColor = "#ffffff",
  className = "",
}) => {
  return (
    <button
      style={{
        "--bg-color": bgColor,
        "--text-color": color,
        "--hover-bg-color": hoverBgColor,
        "--hover-txt-color": hoverTextColor,
      }}
      className={`${styles.button} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
