import React from "react";
import "./Footer.styles.css";
//React Icons
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="derechos">Derechos reservados Xzone </ul>
      <ul className="footer-networks">
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
        <li>
          <FaTwitterSquare />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
