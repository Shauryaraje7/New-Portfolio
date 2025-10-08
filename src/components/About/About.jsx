// src/components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Building Digital Solutions That Matter</h3>
              <p>
                I'm a passionate web developer from Pune with a love for creating 
                innovative digital experiences. My journey in tech started with curiosity 
                and has evolved into a career focused on building solutions that make a difference.
              </p>
            </div>

            <div className="about-philosophy">
              <h4>My Technical Philosophy</h4>
              <p>
                I believe in writing clean, maintainable code that not only works 
                but also tells a story. Every project is an opportunity to learn, 
                innovate, and push boundaries while keeping user experience at the forefront.
              </p>
            </div>

            <div className="about-approach">
              <h4>My Approach</h4>
              <div className="approach-points">
                <div className="approach-point">
                  <span className="point-number">01</span>
                  <div>
                    <h5>User-Centric Design</h5>
                    <p>Creating interfaces that are intuitive and enjoyable to use</p>
                  </div>
                </div>
                <div className="approach-point">
                  <span className="point-number">02</span>
                  <div>
                    <h5>Performance First</h5>
                    <p>Optimizing for speed and efficiency in every implementation</p>
                  </div>
                </div>
                <div className="approach-point">
                  <span className="point-number">03</span>
                  <div>
                    <h5>Continuous Learning</h5>
                    <p>Staying updated with the latest technologies and best practices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-passion">
              <h4>Beyond Coding</h4>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community. I'm passionate about mentoring and 
                helping others grow in their tech journey.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Learning</div>
              <div className="stat-desc">Dedicated to mastering web technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Built</div>
              <div className="stat-desc">From concept to deployment</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Tech Roles</div>
              <div className="stat-desc">Diverse experience across teams</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Passionate</div>
              <div className="stat-desc">About creating amazing digital experiences</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;