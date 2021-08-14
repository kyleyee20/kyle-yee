import React from "react";

function Project() {
  return (
    <main className="projectPage">
      <h1 className="title">My Projects</h1>
      <section className="projectSection">
        <h2 className="projectSectionName">Hackathon Projects</h2>
        <div className="grids">
          <div className="projectCard">
            <h3 className="projectTitle">Apartment Finder</h3>
          </div>
          <div className="projectCard">Smart and Safe Security System</div>
          <div className="projectCard">Learning Resource Library</div>
        </div>
      </section>
      <section className="projectSection">
        <h2 className="projectSectionName">Personal Projects</h2>
        <div className="grids">
          <div className="projectCard">Slack Server App</div>
          <div className="projectCard">Sudoku Game/Solver</div>
        </div>
      </section>
    </main>
  );
}

export default Project;
