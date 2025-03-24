import React, { useState } from "react";
import "./Projects.css"; // ✅ css 연결!

function Projects({ projects }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <ul>
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <strong>{project.title}</strong>
            <br />
            <button onClick={() => setSelectedIndex(index === selectedIndex ? null : index)}>
              {index === selectedIndex ? "간단히 보기" : "자세히 보기"}
            </button>
            {index === selectedIndex && <p>{project.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
