import React from "react";
import './Header.scss';

const Header = ({ children }) => {

  return (
    <header className="Header__Menu">
        {children}
    </header>
  );
};

export default Header;
