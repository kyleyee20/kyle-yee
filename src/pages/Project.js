import React from "react";
import PersonalProjectCard from "../components/PersonalProjectCard.js";
import HackathonProjectCard from "../components/HackathonProjectCard.js"
import { PersonalProjectData, HackathonProjectData } from "../data/ProjectData.js";
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
      <Footer />
    </div>
  );
}

export default Project;
