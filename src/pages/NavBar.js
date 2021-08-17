import React from "react";
import { NavLink } from "react-router-dom";
// import style from "./style.module.css";
import NavMenu from "../components/NavMenu.js"

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        className="navBar-brand"
        activeClassName="activeLink"
      >
        Cameron Yee
      </NavLink>
      <div className="navLinks">
        <NavLink
          to="/"
          exact
          className="navLink"
          activeClassName="activeLink"
        >
          HOME
        </NavLink>
        <NavLink
          to="/project"
          exact
          className="navLink"
          activeClassName="activeLink"
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/about"
          exact
          className="navLink"
          activeClassName="activeLink"
        >
          ABOUT
        </NavLink>
      </div>
      <NavMenu/>
    </div>
  );
}

export default NavBar;
