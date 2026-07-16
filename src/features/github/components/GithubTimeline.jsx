import React from 'react';

export default function GithubTimeline({ 
  selectedYear, 
  activeFilter, 
  setActiveFilter, 
  activitiesLoading, 
  filteredActivities 
}) {
  return (
    <div className="github-contrib-card" style={{ marginBottom: '2.5rem' }}>
      <h3 className="github-contrib-title" style={{ marginBottom: '2rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9"/></svg>
        Detailed Commit & Activity History ({selectedYear})
      </h3>

      {/* Activity Filter Pills */}
      <div className="github-filter-pills">
        <button 
          className={`github-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Activities
        </button>
        <button 
          className={`github-filter-pill ${activeFilter === 'commit' ? 'active' : ''}`}
          onClick={() => setActiveFilter('commit')}
        >
          Commits
        </button>
        <button 
          className={`github-filter-pill ${activeFilter === 'review' ? 'active' : ''}`}
          onClick={() => setActiveFilter('review')}
        >
          PR Reviews
        </button>
        <button 
          className={`github-filter-pill ${activeFilter === 'collab' ? 'active' : ''}`}
          onClick={() => setActiveFilter('collab')}
        >
          Collaborations
        </button>
      </div>

      {/* Timeline Listing */}
      <div className="github-timeline">
        {activitiesLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div className="spinner" style={{ borderTopColor: 'var(--color-primary)', margin: '0 auto 1rem' }}></div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading live activity logs...</p>
          </div>
        ) : filteredActivities.length > 0 ? (
          filteredActivities.map((act, index) => (
            <div className="github-timeline-item" key={index}>
              {/* Timeline Icon */}
              <div className={`github-timeline-icon ${act.type}`}>
                {act.type === 'commit' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6H6M18 12H6M18 18H6"/></svg>
                )}
                {act.type === 'review' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
                {act.type === 'collab' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                )}
              </div>

              {/* Timeline Card details */}
              <div className="github-timeline-content">
                <div className="github-timeline-header">
                  <div>
                    <span className="github-timeline-project">{act.project}</span>
                    <span className={`github-timeline-badge ${act.type}`}>
                      {act.type === 'collab' ? 'Collaboration' : act.type === 'review' ? 'PR Review' : 'Commit'}
                    </span>
                  </div>
                  <span className="github-timeline-date">{act.date}</span>
                </div>
                <p className="github-timeline-desc">{act.desc}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0' }}>
            No activities found for this filter in {selectedYear}.
          </p>
        )}
      </div>
    </div>
  );
}
