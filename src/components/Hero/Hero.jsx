import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-gradient">Shauryaraje Yadav</span><br />
            Full Stack Developer | Mobile App Developer<br />
            <span className="text-secondary" style={{ fontSize: '1.2rem', opacity: 0.8 }}>Specializing in Scalable Agricultural & HealthcarePlus Solutions</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build responsive web applications, mobile apps, and scalable digital ecosystems. Currently pursuing Computer Science at VIT Bhopal (4th Year) with a focus on real-world product engineering.
          </motion.p>

          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <FiDownload />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;