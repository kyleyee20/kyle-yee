import React from "react";
import PersonalProjectCard from "../components/PersonalProjectCard.js";
import { PersonalProjectData } from "../data/ProjectData.js";
import Footer from "../components/Footer.js";

function Project() {
  return (
    <div>
      <main className="projectPage">
        <section className="projectSection">
          <strong>
            <h2 className="projectSectionName">Personal Projects</h2>
          </strong>
          <div className="grids">
            {PersonalProjectData.map((project, index) => {
              return (
                <PersonalProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                />
              );
            })}
          </div>
        </section>
        <section className="projectSection">
          <strong>
            <h2 id="HackathonTitle" className="projectSectionName">
              Hackathon Projects
            </h2>
          </strong>
          {/* Link the githubs and the devposts? */}
          <div className="grids">
            <div className="projectCard">
              <h3 className="projectTitle">
                <a
                  href="https://devpost.com/software/apartment-value-estimator"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-scarlett"
                >
                  Apartment-Finder Prototype
                </a>
              </h3>
              <a
                href="https://devpost.com/software/apartment-value-estimator"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett projectLink"
              >
                Check it out!
              </a>
              <p>
                Built apartment-finder prototype that won first place out of
                400+ participants for Best Use of UiPath. Quickly adapted to
                learn and implement data-scraping, python and its libraries, and
                k-means clustering to build a working apartment-finder in under
                24 hours
              </p>
            </div>
            <div className="projectCard">
              <h3 className="projectTitle">
                <a
                  href="https://devpost.com/software/ai-on-you"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-scarlett"
                >
                  Smart and Safe Security System
                </a>
              </h3>
              <a
                href="https://devpost.com/software/ai-on-you"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett projectLink"
              >
                Check it out!
              </a>
              <p>
                Designed a web page to use the webcam to survey an area and
                gather data on the number of people and relays said data to a
                database to determine whether an area is too crowded for
                comfort. Quickly adapted to learn and utilize React.js, Node.js,
                HTML, CSS, and JavaScript to build the security web page while
                also utilizing the machine learning capabilities of
                tensorflow.js to detect people in frame.
              </p>
            </div>
            <div className="projectCard">
              <h3 className="projectTitle">
                <a
                  href="https://devpost.com/software/lurn-sfn5g3"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-scarlett"
                >
                  Learning Resource Library
                </a>
              </h3>
              <a
                href="https://devpost.com/software/lurn-sfn5g3"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett projectLink"
              >
                Check it out!
              </a>
              <p>
                Developed web app that acts as a learning resource library for
                college students by compiling notes on classes, learning guides,
                etc. including a search system using tags and keywords.
                Implemented SQL CockroachDB to store the table containing the
                tag mappings to the files, Google Firebase to store the files
                for backend, and implemented React.js and Material.ui for
                frontend.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Project;
