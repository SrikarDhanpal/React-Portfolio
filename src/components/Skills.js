import React from 'react';

function Skills() {
  const skillCategories = [
    { category: "AI & Workflow Automation", icon: "fa-solid fa-diagram-project", skills: [
      { name: "n8n", icon: "fa-solid fa-arrows-spin" }, { name: "Webhook & Schedule Triggers", icon: "fa-solid fa-bolt" },
      { name: "LLM Workflow Nodes", icon: "fa-solid fa-brain" }, { name: "API Integrations", icon: "fa-solid fa-plug" },
      { name: "Retries & Error Handling", icon: "fa-solid fa-shield-halved" }, { name: "Docker", icon: "fa-brands fa-docker" }
    ]},
    { category: "LLMs & Applied AI", icon: "fa-solid fa-wand-magic-sparkles", skills: [
      { name: "Claude API", icon: "fa-solid fa-message" }, { name: "OpenAI API", icon: "fa-solid fa-robot" },
      { name: "DeepSeek API", icon: "fa-solid fa-microchip" }, { name: "Gemini", icon: "fa-brands fa-google" },
      { name: "Prompt Engineering", icon: "fa-solid fa-pen-to-square" },
      { name: "Function & Tool Calling", icon: "fa-solid fa-screwdriver-wrench" }, { name: "Structured JSON", icon: "fa-solid fa-code" }, { name: "LangChain", icon: "fa-solid fa-link" },
      { name: "RAG & Agentic Workflows", icon: "fa-solid fa-diagram-project" }, { name: "Information Extraction", icon: "fa-solid fa-file-lines" }
    ]},
    { category: "Automation Integrations & Data", icon: "fa-solid fa-share-nodes", skills: [
      { name: "Google Sheets", icon: "fa-solid fa-table" }, { name: "Slack", icon: "fa-brands fa-slack" },
      { name: "REST APIs", icon: "fa-solid fa-cloud-arrow-up" }, { name: "PostgreSQL / Supabase", icon: "fa-solid fa-database" },
      { name: "SQLite", icon: "fa-solid fa-database" }, { name: "Python & pandas", icon: "fa-brands fa-python" },
      { name: "Databricks", icon: "fa-solid fa-mountain-sun" }, { name: "Apache Spark & Delta Lake", icon: "fa-solid fa-layer-group" },
      { name: "Data Profiling & Validation", icon: "fa-solid fa-list-check" }, { name: "SQL Analytics", icon: "fa-solid fa-chart-column" }
    ]},
    { category: "Software Engineering", icon: "fa-solid fa-code", skills: [
      { name: "Python", icon: "fa-brands fa-python" }, { name: "FastAPI", icon: "fa-solid fa-bolt" },
      { name: "C# & .NET Core", icon: "fa-brands fa-microsoft" }, { name: "JavaScript & TypeScript", icon: "fa-brands fa-js" },
      { name: "React, Redux Toolkit & Router", icon: "fa-brands fa-react" }, { name: "Angular", icon: "fa-brands fa-angular" },
      { name: "HTML, CSS & Tailwind", icon: "fa-brands fa-html5" }, { name: "Bootstrap & Responsive UI", icon: "fa-brands fa-bootstrap" },
      { name: "Node.js & Express", icon: "fa-brands fa-node-js" }, { name: "ASP.NET MVC & Web API", icon: "fa-brands fa-microsoft" },
      { name: "Entity Framework Core, LINQ & JWT", icon: "fa-solid fa-layer-group" }, { name: "SQL Server, MySQL & MongoDB", icon: "fa-solid fa-database" },
      { name: "Microservices-ready Design", icon: "fa-solid fa-cubes" }, { name: "Axios / Fetch API", icon: "fa-solid fa-arrow-right-arrow-left" },
      { name: "Git & GitHub", icon: "fa-brands fa-github" }, { name: "Azure DevOps", icon: "fa-solid fa-cloud" },
      { name: "Postman, Swagger, npm & Vite", icon: "fa-solid fa-screwdriver-wrench" }, { name: "OOP, DBMS & Clean Architecture", icon: "fa-solid fa-diagram-project" },
      { name: "OS & Computer Networks", icon: "fa-solid fa-network-wired" }, { name: "250+ LeetCode Problems", icon: "fa-solid fa-code" }
    ]}
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-header">
        <p className="section-subtitle">AI First / Engineering Foundation</p>
        <h2 className="section-title">Skills & Tooling</h2>
        <div className="section-divider"></div>
      </div>
      <div className="skills-grid">
        {skillCategories.map((cat) => <div key={cat.category} className="skills-category-card glass-card">
          <div className="cat-header"><i className={`${cat.icon} cat-icon`}></i><h3>{cat.category}</h3></div>
          <div className="skills-tags-container">{cat.skills.map((skill) => <div key={skill.name} className="skill-chip">
            <i className={`${skill.icon} skill-icon`} aria-hidden="true"></i><span className="skill-name">{skill.name}</span>
          </div>)}</div>
        </div>)}
      </div>
    </section>
  );
}

export default Skills;
