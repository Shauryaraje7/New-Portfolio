import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import ExperienceModal from './ExperienceModal';
import './Experience.css';

const experiences = [
  {
    role: "Founder & Developer",
    company: "Liomonk",
    period: "2024 – Present",
    location: "Pune, India",
    achievements: [
      "Identified market gaps in agricultural and healthcare sectors, leading to the development of two flagship digital ecosystems.",
      "Architected and delivered end-to-end full-stack solutions, including Web, Mobile, and AI-driven background services.",
      "Managed client relationships and project lifecycles for real-world digital transformations.",
      "Integrated advanced RAG (Retrieval-Augmented Generation) systems and automated auditing engines into production environments.",
      "Optimized cloud deployments for high availability and performance across multiple platforms."
    ],
    tech: ["React", "React Native", "Node.js", "FastAPI", "PostgreSQL", "AWS"]
  },
  {
    role: "Technical Lead",
    company: "Notion Community",
    period: "Nov 2023 - Present",
    location: "Remote",
    achievements: [
      "Leading a community of 5000+ members, driving technical engagement and resource modernization.",
      "Architected the community engagement platform using Next.js and Firebase for real-time collaboration.",
      "Mentored junior developers and student enthusiasts on modern full-stack development best practices.",
      "Coordinated with cross-functional teams to organize high-impact technical events and workshops."
    ],
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"]
  },
  {
    role: "Web Developer Intern",
    company: "SmartFlows",
    period: "Jan 2024 - June 2024",
    location: "Hybrid",
    achievements: [
      "Contributed to the development of high-performance corporate web presences optimized for technical credibility and lead generation.",
      "Implemented complex UI animations and interactive components using Framer Motion.",
      "Streamlined backend data pipelines, ensuring efficient synchronization between front-facing sites and internal CRM tools.",
      "Participated in agile development cycles, delivering weekly features and performance optimizations."
    ],
    tech: ["React", "JavaScript", "Framer Motion", "REST APIs"]
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp) => {
    setSelectedExp(exp);
    setIsModalOpen(true);
  };

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openModal(exp)}
              style={{ cursor: 'pointer' }}
            >
              <div className="experience-card glass-card">
                <div className="experience-header">
                  <div className="exp-icon"><FiBriefcase /></div>
                  <div className="exp-title">
                    <span className="exp-label">{exp.company}</span>
                    <h3>{exp.role}</h3>
                  </div>
                </div>
                <div className="exp-footer">
                   <div className="exp-meta">
                    <span><FiCalendar /> {exp.period}</span>
                    <span><FiMapPin /> {exp.location}</span>
                  </div>
                  <span className="view-details">Click to View Details →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ExperienceModal 
        experience={selectedExp} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Experience;