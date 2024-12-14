import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Images/Logo.png"

import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ clicked, isClicked }) {

  const handleClicked = () => {
    isClicked(!clicked);
    console.log("clicked")
  };
  return (
    <div className="Nav">
      <ul className="NavbarWrapper">
        <li className="NavLogo">
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
            <img src={Logo} />
          </Link>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/">
            Home
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/features">
            Features
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="NavElements">
          <NavLink className="Link" to="/Hiring">
            Hiring
          </NavLink>
        </li>


        <li
          className="NavElements"
          style={{ float: "right", width: "8%", padding: "13px", margin: "-8px 2px 1px 2px", border: "1px solid #ff6600", borderRadius: "50px" }}
        >
          <NavLink className="Link" to="/sign-in">
            Get Started
          </NavLink>
        </li>
      </ul>
      {!clicked ? (
        <GiHamburgerMenu onClick={handleClicked} className="Icon" />
      ) : (
        <ImCross onClick={handleClicked} className="Icon" />
      )}
    </div>
  );
}

export default Navbar;
