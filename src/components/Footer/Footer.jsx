// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex">
          <div className="footer-left">
            <span className="footer-logo">Shauryaraje <span className="text-gradient">Yadav</span></span>
            <p className="footer-tagline">Founder & Full Stack Developer</p>
          </div>
          
          <div className="footer-right">
            <p className="copyright">
              © {currentYear} • Built with precision by Shauryaraje Ravsaheb Yadav
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;