import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  let iconColor = { color: "#FFFFEC66" };

  return (
    <div className="socialLinks">
      <a
        href="https://www.linkedin.com/in/cam-yee/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="LinkedIn">
          <FaLinkedin style={iconColor} />
        </div>
      </a>
      <a 
        href="https://github.com/Cameron327" 
        target="_blank" 
        rel="noreferrer"
      >
        <div className="GitHub">
          <FaGithub style={iconColor} />
        </div>
      </a>
    </div>
  );
}

export default SocialLinks;
