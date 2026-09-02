import React, { useState } from 'react';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formDataState, setFormDataState] = useState({ name: '', email: '', message: '' });
  const [lastGmailUrl, setLastGmailUrl] = useState('');
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const handleChange = (e) => {
    setFormDataState({ ...formDataState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const recipient = "srikardhanpal0108@gmail.com";
    const subjectText = `Portfolio Message from ${formDataState.name}`;
    const bodyText = `Hi Srikar,\n\n${formDataState.message}\n\n-------------------------------\nSender Information:\nName: ${formDataState.name}\nEmail: ${formDataState.email}`;

    // Construct Gmail Web Compose URL (opens login if not logged in, pre-fills To, Subject, Body)
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    
    // Construct System Mailto URL
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    setLastGmailUrl(gmailComposeUrl);
    setLastMailtoUrl(mailtoUrl);

    // Open Gmail Compose tab directly
    window.open(gmailComposeUrl, '_blank');

    // Also submit via background form endpoint as dual backup
    try {
      const form = e.target;
      const data = new FormData(form);
      await fetch("https://getform.io/f/akkymkka", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
    } catch (err) {
      console.log("Background dispatch note:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  const directGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=srikardhanpal0108@gmail.com&su=${encodeURIComponent("Inquiry from Portfolio")}&body=${encodeURIComponent("Hi Srikar,\n\n")}`;
  const directMailtoLink = `mailto:srikardhanpal0108@gmail.com?subject=${encodeURIComponent("Inquiry from Portfolio")}&body=Hi Srikar,`;

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
            I am actively seeking full-time software developer opportunities. Click below to compose an email directly in Gmail or your mail client.
          </p>

          <div className="contact-items-list">
            <a href={directGmailLink} target="_blank" rel="noopener noreferrer" className="contact-item" title="Click to open Gmail Web Compose">
              <div className="contact-icon-wrapper">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <span className="contact-label">Open in Gmail Web</span>
                <span className="contact-value">srikardhanpal0108@gmail.com</span>
              </div>
            </a>

            <a href={directMailtoLink} className="contact-item" title="Click to open default Mail App">
              <div className="contact-icon-wrapper">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
              <div>
                <span className="contact-label">Default Mail Client</span>
                <span className="contact-value">srikardhanpal0108@gmail.com</span>
              </div>
            </a>

            <a href="tel:+919103633793" className="contact-item" title="Click to call">
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
            <span className="social-heading">Connect on Social & Code Profiles</span>
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
              <h4>Gmail Compose Opened!</h4>
              <p>
                A new Gmail compose window has been opened pre-filled with your message to <strong>srikardhanpal0108@gmail.com</strong>.
              </p>
              <p style={{ fontSize: '1.3rem', color: '#94a3b8', margin: '1rem 0 2rem' }}>
                If you are prompted to log in, simply sign into your Gmail account and press <strong>Send</strong> (or <code>Ctrl + Enter</code>).
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
                <a href={lastGmailUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.3rem', padding: '0.8rem 1.6rem' }}>
                  <i className="fa-brands fa-google"></i> Re-open Gmail Compose
                </a>
                <a href={lastMailtoUrl} className="btn btn-secondary" style={{ fontSize: '1.3rem', padding: '0.8rem 1.6rem' }}>
                  <i className="fa-solid fa-envelope"></i> Open Mail App
                </a>
              </div>

              <button 
                className="btn btn-secondary" 
                onClick={() => { setFormSubmitted(false); setFormDataState({ name: '', email: '', message: '' }); }}
              >
                Send Another Message
              </button>
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
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formDataState.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe" 
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formDataState.email}
                  onChange={handleChange}
                  required 
                  placeholder="john@example.com" 
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  value={formDataState.message}
                  onChange={handleChange}
                  required 
                  rows="5" 
                  placeholder="Hello Srikar, I'd like to talk about..." 
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Preparing Gmail...
                  </>
                ) : (
                  <>
                    <i className="fa-brands fa-google"></i> Send Message via Gmail
                  </>
                )}
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
