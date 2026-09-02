import React from 'react';

function Projects() {
  const projectList = [
    {
      title: "MediCore - Hospital Management System",
      tech: ["ASP.NET Core", "Angular", "SQL Server", "EF Core", "JWT Auth"],
      image: "./assets/MediCoreImage.png",
      github: "https://github.com/SrikarDhanpal/Medicore",
      bullets: [
        "Built a full-stack healthcare management application.",
        "Designed secure REST APIs with JWT authentication.",
        "Implemented CRUD operations using Entity Framework Core."
      ]
    },
    {
      title: "Leave Management System",
      tech: ["ASP.NET Core", "Angular", "SQL Server", "REST APIs"],
      image: "./assets/project1.png",
      github: "https://github.com/SrikarDhanpal/Leave-Management-System",
      bullets: [
        "Developed an employee leave approval system.",
        "Integrated Angular frontend with ASP.NET Core Web APIs."
      ]
    },
    {
      title: "Script to Screen - Article to Video Generator",
      tech: ["Python", "LangChain", "OpenAI API", "Streamlit"],
      image: "./assets/project2.png",
      github: "https://github.com/SrikarDhanpal/Script-to-Screen",
      bullets: [
        "Built an AI-powered application that converts articles into summarized videos."
      ]
    },
    {
      title: "Wanderlust - Hotel Booking Platform",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "./assets/project3.png",
      github: "https://github.com/SrikarDhanpal/Wanderlust",
      bullets: [
        "Built a hotel listing and booking platform.",
        "Created RESTful APIs using Node.js and Express.js.",
        "Integrated MongoDB for data storage and retrieval.",
        "Implemented responsive UI using React.js."
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section-header">
        <p className="section-subtitle">Portfolio Highlights</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <article key={idx} className="project-card glass-card">
            <div className="project-img-container">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => { e.target.onerror = null; e.target.src = './assets/project1.png'; }}
              />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View source code">
                  <i className="fa-brands fa-github"></i> Source Code
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>

              <div className="project-tech-stack">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="project-tag">{t}</span>
                ))}
              </div>

              <ul className="project-bullets">
                {project.bullets.map((b, bIdx) => (
                  <li key={bIdx}>
                    <i className="fa-solid fa-angle-right bullet-icon"></i>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-code-link">
                  <i className="fa-brands fa-github"></i> Repository <i className="fa-solid fa-arrow-up-right-from-square arrow-icon"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
