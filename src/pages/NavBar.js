import React from "react";
import { NavLink } from "react-router-dom";
// import style from "./style.module.css";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <div>
      <nav className="navSection">
        <div>
          <NavLink
            to="/"
            exact
            className="navBar-brand"
            activeClassName="text-white"
          >
            Cameron Yee
          </NavLink>
        </div>
        <div className="navLinks">
          <NavLink
            to="/project"
            className="navLink"
            activeClassName="text-scarlett"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="navLink"
            activeClassName="text-scarlett"
          >
            About Me!
          </NavLink>
        </div>
      </nav>
      <div>
        <SocialIcon
          url="https://www.linkedin.com/in/cam-yee/"
          className="mr-4"
          target="_blank"
          fgColor="white"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://github.com/Cameron327"
          className="mr-4"
          target="_blank"
          fgColor="white"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </div>
  );
}

export default NavBar;
