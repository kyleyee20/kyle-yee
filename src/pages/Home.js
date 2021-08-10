import React from "react";
// tailwind just knows to get it from the index.css file without importing it?
// import "../index.css";

function Home() {
  return (
    <main className="homePage">
      <section className="section">
        <h1>
          Hello! My name is <strong><span className="name">Cameron</span></strong>.
        </h1>
        <h2>
          I'm a Full Stack Developer and a Computer Science major at
          UCD.
        </h2>
        <h3>Check out my resume for a brief overview or check out my work!</h3>
        <button>Resume</button>
      </section>
    </main>
  );
}

export default Home;
