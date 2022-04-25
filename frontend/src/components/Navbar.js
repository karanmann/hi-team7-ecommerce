import React from 'react';
import '../styles/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="search-container">
            <div className="input">
              <input placeholder="Search" />
            </div>
            {/* inline styling */}
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="center">
          <div className="logo">FLORgeous.</div>
        </div>
        <div className="right">
          <Link className="animated-links" to="/">Home</Link>
          <Link className="animated-links" to="/product">Products</Link>
          <Link className="animated-links" to="/register">Register</Link>
          <Link className="animated-links" to="/signin">SignIn</Link>
          <Link className="animated-links" to="/cart">Cart</Link>
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