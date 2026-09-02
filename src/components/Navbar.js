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

      <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <i className={isMobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>

      <nav className={`nav-menu ${isMobileOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#summary" onClick={closeMenu}>Summary</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" className="nav-contact-btn" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;