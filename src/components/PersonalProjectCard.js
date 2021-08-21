import React from "react";

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
