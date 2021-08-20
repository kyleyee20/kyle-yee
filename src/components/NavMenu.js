import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
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
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" >
          <li className="x" onClick={toggleSidebar}>
            <AiOutlineClose />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={toggleSidebar}>
                <Link to={item.path}>
                  <span className="span hover-scarlett">{item.title}</span>
                </Link>
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
