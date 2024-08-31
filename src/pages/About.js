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
                            Hi there! I'm a University of California, San Diego Alumni with a
                            major in Computer Engineering, and I am always enthusiastic about
                            learning new skills and solving problems. Fun fact, I enjoy playing
                            various sports and can hold my own in a game of chess.
                        </p>
                        <div className="shows">
                            Recent favorite TV shows: Daredevil (2015), Stranger Things, The Boys,
                            Sherlock (2010), Better Call Saul, The Office, The Flash (2014).
                        </div>
                        <div className="movies">
                            Recent favorite movies: Avengers Infinity War, Top Gun: Maverick,
                            Spider-Man: No Way Home, Justice League: Snyder Cut, Guardians of the Galaxy,
                            The Suicide Squad (2021).
                        </div>
                    </div>
                </section>

                <div className="divider"></div>

                <section className="section">
                    <div className="aboutCard">
                        <h2 className="header2">Programming Languages</h2>
                        <p className="languages">
                            Python · TypeScript · JavaScript · C++ · C · HTML · CSS
                        </p>

                        <h2 className="header2">Technologies / Frameworks</h2>
                        <p className="technologies">
                            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="hover-scarlett">Google Firebase</a> ·{" "}
                            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="hover-scarlett">Tailwind CSS</a> ·{" "}
                            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer" className="hover-scarlett">Node.js</a> ·{" "}
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="hover-scarlett">React.js</a> ·{" "}
                            <a href="https://vuejs.org/" target="_blank" rel="noreferrer" className="hover-scarlett">Vue.js</a> ·{" "}
                            <a href="https://angular.io/" target="_blank" rel="noreferrer" className="hover-scarlett">Angular</a> ·
                            Git ·{" "}
                            <a href="https://jquery.com/" target="_blank" rel="noreferrer" className="hover-scarlett">jQuery</a> ·{" "}
                            <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="hover-scarlett">Express.js</a> ·{" "}
                            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="hover-scarlett">MongoDB</a> ·
                            VIM · Unix · AJAX ·{" "}
                            <a href="https://axios-http.com/" target="_blank" rel="noreferrer" className="hover-scarlett">Axios</a>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default About;