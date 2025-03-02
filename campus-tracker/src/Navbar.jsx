import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">SKILLFLOW</div>


        <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" >ABOUT</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
