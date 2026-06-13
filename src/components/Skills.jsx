import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import '../features/skills/skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(portfolioData.skillsData[0].id);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [activeTab]);

  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Technical Competence</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-tabs-container glass-card">
          <div className="skills-tabs-header">
            {portfolioData.skillsData.map((category) => (
              <button
                key={category.id}
                className={`skills-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <i data-lucide={category.icon}></i> {category.label}
              </button>
            ))}
          </div>

          <div className="skills-tab-content">
            {portfolioData.skillsData.map((category) => (
              <div
                key={category.id}
                className={`tab-pane ${activeTab === category.id ? 'active' : ''}`}
                id={category.id}
              >
                <div className="skills-grid">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-pill">
                      {skill.name} <span className="skill-lvl">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
