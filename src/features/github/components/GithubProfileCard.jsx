import React from 'react';

export default function GithubProfileCard({ profile }) {
  return (
    <div className="github-profile-card">
      {/* Profile Avatar / Left info */}
      <div className="github-profile-left">
        <img 
          src={profile.avatar_url} 
          alt={profile.name} 
          className="github-avatar"
        />
        <h3 className="github-profile-name">{profile.name}</h3>
        <p className="github-profile-username">@{profile.login}</p>
        <p className="github-profile-bio">{profile.bio}</p>
        {profile.location && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {profile.location}
          </p>
        )}
        <a 
          href={`https://github.com/${profile.login}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary btn-small github-btn"
        >
          Visit Profile
        </a>
      </div>

      {/* Profile Stats / Right Grid */}
      <div className="github-stats-grid">
        {/* Stat 1: Repos */}
        <div className="github-stat-item">
          <div className="github-stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
          </div>
          <div className="github-stat-info">
            <span className="github-stat-value">{profile.public_repos}</span>
            <span className="github-stat-label">Public Repositories</span>
          </div>
        </div>

        {/* Stat 2: Followers */}
        <div className="github-stat-item">
          <div className="github-stat-icon cyan">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div className="github-stat-info">
            <span className="github-stat-value">{profile.followers}</span>
            <span className="github-stat-label">Followers</span>
          </div>
        </div>

        {/* Stat 3: Following */}
        <div className="github-stat-item">
          <div className="github-stat-icon purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          </div>
          <div className="github-stat-info">
            <span className="github-stat-value">{profile.following}</span>
            <span className="github-stat-label">Following</span>
          </div>
        </div>

        {/* Stat 4: Gists */}
        <div className="github-stat-item">
          <div className="github-stat-icon emerald">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div className="github-stat-info">
            <span className="github-stat-value">{profile.public_gists}</span>
            <span className="github-stat-label">Public Gists</span>
          </div>
        </div>
      </div>
    </div>
  );
}
