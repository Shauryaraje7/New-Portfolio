import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
  ];

  const softSkills = [
    'Problem Solving',
    'Team Leadership',
    'Communication',
    'Project Management',
    'Adaptability',
    'Mentoring'
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
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3 className="skills-category-title">Professional Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill) => (
                <div key={skill} className="soft-skill-item">
                  <span className="soft-skill-name">{skill}</span>
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