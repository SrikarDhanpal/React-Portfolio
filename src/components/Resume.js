import React from 'react';

const resumeUrl = './assets/Srikar_Dhanpal_Resume_final_ai.docx';

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
          <a className="btn btn-primary resume-download" href={resumeUrl} download="Srikar_Dhanpal_Resume.docx">
            <i className="fa-solid fa-download" aria-hidden="true"></i> Download Resume
          </a>
        </header>

        <div className="resume-content">
          <section>
            <h4>Summary</h4>
            <p>Full-stack developer (.NET, Angular, React, Python) transitioning into AI Engineering, with hands-on experience building LLM-powered applications using the OpenAI and Claude APIs. Combines production-grade backend and API design skills with growing expertise in prompt engineering, RAG, and agentic AI workflows.</p>
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
            <p><strong>Tools:</strong> Git, GitHub, Azure DevOps, Docker, Postman, Swagger, Claude Code</p>
            <p><strong>Concepts:</strong> Data Structures &amp; Algorithms, OOP, DBMS, Operating Systems, Computer Networks, Clean Architecture</p>
          </section>
          <section>
            <h4>AI Engineering Skills</h4>
            <p><strong>LLMs &amp; APIs:</strong> OpenAI API, Claude API (Anthropic), prompt engineering, function/tool calling</p>
            <p><strong>Frameworks &amp; patterns:</strong> LangChain, Retrieval-Augmented Generation (RAG), agentic AI workflows</p>
            <p><strong>ML/Data:</strong> Python for AI/ML, pandas, data profiling and validation, SQL-based analysis</p>
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
