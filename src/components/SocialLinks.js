import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {

  let iconColor = { color: "#FFFFEC66" }

  return (
    <div className="socialLinks">
        <div className="LinkedIn">
            <a href="https://www.linkedin.com/in/cam-yee/" target="_blank" rel="noreferrer"><FaLinkedin style={iconColor}/></a>
        </div>
        <div className="GitHub">
            <a href="https://github.com/Cameron327" target="_blank" rel="noreferrer"><FaGithub style={iconColor}/></a>
        </div>
    </div>
  );
}

export default SocialLinks;
