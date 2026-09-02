import React from 'react';

function About() {
  const certifications = [
    { title: ".NET Full Stack Development", icon: "fa-brands fa-microsoft" },
    { title: "SQL Certification", icon: "fa-solid fa-database" },
    { title: "Data Structures & Algorithms", icon: "fa-solid fa-code" },
    { title: "Web Development Certification", icon: "fa-solid fa-laptop-code" }
  ];

  const achievements = [
    "Solved 250+ coding problems on LeetCode.",
    "Built multiple full-stack web applications.",
    "Strong problem-solving and analytical skills.",
    "Adaptable to new technologies, tools, and development workflows."
  ];

  return (
    <section id="education" className="section-padding">
      <div className="section-header">
        <p className="section-subtitle">Academic Foundation</p>
        <h2 className="section-title">Education & Recognition</h2>
        <div className="section-divider"></div>
      </div>

      <div className="education-grid">
        <article className="education-card glass-card">
          <div className="card-badge"><i className="fa-solid fa-graduation-cap"></i> Education</div>
          <h3 className="institution-name">Sreenidhi Institute of Science & Technology, Hyderabad</h3>
          <h4 className="degree-title">Bachelor of Technology - Information Technology</h4>

          <div className="edu-meta">
            <span className="edu-year"><i className="fa-regular fa-calendar-days"></i> 2022 - 2026</span>
            <span className="edu-cgpa"><i className="fa-solid fa-award"></i> CGPA: <strong>8.6 / 10</strong></span>
          </div>

          <p className="edu-desc">
            Coursework and practice across software engineering, OOP, data structures, algorithms, DBMS, operating systems, computer networks, REST APIs, and web development.
          </p>
        </article>

        <article className="certifications-card glass-card">
          <div className="card-badge"><i className="fa-solid fa-certificate"></i> Certifications</div>
          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-item">
                <div className="cert-icon-box">
                  <i className={cert.icon}></i>
                </div>
                <span>{cert.title}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="achievements-card glass-card">
        <div className="card-badge badge-gold"><i className="fa-solid fa-trophy"></i> Achievements</div>
        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="achievement-box">
              <div className="achieve-icon"><i className="fa-solid fa-star"></i></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default About;
