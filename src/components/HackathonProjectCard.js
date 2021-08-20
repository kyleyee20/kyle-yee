import React from "react";

function HackathonProjectCard(props) {
  return (
    <div className="projectCard">
      <h3 className="projectTitle">
        <a
          href={props.devpostLink}
          target="_blank"
          rel="noreferrer"
          className="hover-scarlett"
        >
          {props.title}
        </a>
      </h3>
      <a
        href={props.devpostLink}
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

export default HackathonProjectCard;
