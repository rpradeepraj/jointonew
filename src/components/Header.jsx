import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import '../features/navigation/navigation.css';

export default function Header({ activeTab, setActiveTab, profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { resumeUrl } = portfolioData.personalInfo;
  
  // Use live profile name if available, otherwise static name
  const name = profile && profile.name ? profile.name : portfolioData.personalInfo.name;

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

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extract firstName and lastName from full name
  const nameParts = name.split(' ');
  const firstName = nameParts[0] || 'PRADEEP';
  const lastName = nameParts.slice(1).join(' ') || 'RAJ';

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container header-container">
          {activeTab === 'dev' ? (
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleTabClick('home'); }}>
              <span className="logo-glow">{firstName}</span> {lastName}
            </a>
          ) : (
            <div className="logo-placeholder" style={{ width: '150px' }}></div>
          )}
          <nav id="nav-menu">
            <ul>
              <li>
                <a 
                  href="#" 
                  className={`nav-link ${activeTab === 'home' ? 'active-tab' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleTabClick('home'); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`nav-link ${activeTab === 'product' ? 'active-tab' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleTabClick('product'); }}
                >
                  Product
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`nav-link ${activeTab === 'learning' ? 'active-tab' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleTabClick('learning'); }}
                >
                  Learning
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`nav-link ${activeTab === 'github' ? 'active-tab' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleTabClick('github'); }}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={`nav-link nav-highlight ${activeTab === 'dev' ? 'active-tab' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleTabClick('dev'); }}
                >
                  Dev
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            {activeTab === 'dev' && (
              <a href={resumeUrl} download={resumeUrl} className="btn btn-secondary btn-small">
                <i data-lucide="download"></i> Resume
              </a>
            )}
            <button id="mobile-nav-toggle" aria-label="Toggle navigation menu" onClick={toggleMenu}>
              <i data-lucide={menuActive ? 'x' : 'menu'}></i>
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuActive ? 'active' : ''}`}>
        <ul>
          <li>
            <a 
              href="#" 
              className={`mobile-link ${activeTab === 'home' ? 'active-tab' : ''}`}
              onClick={(e) => { e.preventDefault(); handleTabClick('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={`mobile-link ${activeTab === 'product' ? 'active-tab' : ''}`}
              onClick={(e) => { e.preventDefault(); handleTabClick('product'); }}
            >
              Product
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={`mobile-link ${activeTab === 'learning' ? 'active-tab' : ''}`}
              onClick={(e) => { e.preventDefault(); handleTabClick('learning'); }}
            >
              Learning
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={`mobile-link ${activeTab === 'github' ? 'active-tab' : ''}`}
              onClick={(e) => { e.preventDefault(); handleTabClick('github'); }}
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={`mobile-link mobile-highlight ${activeTab === 'dev' ? 'active-tab' : ''}`}
              onClick={(e) => { e.preventDefault(); handleTabClick('dev'); }}
            >
              Dev
            </a>
          </li>
          {activeTab === 'dev' && (
            <li>
              <a href={resumeUrl} download={resumeUrl} className="btn btn-secondary btn-full mt-4" onClick={closeMenu}>
                <i data-lucide="download"></i> Download Resume
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
