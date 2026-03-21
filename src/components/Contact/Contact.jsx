// src/components/Contact/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="contact-lead">
              I am currently open to internships and full-time opportunities. 
              If you have a project or a role that aligns with my skills, feel free to reach out.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><FiMail /></div>
                <div>
                  <h4>Email</h4>
                  <p>shauryarajeyadav@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-details-list" style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
              <p>📍 Pune, India</p>
              <p>📱 +91 98765 43210</p>
            </div>

            <div className="contact-social" style={{ marginTop: '2rem' }}>
              <a href="https://linkedin.com/in/shauryaraje" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiLinkedin />
              </a>
              <a href="https://github.com/Shauryaraje7" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiGithub />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                <span>Send Message</span>
                <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;