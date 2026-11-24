import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Cognizant Technology Solutions",
      role: "Intern - .NET Full Stack (Angular)",
      duration: "Jan 2026 - Jun 2026",
      location: "Enterprise development environment",
      techStack: [
        "C#",
        "ASP.NET Core",
        "Angular",
        "SQL Server",
        "Entity Framework Core",
        "REST APIs",
        "Git",
        "Azure DevOps",
        "Agile",
        "CI/CD"
      ],
      highlights: [
        "Built and enhanced enterprise web application features using C#, ASP.NET Core, Angular, SQL Server, and Entity Framework Core.",
        "Designed REST APIs and collaborated with mentors in an Agile team using Git and Azure DevOps.",
        "Applied backend, API, and delivery practices that support reliable automation and AI product integrations."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-header">
        <p className="section-subtitle">Professional Background</p>
        <h2 className="section-title">Experience</h2>
        <div className="section-divider"></div>
      </div>

      <div className="experience-container">
        {experiences.map((exp, idx) => (
          <article key={idx} className="experience-card glass-card">
            <div className="exp-card-header">
              <div className="exp-company-info">
                <div className="company-icon">
                  <i className="fa-solid fa-building-user"></i>
                </div>
                <div>
                  <h3 className="company-name">{exp.company}</h3>
                  <h4 className="role-title">{exp.role}</h4>
                </div>
              </div>
              <div className="exp-meta">
                <span className="duration-badge"><i className="fa-regular fa-calendar-days"></i> {exp.duration}</span>
                <span className="location-text"><i className="fa-solid fa-location-dot"></i> {exp.location}</span>
              </div>
            </div>

            <div className="exp-body">
              <ul className="exp-highlights-list">
                {exp.highlights.map((point, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-circle-check point-icon"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tech-tags">
                <span className="tech-label">Key Technologies</span>
                <div className="tags-wrapper">
                  {exp.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
