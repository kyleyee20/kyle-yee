import React from "react";
import Footer from "../components/Footer.js";

function About() {
  return (
    <div>
      <main className="aboutPage">
        <section className="section">
          <div className="aboutCard">
            <strong>
              <h2 className="header">About Me</h2>
            </strong>
            <p className="description">
              Hi There! I'm Cameron currently a Junior at UCD working towards a
              B.S. degree in Computer Science. In my most recent work
              experience, I worked for Oneboard.live as a front-end and back-end
              engineer, mainly using JavaScript, React.JS, and Google Firebase.
              Other than school and professional work, I like to learn new
              skills and put them into practice by completing my own projects.
              In my free time, I like to volunteer or watch movies and TV shows.
            </p>
          </div>
        </section>
        <div className="divider"></div>
        <section className="section">
          <div className="aboutCard">
            <h2 className="header2">Programming Languages</h2>
            <p className="languages">
              Python · JavaScript · C++ · C · HTML · CSS
            </p>
            <h2 className="header2">Technologies/Frameworks</h2>
            <p className="technologies">
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                Google Firebase
              </a>{" "}
              ·{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                Tailwind CSS
              </a>{" "}
              ·{" "}
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                Node.js
              </a>{" "}
              ·{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                React.js
              </a>{" "}
              · Git ·{" "}
              <a
                href="https://jquery.com/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                jQuery
              </a>{" "}
              ·{" "}
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                Express.js
              </a>{" "}
              ·{" "}
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                MongoDB
              </a>{" "}
              · VIM · Unix · AJAX ·{" "}
              <a
                href="https://axios-http.com/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                Axios
              </a>{" "}
              · object-orented programming · data structures · algorithm
              analysis · web-development
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
