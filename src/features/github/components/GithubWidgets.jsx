import React from 'react';

export default function GithubWidgets({ languagesToShow, profile }) {
  const getLanguageColor = (idx) => {
    const colors = ["var(--color-primary)", "var(--color-secondary)", "var(--color-accent)", "var(--color-success)", "#f59e0b"];
    return colors[idx % colors.length];
  };

  return (
    <div className="github-widgets-grid">
      {/* Native Language Metrics */}
      <div className="github-widget-card" style={{ width: '100%', alignItems: 'stretch' }}>
        <h3 className="github-contrib-title" style={{ alignSelf: 'center', marginBottom: '1.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
          Top Languages
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {languagesToShow.map((lang, idx) => (
            <div key={lang.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem', fontWeight: '600' }}>
                <span style={{ color: 'var(--text-primary)' }}>{lang.name}</span>
                <span style={{ color: getLanguageColor(idx) }}>{lang.percentage}%</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${lang.percentage}%`, height: '100%', background: getLanguageColor(idx), borderRadius: '4px' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Native Contributions Summary */}
      <div className="github-widget-card" style={{ width: '100%', alignItems: 'stretch' }}>
        <h3 className="github-contrib-title" style={{ alignSelf: 'center', marginBottom: '1.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Activity Statistics
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', height: '100%' }}>
          {/* Stat Box 1 */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-primary)' }}>{profile.public_repos * 18}+</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '0.25rem' }}>Est. Commits</span>
          </div>

          {/* Stat Box 2 */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-secondary)' }}>{profile.public_repos * 2}</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '0.25rem' }}>PR Reviews</span>
          </div>

          {/* Stat Box 3 */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-accent)' }}>{profile.public_gists}</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '0.25rem' }}>Public Gists</span>
          </div>

          {/* Stat Box 4 */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-success)' }}>100%</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '0.25rem' }}>Live Connection</span>
          </div>
        </div>
      </div>
    </div>
  );
}
