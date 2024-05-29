// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
const Header = () => {
  return (
    <header>
      <div className="header_name">
        <div className="name_header">
          <h1>Plantopia🌴🦥</h1>
        </div>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
