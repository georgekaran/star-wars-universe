import React from "react";
import "./Title.scss";

export default function Title({
  HTMLTag = "h1",
  title = "",
  className = "",
  fontSize = "larger",
  fontFamily = "DIN Next W01 Regular",
  fontWeight = 600,
  margin = '15px 10px 10px 10px',
  ...props
}) {
  return (
    <HTMLTag
      style={{ fontSize, fontFamily, fontWeight, margin }}
      className={`Typography__Title ${className}`}
      {...props}
    >
      {title}
    </HTMLTag>
  );
}
