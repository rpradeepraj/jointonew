import React from 'react';

export default function StoreHeader({ lang, onToggleLanguage, onOpenCart, cartCount, onBack, t }) {
  return (
    <header className="store-header">
      <div className="container store-header-container">
        {/* Logo and Branding title */}
        <div className="store-logo-area">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80" 
            alt="Pradeep Vegetables Logo" 
            className="store-logo-img"
          />
          <div className="store-logo-text">
            <h1>{t("PRADEEP")}</h1>
            <p className="store-logo-sub">{t("VEGETABLES")}</p>
          </div>
        </div>

        {/* Action controls */}
        <div className="store-header-actions">
          {/* Language Switcher */}
          <button 
            className="store-action-btn"
            onClick={onToggleLanguage}
            title={lang === 'EN' ? "Translate to Tamil" : "ஆங்கிலத்திற்கு மாற்றுக"}
            aria-label="Change Language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 8 8"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', marginLeft: '4px' }}>{lang === 'EN' ? "தமிழ்" : "EN"}</span>
          </button>

          {/* Cart Icon Toggle Button */}
          <button 
            className="store-action-btn cart-icon-btn" 
            onClick={onOpenCart}
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {cartCount > 0 && (
              <span className="cart-count-badge">{cartCount}</span>
            )}
          </button>

          {/* Back button to return to portfolio */}
          <button className="back-portfolio-btn" onClick={onBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            {t("Back to Portfolio")}
          </button>
        </div>
      </div>
    </header>
  );
}
