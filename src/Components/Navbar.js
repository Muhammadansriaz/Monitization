import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Images/Logo.png";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ clicked, isClicked }) {
  const handleClicked = () => {
    isClicked(!clicked);
    console.log("clicked");
  };

  return (
    <div className="Nav">
      <div className="NavbarContainer">
        {/* Left Section: Logo */}
        <Link to="/" className="NavLogo">
          <img src={Logo} alt="Logo" />
        </Link>

        {/* Middle Section: Nav Links */}
        <div className="NavLinks">
          <NavLink className="Link" to="/">Home</NavLink>
          <NavLink className="Link" to="/features">Features</NavLink>
          <NavLink className="Link" to="/about-us">About Us</NavLink>
          <NavLink className="Link" to="/hiring">Hiring</NavLink>
        </div>

        {/* Right Section: Get Started Button and Hamburger Icon */}
        <div className="RightSection">
          <NavLink className="GetStarted" to="/sign-in">Get Started</NavLink>
          {!clicked ? (
            <GiHamburgerMenu onClick={handleClicked} className="Icon" />
          ) : (
            <ImCross onClick={handleClicked} className="Icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
