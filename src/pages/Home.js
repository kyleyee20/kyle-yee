import React from "react";
import { NavLink } from "react-router-dom";
// tailwind just knows to get it from the index.css file without importing it?
// import "../index.css";
import resume from "../files/resume.pdf";

function Home() {
  return (
    <main className="homePage">
      <section className="section">
        <h1>
          Hello! My name is{" "}
          <strong>
            <span className="name">Cameron</span>
          </strong>
          .
        </h1>
        <h2>I'm a Full Stack Developer and a Computer Science major at UCD.</h2>
        <h3>
          Check out my{" "}
          <a href={resume} target="_blank" rel="noreferrer">
            <span className="hover-scarlett">resume</span>
          </a>{" "}
          for a brief overview or check out my{" "}
          <NavLink to="/project">
            <span className="hover-scarlett">work</span>
          </NavLink>
          !
        </h3>
        <a href={resume} target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
      </section>
    </main>
  );
}

export default Home;
