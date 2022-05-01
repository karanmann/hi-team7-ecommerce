import React from "react";
import "../styles/Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="left">
          <div className="logo">FLORgeous</div>
        </div>
        <div className="right">
          <Link className="animated-links" to="/">
            Home
          </Link>
          <Link className="animated-links" to="/products">
            Products
          </Link>
          <Link className="animated-links" to="/register">
            Register
          </Link>
          <Link className="animated-links" to="/signin">
            SignIn
          </Link>
          <Link className="animated-links" to="/cart">
            Cart
          </Link>
          <div className="menu-item">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
