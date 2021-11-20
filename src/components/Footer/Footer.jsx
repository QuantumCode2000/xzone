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
      <div className="footer-container">
        <ul className="footer-direction">
          <h1>Encuentranos en : </h1>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <ul className="footer-networks">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/xzonebolivia"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/xzone_pro/"
            >
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitterSquare />
            </a>
          </li>
        </ul>
      </div>
      <ul className="derechos">Derechos reservados Xzone </ul>
    </footer>
  );
};

export default Footer;
