// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-glow"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>👋 Hello, I'm</span>
            </div>
            <h1 className="hero-title">
              Shauryaraje <span className="gradient-text">Yadav</span>
            </h1>
            <h2 className="hero-subtitle">
              Professional <span className="accent-text">Web Developer</span>
            </h2>
            <p className="hero-description">
              Crafting digital experiences with modern technologies. 
              I build responsive, performant web applications that solve real-world problems.
            </p>
            <div className="hero-location">
              <span className="location-pin">📍</span>
              Based in Pune, India
            </div>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" className="social-link">
                <FaTwitter />
              </a>
              <a href="mailto:shaurya@example.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>Your Photo</span>
                </div>
                <div className="profile-glow"></div>
              </div>
              <div className="tech-stack">
                <span>React</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;