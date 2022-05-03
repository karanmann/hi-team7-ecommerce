import React from "react";
import "../styles/Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1 className="navbar-title">FLORgeous</h1>
      </div>
      <nav>
        <ul className="navbar-links-container list">
          <li className="items">
            <Link className="animated-links" to="/">
              Home
            </Link>
          </li>
          <li className="items">
            <Link className="animated-links" to="/products">
              Products
            </Link>
          </li>
          <li className="items">
            <Link className="animated-links" to="/register">
              Register
            </Link>
          </li>
          <li className="items">
            <Link className="animated-links" to="/signin">
              SignIn
            </Link>
          </li>
          <li className="items">
            <Link className="animated-links" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default Navbar;