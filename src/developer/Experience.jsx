import React, { useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import '../features/experience/experience.css';

export default function Experience() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Professional Experience</h2>
          <div className="title-underline"></div>
        </div>

        <div className="timeline">
          {portfolioData.experienceData.map((job, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{job.date}</div>
              <div className="timeline-content glass-card">
                <span className="job-company">{job.company}</span>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-desc">{job.desc}</p>
                <ul className="job-bullets">
                  {job.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>{bullet}</li>
                  ))}
                </ul>
                <div className="job-tags">
                  {job.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
