import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';


function PortfolioPage() {
    return ( 
        <div>
           <Navbar />
            <Hero />
          <About />
           <Skills />
           <Projects />
           <Contact /> 
           
        </div>
     );
}

export default PortfolioPage;