import React from "react";
import { NavLink } from "react-router-dom";
// import style from "./style.module.css";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <div className="nav">
      <nav>
        <NavLink
          to="/"
          exact
          activeClassName="text-white"
          className="navBar-brand"
        >
          Cameron
        </NavLink>
        <NavLink
          to="/post"
          className="navLink"
          activeClassName="text-red-100"
        >
          Posts
        </NavLink>
        <NavLink
          to="/project"
          className="navLink"
          activeClassName="text-red-100"
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className="navLink"
          activeClassName="text-red-100"
        >
          About Me!
        </NavLink>
      </nav>
      <div className="inline-flex items-center">
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
