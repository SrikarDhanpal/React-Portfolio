import React from 'react';

const resumeUrl = './assets/Srikar_Dhanpal_Resume_Updated.pdf';

function Resume() {
  return (
    <section className="section-padding resume-section" id="resume">
      <div className="section-header">
        <span className="section-subtitle">My Background</span>
        <h2 className="section-title">Resume</h2>
        <div className="section-divider"></div>
      </div>

      <article className="resume-document">
        <header className="resume-heading">
          <div>
            <h3>Srikar Dhanpal</h3>
            <p>Hyderabad, India · 91-9110363793 · srikardhanpal0108@gmail.com</p>
            <p>linkedin.com/in/srikar-dhanpal · github.com/SrikarDhanpal · srikardhanpal.dev</p>
          </div>
          <a className="btn btn-primary resume-download" href={resumeUrl} download="Srikar_Dhanpal_Resume.pdf">
            <i className="fa-solid fa-download" aria-hidden="true"></i> Download Resume
          </a>
        </header>

        <div className="resume-content">
          <section>
            <h4>Summary</h4>
            <p>AI and workflow automation focused software engineer building n8n automations that connect webhooks, LLMs, APIs, Slack, and databases. Experienced with structured LLM outputs, tool calling, agentic workflows, RAG, Python data pipelines, and enterprise REST API development.</p>
          </section>
          <section>
            <h4>Experience</h4>
            <div className="resume-entry-heading"><strong>Cognizant Technology Solutions</strong><span>Jan 2026 – Jun 2026</span></div>
            <p>.NET Full Stack (Angular) Intern · Hyderabad, India</p>
            <ul>
              <li>Built and enhanced web application features using C#, ASP.NET Core, Angular, SQL Server, and Entity Framework Core.</li>
              <li>Designed REST APIs and collaborated with mentors using Git and Azure DevOps in an Agile, enterprise environment.</li>
            </ul>
          </section>
          <section>
            <h4>Education</h4>
            <div className="resume-entry-heading"><strong>Sreenidhi Institute of Science &amp; Technology</strong><span>2022 – 2026</span></div>
            <p>Bachelor of Technology in Information Technology · Hyderabad, India</p>
            <p>CGPA: 8.6/10 · Solved 250+ problems on LeetCode.</p>
          </section>
          <section>
            <h4>Projects</h4>
            <p><strong>AI Lead Qualification &amp; Routing Engine</strong> | n8n, Gemini, Google Sheets, REST APIs</p>
            <ul><li>Built a validated, idempotent lead pipeline with HTTP error responses; enriched company profiles through website fetches and Gemini structured extraction, with retries and graceful failure handling.</li><li>Combined LLM fit and intent scores with objective rules to assign hot, warm, and cold tiers, storing score reasoning for auditability.</li></ul>
            <p><strong>Real-Time AI Support Triage &amp; Escalation Automation</strong> | n8n, Claude API, PostgreSQL, Slack</p>
            <ul><li>Automated request classification, priority routing, Slack escalations, PostgreSQL logging, scheduled digests, retries, and failure alerts.</li></ul>
            <p><strong>Autonomous ReAct-Based AI Agent</strong> · Python, Groq API, ReAct Framework</p>
            <ul><li>Built an autonomous agent with custom tools for file system manipulation and shell execution, using a recursive reasoning loop to break down goals and refine its approach.</li></ul>
            <p><strong>Script to Screen – Article to Video Generator</strong> · Python, LangChain, OpenAI API, Streamlit</p>
            <ul><li>Created an AI application that summarizes articles into narrated videos using prompt-engineered, video-ready scripts.</li></ul>
            <p><strong>MediCore – Hospital Management System</strong> · ASP.NET Core, Angular, SQL Server</p>
            <ul><li>Built a healthcare application with JWT-secured REST APIs and Entity Framework Core CRUD operations.</li></ul>
            <p><strong>Wanderlust – Hotel Booking Platform</strong> · MongoDB, Express.js, React.js, Node.js</p>
            <ul><li>Developed a hotel listing and booking platform with RESTful APIs and a responsive React interface.</li></ul>
          </section>
          <section>
            <h4>Technical Skills</h4>
            <p><strong>Languages:</strong> C#, Java, JavaScript, TypeScript, Python, SQL</p>
            <p><strong>Frameworks:</strong> ASP.NET Core, ASP.NET MVC, ASP.NET Web API, Angular, React, Entity Framework Core, LINQ, JWT Auth</p>
            <p><strong>Databases:</strong> SQL Server, MySQL, MongoDB</p>
            <p><strong>Tools:</strong> n8n, Docker, Git, GitHub, Azure DevOps, Postman, Swagger</p>
            <p><strong>Concepts:</strong> Data Structures &amp; Algorithms, OOP, DBMS, Operating Systems, Computer Networks, Clean Architecture</p>
          </section>
          <section>
            <h4>AI Engineering Skills</h4>
            <p><strong>LLMs &amp; APIs:</strong> OpenAI, Claude, DeepSeek, Gemini; prompt engineering, structured JSON, function/tool calling</p>
            <p><strong>Frameworks &amp; patterns:</strong> LangChain, Retrieval-Augmented Generation (RAG), agentic AI workflows</p>
            <p><strong>Automation &amp; Data:</strong> n8n webhooks, schedules, LLM nodes, API integrations, retries, Python, pandas, SQL, Databricks, Spark, Delta Lake</p>
          </section>
          <section>
            <h4>Certifications &amp; Achievements</h4>
            <p>.NET Full Stack Development · SQL Certification · Data Structures &amp; Algorithms · Web Development Certification</p>
            <p>Solved 250+ coding problems on LeetCode; built and shipped multiple full-stack and AI-powered web applications.</p>
          </section>
        </div>
      </article>
    </section>
  );
}

export default Resume;
