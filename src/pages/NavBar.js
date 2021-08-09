import React from "react";
import { NavLink } from "react-router-dom";
// import style from "./style.module.css";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        className="navBar-brand"
        activeClassName="text-white"
      >
        Cameron Yee
      </NavLink>
      <div className="navLinks">
        <NavLink
          to="/about"
          className="navLink"
          activeClassName="text-scarlett"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/project"
          className="navLink"
          activeClassName="text-scarlett"
        >
          PROJECTS
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
