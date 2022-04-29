import React from "react";

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
              B.S. degree in Computer Science. I have experience working tools
              such as React.js, Vue.js, Express.js, and Google Firebase, just to
              name a few. I'm continuing to enhance my Full Stack Development
              skills during my work and my free time! For fun, I like to watch
              movies and TV shows or play basketball.
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
              ·{" "}
              <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noreferrer"
                className="hover-scarlett"
              >
                Vue.js
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
              · object-oriented programming · data structures · algorithm
              analysis · web-development
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
