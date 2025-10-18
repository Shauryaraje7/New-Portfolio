// src/App.jsx
import React from 'react';
import './styles/globals.css';
import './App.css'; // Make sure this is imported
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Particles from './components/Particles/Particles';

function App() {
  return (
    <div className="App">
      {/* Global Particle Background - FIXED POSITION */}
      <div className="global-particles">
        <Particles
          particleCount={200}
          particleColors={['#00ff88', '#0099ff', '#ffffff']}
          moveParticlesOnHover={true}
          className="website-particles"
        />
      </div>
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;