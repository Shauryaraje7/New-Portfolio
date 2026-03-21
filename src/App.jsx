// src/App.jsx
import React from 'react';
import './styles/globals.css';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Particles from './components/Particles/Particles';

function App() {
  return (
    <div className="App">
      <div className="global-particles">
        <Particles
          particleCount={150}
          particleColors={['#2563EB', '#1E40AF', '#64748B']}
          moveParticlesOnHover={true}
          className="website-particles"
        />
      </div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;