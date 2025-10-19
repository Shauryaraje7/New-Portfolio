import React from 'react';
import './Experience.css';
import { FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Notion Community VIT Bhopal",
      logo: "NC",
      position: "Technical Lead",
      period: "Jul 2025 - Present",
      duration: "4 mos",
      location: "Hybrid",
      type: "Part-time",
      description: [
        "Leading the technical team in developing and maintaining the community platform",
        "Mentoring junior developers and conducting technical workshops",
        "Architecting scalable solutions for community growth and engagement"
      ],
      skills: ["React", "Node.js", "MongoDB", "Team Leadership", "System Design"],
      previousRoles: [
        {
          position: "Tech Co-Lead",
          period: "Nov 2024 - Jul 2025"
        },
        {
          position: "Tech Team Member",
          period: "Aug 2024 - Nov 2024"
        }
      ]
    },
    {
      id: 2,
      company: "SmartFlows",
      logo: "SF",
      position: "Web Developer",
      period: "Jul 2025 - Present",
      duration: "4 mos",
      location: "Remote",
      type: "Internship",
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
      period: "Jul 2025 – Present ",
      duration: "1 yr 3 mos",
      location: "Hybrid",
      type: "Part-time",
      description: [
        "Contributing to technical projects and initiatives for the Entrepreneurship Cell",
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
            My professional journey and growth
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="card-header">
                <div className="company-logo">
                  {exp.logo}
                </div>
                <div className="company-main">
                  <div className="company-top">
                    <h3 className="company-name">{exp.company}</h3>
                    {exp.website && (
                      <a href={`https://${exp.website}`} className="website-link" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  <div className="position-info">
                    <span className="position">{exp.position}</span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                </div>
              </div>

              <div className="card-details">
                <div className="detail-row">
                  <div className="detail-group">
                    <FaCalendar className="detail-icon" />
                    <span>{exp.period}</span>
                    <span className="duration">• {exp.duration}</span>
                  </div>
                  <div className="detail-group">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="card-description">
                <ul>
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {exp.previousRoles && (
                <div className="previous-roles">
                  <div className="roles-header">
                    <FaBriefcase className="roles-icon" />
                    <span>Career Progression</span>
                  </div>
                  <div className="roles-list">
                    {exp.previousRoles.map((role, idx) => (
                      <div key={idx} className="role-item">
                        <div className="role-dot"></div>
                        <div className="role-info">
                          <span className="role-position">{role.position}</span>
                          <span className="role-period">{role.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="card-skills">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-footer">
          <div className="career-highlight">
            <h4>Career Journey</h4>
            <p>
              From starting as a Tech Team Member to leading technical teams, 
              I've consistently grown my skills while contributing to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;