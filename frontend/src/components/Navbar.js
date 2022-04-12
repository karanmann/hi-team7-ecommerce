import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";


const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="language">EN</div>

          <div className="search-container">
            <div className="input">
              <input placeholder="Search" />
            </div>

            {/* inline styling */}
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <div className="logo">FLORgeous.</div>
        </div>
        <div className="right">
          <div className="menu-item">Register</div>
          <div className="menu-item">Sign In</div>
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
