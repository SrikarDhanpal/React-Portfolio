import React, { useState } from 'react';

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="navbar-header">
      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-text">SRIKAR</span> DHANPAL
      </a>

      <button className="mobile-toggle" type="button" onClick={toggleMenu} aria-label={isMobileOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileOpen} aria-controls="primary-navigation">
        <i className={isMobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>

      <nav id="primary-navigation" className={`nav-menu ${isMobileOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#summary" onClick={closeMenu}>Summary</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#resume" onClick={closeMenu}>Resume</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" className="nav-contact-btn" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
