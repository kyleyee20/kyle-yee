import React from "react";

function Project() {
  return (
    <main className="projectPage">
      {/* 2 Project Sections: personal and hackathon */}
      <section className="projectSection">
        <strong>
          <h2 className="projectSectionName">Personal Projects</h2>
        </strong>
        <div className="grids">
          <div className="projectCard">
            <h3 className="projectTitle">Apartment Finder</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              tincidunt arcu, at dapibus nisl. Duis auctor dapibus accumsan.
              Etiam neque metus, bibendum sed ligula sed, faucibus blandit
              massa. In porttitor lobortis sapien, sollicitudin iaculis augue
              commodo et. Fusce libero nunc, finibus in elementum id,{" "}
            </p>
          </div>
          <div className="projectCard">
            <h3 className="projectTitle">Smart and Safe Security System</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              tincidunt arcu, at dapibus nisl. Duis auctor dapibus accumsan.
              Etiam neque metus, bibendum sed ligula sed, faucibus blandit
              massa. In porttitor lobortis sapien, sollicitudin iaculis augue
              commodo et. Fusce libero nunc, finibus in elementum id,{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="projectSection">
        <strong>
          <h2 className="projectSectionName">Hackathon Projects</h2>
        </strong>
        <div className="grids">
          <div className="projectCard">
            {/* also make the title a link to the devpost */}
            <h3 className="projectTitle">Apartment Finder</h3>
            {/* put the devpost link */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              tincidunt arcu, at dapibus nisl. Duis auctor dapibus accumsan.
              Etiam neque metus, bibendum sed ligula sed, faucibus blandit
              massa. In porttitor lobortis sapien, sollicitudin iaculis augue
              commodo et. Fusce libero nunc, finibus in elementum id,{" "}
            </p>
          </div>
          <div className="projectCard">
            <h3 className="projectTitle">Smart and Safe Security System</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              tincidunt arcu, at dapibus nisl. Duis auctor dapibus accumsan.
              Etiam neque metus, bibendum sed ligula sed, faucibus blandit
              massa. In porttitor lobortis sapien, sollicitudin iaculis augue
              commodo et. Fusce libero nunc, finibus in elementum id,{" "}
            </p>
          </div>
          <div className="projectCard">
            <h3 className="projectTitle">Learning Resource Library</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              tincidunt arcu, at dapibus nisl. Duis auctor dapibus accumsan.
              Etiam neque metus, bibendum sed ligula sed, faucibus blandit
              massa. In porttitor lobortis sapien, sollicitudin iaculis augue
              commodo et. Fusce libero nunc, finibus in elementum id,{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Project;
