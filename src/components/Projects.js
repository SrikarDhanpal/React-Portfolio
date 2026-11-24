import React, { useState } from 'react';

function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});
  const projectList = [
    {
      title: "AI Lead Qualification & Routing Engine",
      category: "AI WORKFLOW AUTOMATION",
      tech: ["n8n", "Gemini", "Google Sheets", "REST APIs", "Webhooks"],
      workflow: ["Webhook intake", "Validate & dedupe", "LLM enrichment", "Score & route"],
      bullets: [
        "Built an end-to-end n8n lead pipeline with input validation, clear HTTP error responses, and idempotent deduplication so repeat submissions update the existing record.",
        "Enriched company profiles through website fetches and Gemini structured extraction for industry, offering, and company size, with retries and graceful error handling.",
        "Combined separate LLM fit and intent scores with rules-based objective signals to assign hot, warm, or cold tiers; stored score reasoning for auditability."
      ]
    },
    {
      title: "Real-Time AI Support Triage & Escalation",
      category: "AI WORKFLOW AUTOMATION",
      tech: ["n8n", "Claude API", "Webhooks", "PostgreSQL", "Slack", "Docker"],
      workflow: ["Request trigger", "Classify with LLM", "Priority routing", "Slack + digest"],
      bullets: [
        "Built event-driven n8n workflows that process support requests from forms and email without manual hand-offs.",
        "Used structured LLM output to classify intent, urgency, and sentiment, then route tickets through priority-based branches.",
        "Sent urgent tickets to Slack, logged requests in PostgreSQL, and added scheduled summaries, retries, failure alerts, and Docker self-hosting."
      ],
    },
    {
      title: "DeepSeek Engineering Agent",
      category: "AGENTIC AI",
      tech: ["Python", "FastAPI", "DeepSeek API", "Tool Calling", "SQLite"],
      bullets: [
        "Built a local-first coding agent that investigates codebases through bounded tool-calling loops and read-only repository tools.",
        "Added SQLite task memory, validated FastAPI endpoints, and evidence-linked response scoring."
      ],
    },
    {
      title: "Skytrax Aviation Reviews Data Pipeline",
      category: "DATA ENGINEERING",
      tech: ["Databricks", "Apache Spark", "Delta Lake", "SQL"],
      bullets: [
        "Built a medallion architecture pipeline across seven notebooks for ingestion, profiling, validation, and aggregation of about 62K airline reviews.",
        "Applied SQL analysis and Delta optimization with time travel, and documented lineage with a Mermaid diagram."
      ],
    },
    {
      title: "PV Case Co-Pilot - Pharmacovigilance AI",
      category: "AI APPLICATION DESIGN",
      tech: ["Python", "FastAPI", "Claude API", "React", "PostgreSQL"],
      bullets: [
        "Designed an AI co-pilot concept to extract structured data from unstructured Individual Case Safety Reports.",
        "Planned MedDRA code suggestions, regulatory narrative generation, and a 15-day deadline tracker for the innovation challenge."
      ],
    },
    {
      title: "Script to Screen - Article to Video Generator",
      category: "LLM APPLICATION",
      tech: ["Python", "LangChain", "OpenAI API", "Streamlit"],
      image: "./assets/project2.png",
      github: "https://github.com/SrikarDhanpal/Script-to-Screen",
      bullets: ["Built an AI application that turns articles into summarized, narrated videos using prompt-engineered scripts."]
    },
    {
      title: "MediCore - Hospital Management System",
      category: "FULL STACK ENGINEERING",
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
      category: "FULL STACK ENGINEERING",
      tech: ["ASP.NET Core", "Angular", "SQL Server", "REST APIs"],
      image: "./assets/project1.png",
      github: "https://github.com/SrikarDhanpal/Leave-Management-System",
      bullets: [
        "Developed an employee leave approval system.",
        "Integrated Angular frontend with ASP.NET Core Web APIs."
      ]
    },
    {
      title: "Wanderlust - Hotel Booking Platform",
      category: "FULL STACK ENGINEERING",
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
        <p className="section-subtitle">Automation / Agents / Data</p>
        <h2 className="section-title">AI & Workflow Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <article key={project.title} className={`project-card glass-card ${expandedProjects[idx] ? 'project-expanded' : ''}`}>
            <div className="project-img-container">
              {project.workflow ? <div className="workflow-visual" aria-label={`Workflow: ${project.workflow.join(' to ')}`}>
                <span className="workflow-orbit"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                <div className="workflow-nodes">{project.workflow.map((step, stepIndex) => <React.Fragment key={step}>
                  <div className="workflow-node"><i className={`fa-solid ${["fa-bolt", "fa-filter", "fa-brain", "fa-route"][stepIndex % 4]}`}></i><span>{step}</span></div>
                  {stepIndex < project.workflow.length - 1 && <i className="fa-solid fa-arrow-right workflow-arrow" aria-hidden="true"></i>}
                </React.Fragment>)}</div>
                <span className="workflow-caption"><i className="fa-solid fa-circle-nodes"></i> Event-driven / observable / resilient</span>
              </div> : project.image ? <img
                src={project.image}
                alt={project.title}
                onError={(e) => { e.target.onerror = null; e.target.src = './assets/project1.png'; }}
              /> : <div className="workflow-placeholder"><i className="fa-solid fa-diagram-project"></i><span>{project.category}</span></div>}
              {project.github && <div className="project-overlay">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View source code">
                  <i className="fa-brands fa-github"></i> Source Code
                </a>}
              </div>}
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-category">{project.category}</span>

              <div className="project-tech-stack">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="project-tag">{t}</span>
                ))}
              </div>

              <button
                className="project-details-toggle"
                type="button"
                aria-expanded={Boolean(expandedProjects[idx])}
                aria-controls={`project-details-${idx}`}
                onClick={() => setExpandedProjects((current) => ({ ...current, [idx]: !current[idx] }))}
              >
                <span>{expandedProjects[idx] ? 'Hide project details' : 'View full project'}</span>
                <i className={`fa-solid ${expandedProjects[idx] ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
              </button>

              <div className="project-details" id={`project-details-${idx}`}>
                <ul className="project-bullets">
                  {project.bullets.map((b, bIdx) => (
                    <li key={bIdx}>
                      <i className="fa-solid fa-angle-right bullet-icon"></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {project.github && <div className="project-footer">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-code-link">
                    <i className="fa-brands fa-github"></i> Repository <i className="fa-solid fa-arrow-up-right-from-square arrow-icon"></i>
                  </a>
                </div>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
