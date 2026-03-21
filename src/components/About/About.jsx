// src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper glass-card">
              <div className="experience-badge">
                <span className="years">4th</span>
                <span className="label">Year CS Student</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Academic Growth & <span className="text-gradient">Real-World Experience</span>
            </h2>
            <p className="about-text">
              I am a 4th-year Computer Science student at VIT Bhopal with a passion for building 
              robust applications that solve actual problems. My journey is defined by a 
              combination of rigorous academic learning and hands-on product engineering, 
              specifically in full-stack development and AI model integration.
            </p>
            <p className="about-text">
              As the Founder of Liomonk, I have transitioned from learning concepts to 
              delivering end-to-end solutions. My experience spans building complex 
              Audit & Compliance systems for agriculture and the comprehensive HealthcarePlus ecosystem, 
              proving my ability to handle large-scale architectures across mobile and web platforms.
            </p>

            <div className="about-stats">
              <div className="stat-card glass-card">
                <h4>Education</h4>
                <p>VIT Bhopal (B.Tech CS)</p>
              </div>
              <div className="stat-card glass-card">
                <h4>Focus</h4>
                <p>Full Stack & Mobile Dev</p>
              </div>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Pune, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">shauryarajeyadav@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;