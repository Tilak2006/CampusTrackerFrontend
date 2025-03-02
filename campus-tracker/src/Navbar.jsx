import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

   const handleOnClick = () => {
    navigate('/login');
   }
  return (
    <>
      <nav className="navbar">
        <div className="logo">SKILLFLOW</div>


        <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
          <li><Link to="/" >HOME</Link></li>
            <li><Link to="/about" >ABOUT</Link></li>
            <li><Link to="/contact" >CONTACT</Link></li>
            <li><Link to="/events" >EVENTS</Link></li>
            <li><Link to="/login" >LOGIN</Link></li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
