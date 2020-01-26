import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import './HeaderItem.scss';

const HeaderItem = ({ title = "", 
                      to = "/",
                      children, 
                      ...props }) => {
  return (
    <div className="Item" {...props}>
      <NavLink className="HeaderLink"
               title={title} 
               to={to} 
               {...props}>
        {title &&
          <label className="Label">{title}</label>}
        {children}
      </NavLink>
    </div>
  );
};

HeaderItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.any,
};

export default HeaderItem;
