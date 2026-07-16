import React from 'react';

export default function StoreHero({ t }) {
  return (
    <section className="store-hero">
      <div className="container">
        {/* Pulsing tagline */}
        <div className="store-hero-tag">
          <span className="pulse-dot"></span>
          {t("Chennai's Freshest Kitchen Partner")}
        </div>
        
        {/* Main Title with gradient highlights */}
        <h1 className="store-hero-title">
          Healthy · Fresh · <span>{t("Ready to Cook")}</span>
        </h1>
        
        {/* Supporting description */}
        <p className="store-hero-desc">
          {t("FSSAI-certified fresh cut fruits and vegetables. RO water washed, AC room processed, no preservatives. Delivered to your doorstep.")}
        </p>
        
        {/* Stars and Trusted families indicator */}
        <p className="store-hero-meta">
          <span className="store-stars">★ ★ ★ ★ ★</span>
          <span className="store-trusted-text">{t("Trusted by 500+ Chennai families")}</span>
        </p>
      </div>

      {/* Quality trust cards */}
      <div className="store-badges-grid container">
        <div className="store-badge-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
          <span className="store-badge-label">{t("FSSAI Certified")}</span>
        </div>
        <div className="store-badge-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>
          <span className="store-badge-label">{t("RO Water Washed")}</span>
        </div>
        <div className="store-badge-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
          <span className="store-badge-label">{t("Cold Chain Stored")}</span>
        </div>
        <div className="store-badge-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>
          <span className="store-badge-label">{t("AC Room Processed")}</span>
        </div>
      </div>
    </section>
  );
}
