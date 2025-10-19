import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Profile from '../../assets/images/profile.jpeg';

const Hero = () => {
  const scrollToNextSection = () => {
    // Get the next section (skills section)
    const nextSection = document.getElementById('skills');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-glow"></div>
        <div className="hero-orbit hero-orbit-1"></div>
        <div className="hero-orbit hero-orbit-2"></div>
        <div className="hero-orbit hero-orbit-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-content">
                <span className="waving-hand">👋</span> Hello, I'm
              </span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Shauryaraje</span>
              <span className="title-line gradient-text">Yadav</span>
            </h1>
            
            <div className="hero-subtitle-wrapper">
              <h2 className="hero-subtitle">
                Professional <span className="accent-text typing-text">Web Developer</span>
              </h2>
            </div>
            
            <p className="hero-description">
              Crafting <span className="highlight">digital experiences</span> with modern technologies. 
              I build responsive, performant web applications that solve real-world problems 
              and create meaningful impact.
            </p>
            
            <div className="hero-meta">
              <div className="hero-location">
                <span className="location-pin">📍</span>
                Based in Pune, India
              </div>
              <div className="hero-availability">
                <span className="availability-dot"></span>
                Available for freelance
              </div>
            </div>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span className="btn-content">
                  View My Work
                  <span className="btn-arrow">→</span>
                </span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span className="btn-content">
                  Get In Touch
                  <span className="btn-arrow">→</span>
                </span>
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/Shauryaraje7" className="social-link" aria-label="GitHub">
                <FaGithub />
                <span className="social-tooltip">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/shauryaraje/" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a href="mailto:shauryarajeyadav@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
                <span className="social-tooltip">Email</span>
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <img 
                  src={Profile} 
                  alt="Shauryaraje Yadav" 
                  className="profile-image"
                />
                <div className="profile-border-glow"></div>
                <div className="profile-shine"></div>
              </div>
              
              <div className="floating-tech">
                <div className="tech-bubble bubble-1">React</div>
                <div className="tech-bubble bubble-2">JS</div>
                <div className="tech-bubble bubble-3">Node</div>
                <div className="tech-bubble bubble-4">CSS</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={scrollToNextSection}>
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
          <FaArrowDown className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;