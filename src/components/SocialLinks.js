import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="socialLinks">
        <div className="socialLink">
            <FaLinkedin/>
        </div>
        <div className="socialLink">
            <FaGithub/>
        </div>
    </div>
  );
}

export default SocialLinks;
