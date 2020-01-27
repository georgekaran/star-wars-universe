import React from "react";
import PropTypes from "prop-types";
import "./Title.scss";

export default function Title({
  HTMLTag = "h1",
  title = "",
  className = "",
  fontSize = "larger",
  fontFamily = "DIN Next W01 Regular",
  color = '#fff',
  fontWeight = 600,
  margin = '15px 10px 10px 10px',
  ...props
}) {
  return (
    <HTMLTag
      style={{ fontSize, fontFamily, fontWeight, margin, color }}
      className={`Typography__Title ${className}`}
      {...props}
    >
      {title}
    </HTMLTag>
  );
}

Title.propTypes = {
  HTMLTag: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.number,
  margin: PropTypes.string,
}