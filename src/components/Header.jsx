import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import '../features/navigation/navigation.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { name, resumeUrl } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // Extract firstName and lastName from full name
  const nameParts = name.split(' ');
  const firstName = nameParts[0] || 'PRADEEP';
  const lastName = nameParts.slice(1).join(' ') || 'RAJ';

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container header-container">
          <a href="#" className="logo" onClick={closeMenu}>
            <span className="logo-glow">{firstName}</span> {lastName}
          </a>
          <nav id="nav-menu">
            <ul>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#experience" className="nav-link">Experience</a></li>
              <li><a href="#develop-app" class="nav-link nav-highlight">Develop an App</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <a href={resumeUrl} download={resumeUrl} className="btn btn-secondary btn-small">
              <i data-lucide="download"></i> Resume
            </a>
            <button id="mobile-nav-toggle" aria-label="Toggle navigation menu" onClick={toggleMenu}>
              <i data-lucide={menuActive ? 'x' : 'menu'}></i>
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" className="mobile-link" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className="mobile-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="#experience" className="mobile-link" onClick={closeMenu}>Experience</a></li>
          <li><a href="#develop-app" className="mobile-link mobile-highlight" onClick={closeMenu}>Develop an App</a></li>
          <li><a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a></li>
          <li>
            <a href={resumeUrl} download={resumeUrl} className="btn btn-secondary btn-full mt-4" onClick={closeMenu}>
              <i data-lucide="download"></i> Download Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
