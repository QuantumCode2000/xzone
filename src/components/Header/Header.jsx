import React, { useContext } from "react";
import "./Header.styles.css";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import StoreContext from "../../context/StoreContext";
import { Dropdown, DropdownButton } from "react-bootstrap";
const Header = () => {
  const { state, width } = useContext(StoreContext);
  return (
    <div className="header">
      <ul className="logo">LOGO</ul>
      {}
      {width <= 500 ? (
        <DropdownButton title="Menu">
          <Dropdown.Item>
            <Link to="/home">HOME</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/product">PRODUCT</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/contact">CONTACT</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/login">LOGIN</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/cart">CARRIT0 </Link> {state.cart.length}
          </Dropdown.Item>
        </DropdownButton>
      ) : (
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
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/cart">
              <BsCart />{" "}
              {state?.cart?.length === 0
                ? 0
                : state?.cart?.reduce(function (a, b) {
                    return { count: a.count + b.count };
                  }).count}
            </Link>
            <br />
            {state.total.toFixed(2)}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
