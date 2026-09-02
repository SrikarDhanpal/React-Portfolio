import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Cognizant Technology Solutions",
      role: "Intern - .NET Full Stack (Angular)",
      duration: "Jan 2024 - Jun 2024",
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
        "Completed internship in the .NET Full Stack (Angular) domain.",
        "Worked with C#, ASP.NET Core, Angular, SQL Server, Entity Framework Core, and REST APIs.",
        "Developed and enhanced web application features following industry best practices.",
        "Used Git for version control and Azure DevOps for project management.",
        "Gained exposure to Agile development, debugging, testing, and CI/CD workflows.",
        "Collaborated with mentors and team members in an enterprise development environment."
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
