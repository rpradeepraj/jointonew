import React from 'react';

export default function StoreErrorPanel({ error, sheetId, t }) {
  return (
    <div 
      className="no-products-found" 
      style={{ 
        background: '#fff', 
        border: '1px solid #ef4444', 
        maxWidth: '650px', 
        margin: '3rem auto', 
        padding: '2rem', 
        borderRadius: '12px' 
      }}
    >
      <h3 style={{ color: '#dc2626', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
        ⚠️ {t("Google Sheet Loading Error")}
      </h3>
      <p style={{ color: 'var(--store-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
        {error}
      </p>
      
      {/* Help Instructions panel */}
      <div 
        style={{ 
          textAlign: 'left', 
          background: '#fef2f2', 
          padding: '1rem', 
          borderRadius: '8px', 
          borderLeft: '4px solid #ef4444' 
        }}
      >
        <p style={{ fontWeight: '700', fontSize: '0.85rem', color: '#991b1b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
          {t("How to resolve this:")}
        </p>
        <ol style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: '#7f1d1d', lineHeight: '1.6' }}>
          <li>
            Open your sheet: <a 
              href={`https://docs.google.com/spreadsheets/d/${sheetId}/edit`} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'underline', color: '#b91c1c', fontWeight: '600' }}
            >
              Click here to open Google Sheet
            </a>
          </li>
          <li>Click the blue <strong>"Share"</strong> button in the top right corner.</li>
          <li>Change General Access to <strong>"Anyone with the link can view"</strong> (Viewer).</li>
          <li>Refresh this browser tab.</li>
        </ol>
      </div>
    </div>
  );
}
