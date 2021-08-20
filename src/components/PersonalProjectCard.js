import React from "react";

function PersonalProjectCard(props) {
  return (
    <div className="projectCard">
      <h3 className="projectTitle">
        <a
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
          className="hover-scarlett"
        >
          {props.title}
        </a>
      </h3>
      <a
        href={props.githubLink}
        target="_blank"
        rel="noreferrer"
        className="hover-scarlett projectLink"
      >
        Check it out!
      </a>
      <p>{props.description}</p>
    </div>
  );
}

export default PersonalProjectCard;
