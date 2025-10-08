// src/components/Experience/Experience.jsx
import React from 'react';
import './Experience.css';
import { FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Notion Community VIT Bhopal",
      logo: "NC",
      position: "Technical Lead",
      period: "Jul 2025 - Present · 4 mos",
      location: "Hybrid",
      type: "Part-time",
      duration: "1 yr 3 mos total",
      description: [
        "Leading the technical team in developing and maintaining the community platform",
        "Mentoring junior developers and conducting technical workshops",
        "Architecting scalable solutions for community growth and engagement"
      ],
      skills: ["React", "Node.js", "MongoDB", "Team Leadership", "System Design"],
      previousRoles: [
        {
          position: "Tech Co-Lead",
          period: "Nov 2024 - Jul 2025 · 9 mos"
        },
        {
          position: "Tech Team Member",
          period: "Aug 2024 - Nov 2024 · 4 mos"
        }
      ]
    },
    {
      id: 2,
      company: "SmartFlows",
      logo: "SF",
      position: "Web Developer",
      period: "Jul 2025 - Present · 4 mos",
      location: "Remote",
      type: "Internship",
      duration: "4 mos",
      description: [
        "Developed and maintained the company website using modern web technologies",
        "Implemented responsive designs and optimized website performance",
        "Collaborated with the design team to create seamless user experiences"
      ],
      skills: ["React", "JavaScript", "CSS", "Git", "Responsive Design"],
      website: "smartflows.in"
    },
    {
      id: 3,
      company: "Ecell, VIT Bhopal",
      logo: "EC",
      position: "Tech Team Member",
      period: "Aug 2024 - Present · 1 yr 3 mos",
      location: "Hybrid",
      type: "Part-time",
      duration: "1 yr 3 mos",
      description: [
        "Contributing to technical projects and initiatives for the entrepreneurship cell",
        "Developing web solutions to support startup ecosystem and events",
        "Collaborating with cross-functional teams on innovation projects"
      ],
      skills: ["Web Development", "Project Management", "Team Collaboration"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            My journey through tech roles and responsibilities
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo">
                    {exp.logo}
                  </div>
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="position-meta">
                      <span className="position">{exp.position}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>
                  {exp.website && (
                    <a href={`https://${exp.website}`} className="website-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

                <div className="experience-details">
                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span>{exp.period}</span>
                    <span className="duration-badge">{exp.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="experience-description">
                  <ul>
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {exp.previousRoles && (
                  <div className="previous-roles">
                    <h4>Previous Roles</h4>
                    {exp.previousRoles.map((role, idx) => (
                      <div key={idx} className="previous-role">
                        <span className="role-position">{role.position}</span>
                        <span className="role-period">{role.period}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-footer">
          <div className="career-highlight">
            <h4>Career Journey</h4>
            <p>
              From starting as a Tech Team Member to leading technical teams, 
              I've consistently grown my skills while contributing to meaningful projects 
              and mentoring fellow developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;