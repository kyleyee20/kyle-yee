import React from "react";
import PersonalProjectCard from "../components/PersonalProjectCard.js";
import HackathonProjectCard from "../components/HackathonProjectCard.js"
import { PersonalProjectData, HackathonProjectData } from "../data/ProjectData.js";

// Include github source code for the projects too
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
                  hosted={project.hosted}
                  hostedLink={project.hostedLink}
                  code={project.code}
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
          <div className="grids">
            {HackathonProjectData.map((project, index) => {
              return(
                <HackathonProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  devpostLink={project.devpostLink}
                />
              )
            }) }
          </div>
        </section>
      </main>
    </div>
  );
}

export default Project;
