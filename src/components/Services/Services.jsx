// src/components/Services/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCpu, FiMonitor } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: <FiMonitor />,
    title: 'Web Development',
    desc: 'High-performance, SEO-optimized web applications built with modern frameworks like React and Next.js.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile App Development',
    desc: 'Premium mobile experiences for iOS and Android using Flutter and React Native, tailored for scalability.',
  },
  {
    icon: <FiCpu />,
    title: 'AI Integration',
    desc: 'Integrating powerful AI models like OpenAI and Anthropic into existing applications to enhance functionality.',
  },
  {
    icon: <FiCode />,
    title: 'Custom CRM / Software',
    desc: 'Bespoke software solutions and CRM systems designed to streamline your business operations and workflow.',
  },
];

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My <span className="text-gradient">Services</span></h2>
          <p className="section-desc">Transforming complex ideas into powerful digital products.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-icon-large">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
