// src/components/Experience/ExperienceModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import './ExperienceModal.css';

const ExperienceModal = ({ experience, isOpen, onClose }) => {
  if (!experience) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="exp-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="exp-modal-content glass-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="exp-modal-close" onClick={onClose}>
              <FiX />
            </button>

            <div className="exp-modal-header">
              <div className="exp-modal-icon">
                <FiBriefcase />
              </div>
              <div className="exp-modal-title-area">
                <span className="exp-modal-company">{experience.company}</span>
                <h2>{experience.role}</h2>
              </div>
            </div>

            <div className="exp-modal-meta">
              <div className="meta-item">
                <FiCalendar />
                <span>{experience.period}</span>
              </div>
              <div className="meta-item">
                <FiMapPin />
                <span>{experience.location}</span>
              </div>
            </div>

            <div className="exp-modal-body">
              <div className="exp-modal-section">
                <h3>What I Accomplished</h3>
                <ul className="accomplishments-list">
                  {experience.achievements.map((item, index) => (
                    <li key={index}>
                      <FiCheckCircle className="check-icon" />
                      <div>{item}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {experience.tech && (
                <div className="exp-modal-section">
                  <h3>Technologies Used</h3>
                  <div className="exp-modal-tech">
                    {experience.tech.map((t, i) => (
                      <span key={i} className="exp-modal-tech-chip">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceModal;
