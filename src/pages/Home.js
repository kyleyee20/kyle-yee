import React from "react";
// tailwind just knows to get it from the index.css file without importing it?
// import "../index.css";

function Home() {
  return (
    <main className="home">
      <section className="section">
        <h1 className="text-6xl text-green-100 font-bold leading-none lg:leading-snug home-name">
          Hello, I'm Cameron
        </h1>
      </section>
    </main>
  );
}

export default Home;
