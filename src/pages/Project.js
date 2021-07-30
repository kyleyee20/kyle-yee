import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => {
        console.log("data: ", data);
        setProjectData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="projectPage">
      <section className="section">
        <h1 className="title">My Projects</h1>
        <h2 className="subtitle">Welcome to my projects page!</h2>
        <section className="grids">
          {projectData && projectData.map((project, index) => (
              <article className="projectCard">
                <h3 className="projectTitle">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default Project;
