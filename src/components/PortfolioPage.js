import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function PortfolioPage() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default PortfolioPage;