import React, { useEffect } from 'react';
import '../features/about/about.css';

export default function About() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Professional Overview</span>
          <h2 className="section-title">My Journey & Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-card glass-card">
            <div className="card-icon-wrapper circle-indigo">
              <i data-lucide="code-2"></i>
            </div>
            <h3>Frontend & Mobile Leader</h3>
            <p>
              As a founding engineer, I have established core frontend architectures and delivery workflows. 
              I specialize in React.js and TypeScript for powerful web dashboards, and React Native for production-ready mobile apps. 
              My work incorporates mapping (OpenLayers, Mapbox), complex state (Redux), and AI capabilities.
            </p>
          </div>

          <div className="about-card glass-card">
            <div className="card-icon-wrapper circle-cyan">
              <i data-lucide="server"></i>
            </div>
            <h3>Enterprise Backend & Database</h3>
            <p>
              Leveraging my years of technical experience, I hold deep capabilities in Adobe ColdFusion (CFML). 
              I design components (CFCs), manage complex scheduling, implement ORM databases, and build secure 
              backend API layers that maintain 99%+ uptime SLAs.
            </p>
          </div>
          
          <div className="about-card glass-card">
            <div className="card-icon-wrapper circle-purple">
              <i data-lucide="map-pin"></i>
            </div>
            <h3>Enterprise-Scale Impact</h3>
            <p>
              I have engineered mission-critical digital systems and large-scale platforms. 
              These systems process spatial data, map complex boundary metrics, and manage high-volume transactional logs 
              used by hundreds of thousands of active users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
