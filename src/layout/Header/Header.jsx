import React from "react";
import "./Header.styles.css";
const Header = () => {
  return (
    <div className="header">
      <ul className="logo">LOGO</ul>
      <ul className="link-pages">
        <li>HOME</li>
        <li>CONTACT</li>
        <li>CART</li>
      </ul>
    </div>
  );
};

export default Header;
