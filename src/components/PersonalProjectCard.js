import React from "react";
import { FaGithub } from "react-icons/fa";

function PersonalProjectCard(props) {
  return (
    <div className="projectCard">
      <h3 className="projectTitle">
        {props.hosted ? (
          <a
            href={props.hostedLink}
            target="_blank"
            rel="noreferrer"
            className="hover-scarlett"
          >
            {props.title}
          </a>
        ) : (
          props.title
        )}
      </h3>
      {/* Insert github icon here that leads to source code */}
      <a href={props.code} target="_blank" rel="noreferrer" className="sourceCodeIconContainer">
        <FaGithub/>
      </a>
      {props.hosted ? (
        <a
          href={props.hostedLink}
          target="_blank"
          rel="noreferrer"
          className="hover-scarlett projectLink"
        >
          Check it out!
        </a>
      ) : null}
      <p>{props.description}</p>
    </div>
  );
}

export default PersonalProjectCard;
