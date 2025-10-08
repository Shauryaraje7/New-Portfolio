// src/components/Skills/Skills.jsx
import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'React', level: 85, icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', level: 90, icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', level: 75, icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Node.js', level: 80, icon: <FaNodeJs />, color: '#339933' },
    { name: 'Next.js', level: 70, icon: <SiNextdotjs />, color: '#000000' },
    { name: 'Express.js', level: 75, icon: <SiExpress />, color: '#000000' },
    { name: 'MongoDB', level: 70, icon: <SiMongodb />, color: '#47A248' },
    { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Git', level: 80, icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Figma', level: 65, icon: <FaFigma />, color: '#F24E1E' },
    { name: 'Firebase', level: 60, icon: <SiFirebase />, color: '#FFCA28' }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Leadership', level: 85 },
    { name: 'Communication', level: 88 },
    { name: 'Project Management', level: 75 },
    { name: 'Adaptability', level: 92 },
    { name: 'Mentoring', level: 80 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="skills-content">
          <div className="technical-skills">
            <h3 className="skills-category-title">Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-card" style={{ '--skill-color': skill.color }}>
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3 className="skills-category-title">Professional Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill) => (
                <div key={skill.name} className="soft-skill-item">
                  <div className="soft-skill-info">
                    <span className="soft-skill-name">{skill.name}</span>
                    <span className="soft-skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="soft-skill-bar">
                    <div 
                      className="soft-skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-footer">
          <div className="learning-next">
            <h4>Currently Learning & Exploring</h4>
            <div className="learning-tags">
              <span className="learning-tag">AWS</span>
              <span className="learning-tag">Docker</span>
              <span className="learning-tag">GraphQL</span>
              <span className="learning-tag">Python</span>
              <span className="learning-tag">AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;