import React from 'react';

export default function Projects({ onSelectStore }) {
  return (
    <section id="projects" className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Featured Accomplishments</span>
          <h2 className="section-title">Freelance & Core Project Showcase</h2>
          <div className="title-underline"></div>
        </div>

        {/* Website Stack Overview Card */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3.5rem', border: '1px solid rgba(99, 102, 241, 0.15)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', textAlign: 'left' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="card-icon-wrapper circle-indigo" style={{ width: '42px', height: '42px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800' }}>Portfolio Website Overview</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                This portfolio is designed as a fully-connected dynamic application rather than a static site. 
                It integrates background workers, third-party contribution scrapers, and headless CMS integrations:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '700' }}>GitHub Data Sync</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                    Queries live repository languages, recent commit comments, and detailed contribution calendars for the last 5 years from GitHub APIs at runtime.
                  </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '700' }}>Google Sheet DBMS</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                    Employs Google Sheets as a database management system for real-time inventory updates with cache-busting refresh queries.
                  </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '700' }}>Premium UI Architecture</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                    Constructed using vanilla CSS layouts, visual mesh glows, glassmorphic dashboards, and custom responsive flexbox grids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          
          {/* Project 1: Pradeep Vegetables */}
          <div className="about-card glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div className="card-icon-wrapper circle-cyan" style={{ width: '48px', height: '48px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <span className="badge badge-indigo" style={{ fontSize: '0.72rem', textTransform: 'uppercase' }}>Freelance (Production)</span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Pradeep Vegetables E-Commerce</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', flexGrow: 1 }}>
              A live localized e-commerce marketplace built specifically for agricultural inventory management. 
              Fetches product details from Google Sheets, offers a Tamil/English translation interface, dynamic cart overlays, 
              and routes purchases instantly to the WhatsApp API checkout pipeline (+91 8428402482).
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '1.25rem 0' }}>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>React.js</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>Google Sheets</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>WhatsApp checkout</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>Tamil Translation</span>
            </div>

            <button 
              onClick={onSelectStore} 
              className="btn btn-primary btn-small"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h6v11c0 1.1-.9 2-2 2h-4v-3m-6 3H6c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4v3m3-3h3v18H3V3h10Z"/></svg>
              Launch Live Store
            </button>
          </div>

          {/* Project 2: Visual Site Planner */}
          <div className="about-card glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div className="card-icon-wrapper circle-purple" style={{ width: '48px', height: '48px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              </div>
              <span className="badge badge-emerald" style={{ fontSize: '0.72rem', textTransform: 'uppercase' }}>Open Source</span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Visual Site Security Planner</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', flexGrow: 1 }}>
              A high-precision geospatial layout planner for security engineers. 
              Implements drag-and-drop security camera overlays, field-of-view vector calculations, 
              interactive canvas coordinate systems, and automated excel spreadsheets material cost exports (BOM).
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '1.25rem 0' }}>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>GIS mapping</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>OpenLayers</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>Vector Math</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>ColdFusion ORM</span>
            </div>

            <a 
              href="https://github.com/rpradeepraj/cra-starter" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-small"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
              View Repository
            </a>
          </div>

          {/* Project 3: FlavorQuest & SaaS Starter */}
          <div className="about-card glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div className="card-icon-wrapper circle-indigo" style={{ width: '48px', height: '48px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <span className="badge badge-emerald" style={{ fontSize: '0.72rem', textTransform: 'uppercase' }}>Open Source</span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>FlavorQuest & SaaS Core</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', flexGrow: 1 }}>
              Full-stack TypeScript application templates. Renders complex client dashboards, 
              Cognito OAuth auth screens, Amplify serverless triggers, and modular UI layouts for building 
              high-performance web dashboards.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '1.25rem 0' }}>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>TypeScript</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>NextJS</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>AWS Amplify</span>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.72rem' }}>OAuth</span>
            </div>

            <a 
              href="https://github.com/rpradeepraj/FlavorQuest" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-small"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
              View Repository
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
