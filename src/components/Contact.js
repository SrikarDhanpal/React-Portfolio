import React, { useState } from 'react';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-header">
        <p className="section-subtitle">Let's Connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
      </div>

      <div className="contact-wrapper">
        <article className="contact-info-panel glass-card">
          <h3>Reach Out Directly</h3>
          <p className="contact-lead-text">
            I am open to software engineering opportunities, internships, and full-stack development roles.
          </p>

          <div className="contact-items-list">
            <a href="mailto:srikardhanpal0108@gmail.com" className="contact-item">
              <div className="contact-icon-wrapper">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">srikardhanpal0108@gmail.com</span>
              </div>
            </a>

            <a href="tel:+919103633793" className="contact-item">
              <div className="contact-icon-wrapper">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91 9103633793</span>
              </div>
            </a>

            <a href="https://srikardhanpal.dev" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon-wrapper">
                <i className="fa-solid fa-globe"></i>
              </div>
              <div>
                <span className="contact-label">Website</span>
                <span className="contact-value">srikardhanpal.dev</span>
              </div>
            </a>
          </div>

          <div className="contact-social-links">
            <span className="social-heading">Profiles</span>
            <div className="social-btns">
              <a href="https://linkedin.com/in/srikar-dhanpal" target="_blank" rel="noopener noreferrer" className="social-badge">
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/SrikarDhanpal" target="_blank" rel="noopener noreferrer" className="social-badge">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a href="https://leetcode.com/Srikar_Dhanpal" target="_blank" rel="noopener noreferrer" className="social-badge">
                <i className="fa-solid fa-code"></i> LeetCode
              </a>
            </div>
          </div>
        </article>

        <article className="contact-form-panel glass-card">
          <h3>Send a Message</h3>

          {formSubmitted ? (
            <div className="form-success-msg">
              <i className="fa-solid fa-circle-check"></i>
              <h4>Thank you for reaching out!</h4>
              <p>Your message has been submitted. I will get back to you shortly.</p>
              <button className="btn btn-secondary" onClick={() => setFormSubmitted(false)}>Send Another Message</button>
            </div>
          ) : (
            <form
              action="https://getform.io/f/akkymkka"
              method="POST"
              onSubmit={handleSubmit}
              className="custom-contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" required placeholder="John Doe" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required placeholder="john@example.com" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required rows="5" placeholder="Hello Srikar, I'd like to talk about..." className="form-input"></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <i className="fa-solid fa-paper-plane"></i> Send Message
              </button>
            </form>
          )}
        </article>
      </div>

      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Srikar Dhanpal. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;
