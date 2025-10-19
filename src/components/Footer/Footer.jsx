// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/Shauryaraje7',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shauryaraje/',
      color: '#0077B5'
    },
    // {
    //   icon: <FaTwitter />,
    //   name: 'Twitter',
    //   url: 'https://twitter.com',
    //   color: '#1DA1F2'
    // },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      url: 'mailto:shauryarajeyadav@gmail.com',
      color: '#EA4335'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Shauryaraje Yadav</span>
            </div>
            <p className="footer-description">
              A passionate web developer Crafting digital experiences with modern technologies, I build responsive,
               performant web applications that solve real-world problems and create meaningful impact.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Skills</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <p>📍 Pune, India</p>
              <p>📧 shauryarajeyadav@gmail.com</p>
              <p>📱 +91 98765 43210</p>
            </div>
            <a href="#contact" className="contact-btn">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Shauryaraje Yadav. Made with{' '}
              <FaHeart className="heart-icon" /> using React & CSS
            </p>
          </div>
          
          <div className="footer-actions">
            <button 
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;