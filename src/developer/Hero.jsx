import React, { useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import '../features/hero/hero.css';

export default function Hero({ profile }) {
  const staticInfo = portfolioData.personalInfo;
  
  // Bind name and bio dynamically to live GitHub profile
  const name = profile && profile.name ? profile.name : staticInfo.name;
  const bio = profile && profile.bio ? profile.bio : staticInfo.bio;
  
  // Always use the local profile.jpg with correct prefix depending on env
  const isProd = import.meta.env.PROD;
  const profileImg = isProd ? '/jointonew/profile.jpg' : '/profile.jpg';
  
  const { resumeUrl } = staticInfo;

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge badge-indigo">Available for Freelance & Remote Work</span>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{name}</span>
          </h1>
          <h2 className="hero-subtitle">Senior Software Engineer & Founding Developer</h2>
          <p className="hero-desc">{bio}</p>
          <div className="hero-actions">
            <a href="#develop-app" className="btn btn-primary">
              <i data-lucide="rocket"></i> Develop Your Application
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i data-lucide="mail"></i> Get In Touch
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">6+</span>
              <span className="stat-lbl">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-lbl">Major Systems Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">2+</span>
              <span className="stat-lbl">State Governments Served</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="profile-card-wrapper">
            <div className="profile-card">
              <img src={profileImg} alt={name} className="profile-img" />
              <div className="status-glow"></div>
            </div>
            <div className="floating-badge badge-top-right">
              <i data-lucide="smartphone" className="icon-cyan"></i>
              <span>React Native Expert</span>
            </div>
            <div className="floating-badge badge-bottom-left">
              <i data-lucide="atom" className="icon-purple"></i>
              <span>React Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
