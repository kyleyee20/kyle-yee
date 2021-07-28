import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className={style.navBar}>
      <div className={style.container}>
        <nav className={style.nav}>
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
          >
            Cameron
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
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
    </header>
  );
}

export default NavBar;
