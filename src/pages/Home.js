import React from "react";
// tailwind just knows to get it from the index.css file without importing it?
// import "../index.css";

function Home() {
  return (
    <main className="home">
      <section className="section">
        <h1 className="h1">
          Hello, I'm Cameron
        </h1>
      </section>
    </main>
  );
}

export default Home;
