import React, { useState, useEffect } from 'react';

const ROLES = [
  ".NET Full Stack Developer",
  "Angular & React Specialist",
  "ASP.NET Core & REST API Engineer",
  "250+ LeetCode Solved"
];

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="home" id="home">
      <div className="hero-container">
        <div className="home-content">
          <div className="badge-status">
            <span className="status-dot"></span> Available for Opportunities
          </div>
          <h1>Hi, I'm <span className="highlight-name">Srikar Dhanpal</span></h1>
          <h3 className="typing-container">
            I build software as a <span className="typing-text">{displayText}<span className="cursor">|</span></span>
          </h3>

          <div id="summary" className="summary-box">
            <h4 className="summary-title"><i className="fa-solid fa-user-astronaut"></i> Professional Summary</h4>
            <p className="summary-text">
              Computer Science undergraduate with internship experience at <strong>Cognizant Technology Solutions</strong> in the <strong>.NET Full Stack (Angular)</strong> domain. Strong foundation in software engineering, OOP, data structures, algorithms, REST APIs, and database management. Hands-on experience with <strong>C#, ASP.NET Core, Angular, SQL Server, Entity Framework Core, Git</strong>, and <strong>Azure DevOps</strong>. Solved <strong>250+ LeetCode problems</strong>.
            </p>
          </div>

          <div className="contact-chips">
            <a href="mailto:srikardhanpal0108@gmail.com" className="chip">
              <i className="fa-solid fa-envelope"></i> srikardhanpal0108@gmail.com
            </a>
            <a href="tel:+919103633793" className="chip">
              <i className="fa-solid fa-phone"></i> +91 9103633793
            </a>
            <a href="https://srikardhanpal.dev" target="_blank" rel="noopener noreferrer" className="chip">
              <i className="fa-solid fa-globe"></i> srikardhanpal.dev
            </a>
          </div>

          <div className="social-icons">
            <a href="https://linkedin.com/in/srikar-dhanpal" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/SrikarDhanpal" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://leetcode.com/Srikar_Dhanpal" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <i className="fa-solid fa-code"></i>
            </a>
            <a href="mailto:srikardhanpal0108@gmail.com" title="Email Direct">
              <i className="fa-solid fa-paper-plane"></i>
            </a>
          </div>

          <div className="hero-cta-buttons">
            <a href="#experience" className="btn btn-primary">View Experience</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>

        <div className="home-img-wrapper">
          <div className="img-backdrop"></div>
          <div className="home-img">
            <img src="./assets/srikar.jpg" alt="Srikar Dhanpal" onError={(e) => { e.target.onerror = null; e.target.src = './assets/mypic.jpg'; }} />
          </div>
          <div className="stat-card stat-card-1">
            <i className="fa-solid fa-trophy"></i>
            <div>
              <strong>250+</strong>
              <span>LeetCode Solved</span>
            </div>
          </div>
          <div className="stat-card stat-card-2">
            <i className="fa-solid fa-briefcase"></i>
            <div>
              <strong>Cognizant</strong>
              <span>.NET Full Stack Intern</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;