import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: "fa-solid fa-code",
      skills: [
        { name: "C#", level: "Advanced", icon: "fa-solid fa-hashtag" },
        { name: "Java", level: "Intermediate", icon: "fa-brands fa-java" },
        { name: "JavaScript", level: "Advanced", icon: "fa-brands fa-js" },
        { name: "TypeScript", level: "Intermediate", icon: "fa-solid fa-t" },
        { name: "SQL", level: "Advanced", icon: "fa-solid fa-database" }
      ]
    },
    {
      category: "Frameworks & Technologies",
      icon: "fa-solid fa-layer-group",
      skills: [
        { name: "ASP.NET Core", level: "Advanced", icon: "fa-brands fa-microsoft" },
        { name: "ASP.NET MVC", level: "Intermediate", icon: "fa-solid fa-cubes" },
        { name: "ASP.NET Web API", level: "Advanced", icon: "fa-solid fa-network-wired" },
        { name: "Angular", level: "Intermediate", icon: "fa-brands fa-angular" },
        { name: "React", level: "Intermediate", icon: "fa-brands fa-react" },
        { name: "Entity Framework Core", level: "Advanced", icon: "fa-solid fa-diagram-project" },
        { name: "LINQ", level: "Intermediate", icon: "fa-solid fa-filter" },
        { name: "JWT Authentication", level: "Intermediate", icon: "fa-solid fa-key" }
      ]
    },
    {
      category: "Databases",
      icon: "fa-solid fa-server",
      skills: [
        { name: "SQL Server", level: "Advanced", icon: "fa-solid fa-database" },
        { name: "MySQL", level: "Intermediate", icon: "fa-solid fa-database" },
        { name: "MongoDB", level: "Intermediate", icon: "fa-solid fa-leaf" }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: "fa-solid fa-screwdriver-wrench",
      skills: [
        { name: "Git", level: "Advanced", icon: "fa-brands fa-git-alt" },
        { name: "GitHub", level: "Advanced", icon: "fa-brands fa-github" },
        { name: "Azure DevOps", level: "Intermediate", icon: "fa-solid fa-cloud" },
        { name: "Docker", level: "Basics", icon: "fa-brands fa-docker" },
        { name: "Postman", level: "Advanced", icon: "fa-solid fa-paper-plane" },
        { name: "Swagger", level: "Intermediate", icon: "fa-solid fa-file-code" }
      ]
    },
    {
      category: "Core Concepts & Principles",
      icon: "fa-solid fa-brain",
      skills: [
        { name: "Data Structures & Algorithms", level: "250+ LeetCode", icon: "fa-solid fa-lightbulb" },
        { name: "Object-Oriented Programming (OOP)", level: "Core", icon: "fa-solid fa-shapes" },
        { name: "Database Management Systems (DBMS)", level: "Core", icon: "fa-solid fa-hard-drive" },
        { name: "Operating Systems", level: "Core", icon: "fa-solid fa-desktop" },
        { name: "Computer Networks", level: "Core", icon: "fa-solid fa-globe" },
        { name: "REST APIs", level: "Core", icon: "fa-solid fa-plug" },
        { name: "Dependency Injection", level: "Architecture", icon: "fa-solid fa-syringe" },
        { name: "Repository Pattern", level: "Architecture", icon: "fa-solid fa-folder-tree" },
        { name: "Clean Architecture", level: "Architecture", icon: "fa-solid fa-archway" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-header">
        <p className="section-subtitle">Technical Proficiency</p>
        <h2 className="section-title">Skills & Capabilities</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skills-category-card glass-card">
            <div className="cat-header">
              <i className={`${cat.icon} cat-icon`}></i>
              <h3>{cat.category}</h3>
            </div>
            <div className="skills-tags-container">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-chip">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
