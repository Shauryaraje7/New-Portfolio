// src/components/Experience/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: "Founder & Full Stack Developer",
    company: "Liomonk",
    period: "2025 – Present",
    location: "Pune, India",
    description: [
      "Built web and mobile applications for real-world clients.",
      "Implemented AI model integrations to enhance application capabilities.",
      "Designed and maintained scalable full-stack architectures."
    ]
  },
  {
    role: "Technical Lead",
    company: "Notion Community",
    period: "Nov 2023 - Present",
    location: "Remote",
    description: [
      "Leading technical initiatives and community platform features.",
      "Managing integrations and ensuring platform stability.",
      "Collaborating with cross-functional teams to improve user engagement."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "SmartFlows",
    period: "Jan 2024 - June 2024",
    location: "Hybrid",
    description: [
      "Worked on the primary company website and internal tools.",
      "Implemented responsive designs and optimized frontend performance.",
      "Collaborated on backend integrations and database management."
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-card glass-card">
                <div className="experience-header">
                  <div className="exp-icon"><FiBriefcase /></div>
                  <div className="exp-title">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                </div>
                <div className="exp-content">
                <div className="exp-meta">
                  <span><FiCalendar /> {exp.period}</span>
                  <span><FiMapPin /> {exp.location}</span>
                </div>
                <ul className="exp-desc">
                  {exp.description.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;