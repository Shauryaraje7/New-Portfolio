// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaServer } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Notion Community Platform",
      description: "A comprehensive platform for the Notion Community at VIT Bhopal, featuring event management, member engagement, and resource sharing capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      category: "fullstack",
      githubLink: "https://github.com",
      liveLink: "https://notion-community.example.com",
      features: ["User Authentication", "Event Management", "Real-time Chat", "Resource Library"],
      status: "completed"
    },
    {
      id: 2,
      title: "SmartFlows Website",
      description: "Official company website for SmartFlows, featuring modern design, responsive layout, and optimized performance for lead generation.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "JavaScript", "CSS3", "Git", "Netlify"],
      category: "frontend",
      githubLink: "https://github.com",
      liveLink: "https://smartflows.in",
      features: ["Responsive Design", "Performance Optimized", "SEO Friendly", "Contact Forms"],
      status: "completed"
    },
    {
      id: 3,
      title: "E-Cell Portal",
      description: "A portal for the Entrepreneurship Cell at VIT Bhopal to manage events, startups, and community interactions with admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Firebase", "Chakra UI"],
      category: "fullstack",
      githubLink: "https://github.com",
      liveLink: "https://ecell-vitb.example.com",
      features: ["Admin Dashboard", "Event Registration", "Startup Database", "Analytics"],
      status: "in-progress"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing my projects, skills, and experience with dark theme and smooth animations.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion"],
      category: "frontend",
      githubLink: "https://github.com",
      liveLink: "https://shaurya.example.com",
      features: ["Dark Theme", "Responsive", "Smooth Animations", "Contact Form"],
      status: "completed"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: <FaCode /> },
    { key: 'frontend', label: 'Frontend', icon: <FaMobile /> },
    { key: 'fullstack', label: 'Full Stack', icon: <FaServer /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project Image</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>
                {project.status === 'in-progress' && (
                  <div className="project-badge ongoing">
                    In Progress
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for more projects and contributions</p>
          <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;