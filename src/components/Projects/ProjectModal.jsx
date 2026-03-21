import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCpu, FiUsers, FiSettings } from 'react-icons/fi';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div 
            className="modal-content glass-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ color: '#2563EB' }}
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-icon">{project.icon}</div>
              <div className="modal-title-area">
                <span className="modal-tag">Project Deep Dive</span>
                <h2>{project.title}</h2>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3><FiCpu /> Technical Stack</h3>
                <div className="modal-tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="modal-tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3><FiSettings /> How it Works</h3>
                <p>{project.howItWorks}</p>
              </div>

              <div className="modal-section">
                <h3><FiUsers /> Target Users & Impact</h3>
                <ul className="modal-users-list">
                  {project.users.map((user, i) => (
                    <li key={i}>{user}</li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
