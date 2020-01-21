import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";
import "./Button.scss";

const Button = ({ onClick = noop, label = "", ...props }) => {
  return (
    <button className="Button" onClick={onClick} {...props}>
      <span className="Button__Title">{label}</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string
};

export default Button;
