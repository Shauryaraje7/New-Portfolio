// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiGlobe, FiSmartphone } from 'react-icons/fi';
import ProjectModal from './ProjectModal';
import './Projects.css';

const projectData = [
  {
    title: "HealthcarePlus",
    description: "A state-of-the-art medical ecosystem integrating AI-driven diagnostics, patient management, and a unique wellness rewards system.",
    tech: ["React 19", "Expo", "FastAPI", "PostgreSQL", "Claude 3.5"],
    details: "HealthcarePlus bridges the gap between patients, providers, and wellness partners. It leverages AI for OCR-based onboarding and a RAG-based Health Coach for context-aware medical advice.",
    howItWorks: "Features a microservice-lite architecture with a Node.js/Express main logic backend and a specialized FastAPI AI service using Claude 3.5 Sonnet Vision via AWS Bedrock. Includes an automated points ecosystem for health gamification.",
    users: ["Patients (AI Coach & Wallet)", "Doctors (SOAP Notes)", "NGOs (Community Support)", "Insurance & Wellness Partners"],
    icon: <FiSmartphone />
  },
  {
    title: "AgroConnect",
    description: "A comprehensive Agriculture Management System for tracking crop lifecycles, and ensuring compliance through automated audits.",
    tech: ["React Native", "Expo Router", "FastAPI", "PostgreSQL", "AWS S3"],
    details: "A multi-platform solution for farm operations, crop lifecycle tracking, and a service marketplace. It features a robust compliance engine for standardized agricultural auditing.",
    howItWorks: "Built with a high-performance FastAPI backend and an Expo-based cross-platform frontend. Includes a dynamic Audit Engine with weighted scoring and automated PDF report generation for certifications.",
    users: ["Farmers (Org Admins)", "FSPs (Service Providers)", "Field Supervisors", "System Admins"],
    icon: <FiGlobe />
  },
  {
    title: "AI-Powered Invoice SaaS",
    description: "Automated billing platform featuring AI-driven data extraction from invoices and a comprehensive financial reporting dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "OpenAI API"],
    details: "A cloud-based SaaS that streamlines accounts payable workflows. It leverages LLMs to process unstructured invoice data into structured financial records.",
    howItWorks: "Integrates OpenAI's vision and text models to parse uploaded PDF/image invoices. Extracted data is validated against user rules and exported to high-performance PostgreSQL tables for analytics.",
    users: ["Small Business Owners", "Accountants", "Financial Analysts"],
    icon: <FiCpu />
  },
  {
    title: "Notion Community Hub",
    description: "Engagement platform for a 5000+ member community, facilitating event management, resource sharing, and member interactions.",
    tech: ["Next.js", "Typescript", "MongoDB", "Firebase"],
    details: "A custom community management platform for student developers and tech enthusiasts. It centralizes events, certifications, and resources.",
    howItWorks: "Built with Next.js for SSR SEO benefits. Uses Firebase for real-time chat and notifications, with MongoDB handling the complex relational data of community hierarchies.",
    users: ["Community Members", "Notion Tech Leads", "Event Organizers"],
    icon: <FiGlobe />
  },
  {
    title: "SmartFlows Corporate Site",
    description: "High-performance corporate web presence with optimized asset delivery and integrated client management tools.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    details: "A premium corporate website designed for high conversion and technical credibility. Features custom micro-animations and a bespoke CMS.",
    howItWorks: "Leverages Next.js static generation (SSG) for sub-second load times. Includes a lead generation pipeline that connects directly to a custom-built CRM backend.",
    users: ["Potential Corporate Clients", "SmartFlows Sales Team"],
    icon: <FiGlobe />
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        </motion.div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-card"
              onClick={() => openModal(project)}
              style={{ cursor: 'pointer' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
              </div>
              
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
