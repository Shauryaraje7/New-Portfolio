// src/components/Skills/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiSmartphone, FiCpu } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiCode />,
    skills: ['React', 'Next.js', 'Typescript', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    title: 'Backend & ERP',
    icon: <FiServer />,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'ERP Systems', 'Supabase']
  },
  {
    title: 'Mobile & Cross-platform',
    icon: <FiSmartphone />,
    skills: ['React Native', 'Expo Router', 'Mobile UI/UX', 'Cross-platform Deployment']
  },
  {
    title: 'AI & Cloud',
    icon: <FiCpu />,
    skills: ['AI Model Integration', 'OpenAI API', 'Git', 'Vercel', 'Firebase']
  }
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
          <p className="section-desc">A summary of my core competencies across web, mobile, and backend development.</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;