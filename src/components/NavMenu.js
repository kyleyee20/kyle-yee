import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../data/SidebarData.js";

function NavMenu() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="navMenu">
      <div className="hamburger">
        <FaBars onClick={toggleSidebar} />
      </div>
      {/* Popup background used to close popups by clicking outside of a popup. In this case, clicking outside of the menu */}
      {sidebar ? (
        <div className="popupBackground" onClick={toggleSidebar} />
      ) : null}

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="x" onClick={toggleSidebar}>
            <AiOutlineClose />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={toggleSidebar}>
                <NavLink
                  to={item.path}
                  exact
                  className="navLink"
                  activeClassName="activeLink"
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;

// style={{display: "none"}}
