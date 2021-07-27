import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact>
                        Cameron
                    </NavLink>
                    <NavLink to="/post">
                        Posts
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About Me!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;