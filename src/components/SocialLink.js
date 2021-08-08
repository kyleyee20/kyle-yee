import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLink() {
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

export default SocialLink;
