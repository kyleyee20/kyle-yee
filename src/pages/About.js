import React from "react";

function About() {
  return (
    <main className="aboutPage">
      <section className="section">
        <div className="aboutCard">
          <strong>
            <h2 className="header">About Me</h2>
          </strong>
          <p className="description">
            Hi There! I'm Cameron currently a Junior at UCD working towards a
            B.S. degree in Computer Science. In my most recent work experience,
            I worked for Oneboard.live as a front-end and back-end engineer,
            mainly using JavaScript, React.JS, and Google Firebase. Other than
            school and professional work, I like to learn new skills and put
            them into practice by completing my own projects. In my free time, I
            like to volunteer or watch movies and TV shows.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="aboutCard">
          <strong>
            <h2 className="header">Skills</h2>
          </strong>
          <p className="skills">Python, JavaScript, C++, C, HTML, CSS</p>
          <p className="skills">
            Google Firebase, Tailwind CSS, Node.js, React.js, Git, jQuery,
            Express.js, MongoDB, VIM, Linux/Unix, AJAX, axios.js,
            object-oriented programming, data structures, algorithm analysis,
            web-development
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
