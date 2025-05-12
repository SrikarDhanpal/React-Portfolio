import React from 'react';
function contact() {
    return ( 
        <div>

        <section id="contact" className='contact'>
    <div class="contact-content">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="./assets/mail.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
            height="96px"
            />
          <p class="send"><a href="mailto:srikardhanpal0108@gmail.com">Send me a Mail</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="assets/icons8-linkedin.svg"
            alt="LinkedIn icon"
            class="icon contact-icon"
            height="96px"
            />
          <p class="send"><a href="https://www.linkedin.com/in/srikar-dhanpal-558ba6250/">LinkedIn</a></p>
        </div>
      </div>
    </div>
    <div className='form-div'>
    <form
              action="https://getform.io/f/akkymkka"
              method="POST"
              className="contact-form"
            >
              <div className="input-card">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="input"
                  required
                  placeholder="Your Name..."
                />
              </div>
              <div className="input-card">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="input"
                  required
                  placeholder="yourmail@xxxx.com..."
                />
              </div>
              <div className="input-card">
                <label htmlFor="email" className="label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Hi!"
                  required
                  className="input"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            </div>
    </section>
            </div>
     );
}

export default contact;