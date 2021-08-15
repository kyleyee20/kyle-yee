import React from "react";
import Footer from "../components/Footer.js"

function Project() {
  return (
    <div>
      <main className="projectPage">
        <section className="projectSection">
          <strong>
            <h2 className="projectSectionName">Personal Projects</h2>
          </strong>
          <div className="grids">
            <div className="projectCard">
              <h3 className="projectTitle">
                <a
                  href="https://cameron327.github.io/simon-says-game/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-scarlett"
                >
                  Simon-Says Game
                </a>
              </h3>
              <a
                href="https://cameron327.github.io/simon-says-game/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett projectLink"
              >
                Check it out!
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at tincidunt arcu, at dapibus nisl. Duis auctor dapibus
                accumsan. Etiam neque metus, bibendum sed ligula sed, faucibus
                blandit massa. In porttitor lobortis sapien, sollicitudin
                iaculis augue commodo et. Fusce libero nunc, finibus in
                elementum id,{" "}
              </p>
            </div>
            <div className="projectCard">
              <h3 className="projectTitle">
                <a
                  href="https://cameron327.github.io/DrumKit/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-scarlett"
                >
                  Drum Simulator
                </a>
              </h3>
              <a
                href="https://cameron327.github.io/DrumKit/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett projectLink"
              >
                Check it out!
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at tincidunt arcu, at dapibus nisl. Duis auctor dapibus
                accumsan. Etiam neque metus, bibendum sed ligula sed, faucibus
                blandit massa. In porttitor lobortis sapien, sollicitudin
                iaculis augue commodo et. Fusce libero nunc, finibus in
                elementum id,{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="projectSection">
          <strong>
            <h2 className="projectSectionName">Hackathon Projects</h2>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at tincidunt arcu, at dapibus nisl. Duis auctor dapibus
                accumsan. Etiam neque metus, bibendum sed ligula sed, faucibus
                blandit massa. In porttitor lobortis sapien, sollicitudin
                iaculis augue commodo et. Fusce libero nunc, finibus in
                elementum id,{" "}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at tincidunt arcu, at dapibus nisl. Duis auctor dapibus
                accumsan. Etiam neque metus, bibendum sed ligula sed, faucibus
                blandit massa. In porttitor lobortis sapien, sollicitudin
                iaculis augue commodo et. Fusce libero nunc, finibus in
                elementum id,{" "}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at tincidunt arcu, at dapibus nisl. Duis auctor dapibus
                accumsan. Etiam neque metus, bibendum sed ligula sed, faucibus
                blandit massa. In porttitor lobortis sapien, sollicitudin
                iaculis augue commodo et. Fusce libero nunc, finibus in
                elementum id,{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Project;
