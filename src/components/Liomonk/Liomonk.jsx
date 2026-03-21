// src/components/Liomonk/Liomonk.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiLayers, FiCpu, FiGlobe } from 'react-icons/fi';
import './Liomonk.css';

const services = [
  { icon: <FiGlobe />, title: 'Web Apps', desc: 'Scalable, high-performance web applications.' },
  { icon: <FiLayers />, title: 'Mobile Apps', desc: 'Native-feel Flutter & React Native apps.' },
  { icon: <FiCpu />, title: 'AI Solutions', desc: 'Custom LLM integrations & AI automation.' },
];

const Liomonk = () => {
  return (
    <section className="liomonk section" id="liomonk">
      <div className="container">
        <motion.div 
          className="liomonk-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag"><FiZap /> Startup Initiative</span>
          <h2 className="section-title">About <span className="text-gradient">Liomonk</span></h2>
          <p className="section-desc">Liomonk is a startup where I work on real-world projects across web, mobile, and AI integration.</p>
        </motion.div>

        <div className="liomonk-content glass-card" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Through Liomonk, I have gained valuable experience in understanding client requirements, 
            designing scalable architectures, and delivering end-to-end digital products. This venture 
            serves as my practical laboratory for applying engineering principles to real-world challenges.
          </p>
          <div className="services-list" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <span className="service-tag">Web Development</span>
            <span className="service-tag">Mobile Apps</span>
            <span className="service-tag">AI Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Liomonk;
