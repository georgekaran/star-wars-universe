import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";
import "./Button.scss";

const Button = ({
  onClick = noop,
  label = "",
  color = "#fff",
  backgroundColor = "#5B63A4",
  height = 36,
  padding = "0 16px",
  labelSize = ".875rem",
  icon = undefined,
  ...props
}) => {
  return (
    <button
      className="Button"
      style={{ color, backgroundColor, height, padding }}
      onClick={onClick}
      {...props}
    >
      {icon && 
        <span className="Button__Icon">
          {icon}
        </span>}
      <span style={{ fontSize: labelSize }} className="Button__Title">
        {label}
      </span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  padding: PropTypes.string,
  labelSize: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
