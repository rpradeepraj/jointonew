import React from 'react';

export default function GithubCalendar({ selectedYear, activeTotal, calendarLoading, weeks }) {
  return (
    <div className="github-contrib-card">
      <h3 className="github-contrib-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        {calendarLoading ? "Loading graph..." : `${activeTotal} Contributions in ${selectedYear}`}
      </h3>
      
      {/* Render the custom year calendar */}
      <div className="github-calendar-board" style={{ position: 'relative' }}>
        {calendarLoading && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(18, 15, 33, 0.7)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', zIndex: 10 }}>
            <div className="spinner" style={{ borderTopColor: 'var(--color-primary)', width: '28px', height: '28px' }}></div>
          </div>
        )}
        <div className="github-calendar-months">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
        <div className="github-calendar-grid">
          <div className="github-calendar-days-labels">
            <span>Mon</span><span>Wed</span><span>Fri</span>
          </div>
          <div className="github-calendar-weeks-container">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="github-calendar-column">
                {week.map((day, dIdx) => (
                  day.placeholder ? (
                    <div 
                      key={dIdx} 
                      className="github-calendar-square placeholder"
                      style={{ opacity: 0, pointerEvents: 'none' }}
                    />
                  ) : (
                    <div 
                      key={dIdx} 
                      className={`github-calendar-square level-${day.level}`}
                      title={`${day.count || "No"} contributions on ${day.date}`}
                    />
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
