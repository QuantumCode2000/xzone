import React, { useContext } from "react";
import "./Header.styles.css";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import StoreContext from "../../context/StoreContext";
const Header = () => {
  const { total, cart } = useContext(StoreContext);
  return (
    <div className="header">
      <ul className="logo">LOGO</ul>
      <ul className="link-pages">
        <li>
          <Link to="/home">HOME</Link>
        </li>

        <li>
          <Link to="/product">PRODUCTO</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/product">LOGIN</Link>
        </li>
        <li>
          <Link to="/cart">
            <BsCart /> {cart.length}
          </Link>
          <br />
          {total}
        </li>
      </ul>
    </div>
  );
};

export default Header;
