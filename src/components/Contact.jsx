import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Optional for styling

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_geeyaw4',  
        'template_tehjnrr', 
        form.current,
        'cFRHAMyHEmZ67Oknc'    
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="6" placeholder="Your Message" required />
        <button type="submit">Send Message</button>

        {sent && <p className="success-msg"> Message sent successfully!</p>}
        {error && <p className="error-msg">Failed to send. Try again later.</p>}
      </form>
        <div className="fall-in delay-4">
          <div className="social-icons">
            <a href="https://github.com/Deepika956" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/deepikapalla" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
    </section>
  );
};

export default Contact;
