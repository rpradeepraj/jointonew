import React, { useEffect } from 'react';

export default function ComingSoon() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-card glass-card">
        <div className="pulsing-glow"></div>
        <h2 className="coming-soon-brand">JOIN2NEW</h2>
        <h1 className="coming-soon-title">Coming Soon</h1>
        <p className="coming-soon-subtitle">
          We are crafting a state-of-the-art platform for modern software engineering, high-performance web systems, and creative tools. Something remarkable is on its way.
        </p>

        <div className="launch-progress-container">
          <div className="launch-progress-bar-bg">
            <div 
              className="launch-progress-bar" 
              style={{ width: '70%' }}
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span className="launch-percentage">70% Engineered</span>
        </div>
      </div>
    </div>
  );
}
