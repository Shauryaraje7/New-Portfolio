// src/components/SocialProof/SocialProof.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './SocialProof.css';

const stats = [
  { label: 'Projects Completed', value: '20+' },
  { label: 'Real-world Deployments', value: '10+' },
  { label: 'Technical Roles', value: '4' },
  { label: 'Community Members', value: '5000+' },
];

const SocialProof = () => {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="stat-value text-gradient">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
