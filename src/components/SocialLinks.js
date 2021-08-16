import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function SocialLinks() {
  const [linkedInColor, setLinkedInColor] = useState("#FFFFEC66");
  const [githubColor, setGithubColor] = useState("#FFFFEC66");

  let highlightLinkedInColor = () => {
    setLinkedInColor("#CBCBCB");
  };
  let unHighlightLinkedInColor = () => {
    setLinkedInColor("#FFFFEC66");
  };
  
  let highlightGithubColor = () => {
    setGithubColor("#CBCBCB");
  };
  let unHighlightGithubColor = () => {
    setGithubColor("#FFFFEC66");
  };

  return (
    <div className="cam-socialLinks">
      <a
        href="https://www.linkedin.com/in/cam-yee/"
        target="_blank"
        rel="noreferrer"
        onMouseOver={highlightLinkedInColor}
        onMouseOut={unHighlightLinkedInColor}
      >
        <div className="cam-LinkedIn">
          <FaLinkedin style={{ color: linkedInColor }} />
        </div>
      </a>
      <a
        href="https://github.com/Cameron327"
        target="_blank"
        rel="noreferrer"
        onMouseOver={highlightGithubColor}
        onMouseOut={unHighlightGithubColor}
      >
        <div className="cam-GitHub">
          <FaGithub style={{ color: githubColor }} />
        </div>
      </a>
    </div>
  );
}

export default SocialLinks;
