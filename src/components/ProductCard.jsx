import React, { useState, useEffect } from 'react';

export default function ProductCard({ product, onSelect }) {
  const { id, title, subtitle, description, category, pricing, link, images, tags, features, isFeatured } = product;
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentImgIndex]);

  const handlePrevImage = (e) => {
    e.stopPropagation(); // Prevent card click redirect
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation(); // Prevent card click redirect
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation(); // Prevent card click redirect
    setCurrentImgIndex(index);
  };

  // Determine if it's the Pradeep Vegetables card for custom in-app store routing
  const isPradeepVeg = id === 'pradeep-vegetables';

  const handleCardClick = () => {
    if (isPradeepVeg && onSelect) {
      onSelect();
    } else if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`product-card glass-card ${isFeatured ? 'featured' : ''} ${isPradeepVeg ? 'pradeepveg-accent' : ''}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
      title={isPradeepVeg ? "Click to open Pradeep Vegetables Store" : (link && link !== '#') ? `Click to visit ${title}` : `${title} - Coming Soon`}
    >
      {isFeatured && (
        <div className="badge-featured">
          <span className="pulse-dot"></span>
          Featured SaaS
        </div>
      )}

      {/* Image Gallery / Carousel Section */}
      <div className="product-image-container">
        {images && images.length > 0 ? (
          <>
            <img 
              src={images[currentImgIndex]} 
              alt={`${title} screenshot ${currentImgIndex + 1}`} 
              className="product-image"
              loading="lazy"
            />
            {images.length > 1 && (
              <>
                <button 
                  className="carousel-btn prev" 
                  onClick={handlePrevImage} 
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                  className="carousel-btn next" 
                  onClick={handleNextImage} 
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
                <div className="carousel-dots">
                  {images.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`carousel-dot ${idx === currentImgIndex ? 'active' : ''}`}
                      onClick={(e) => handleDotClick(e, idx)}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="product-image-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            <span>No Image Available</span>
          </div>
        )}
        <span className={`product-category ${isPradeepVeg ? 'category-green' : ''}`}>
          {category}
        </span>
      </div>

      {/* Card Content Section */}
      <div className="product-details">
        <h3 className="product-title">
          {title}
          {(isPradeepVeg || (link && link !== '#')) && (
            <svg className="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          )}
        </h3>
        <h4 className="product-subtitle">{subtitle}</h4>
        <p className="product-description">{description}</p>

        {features && features.length > 0 && (
          <div className="product-features-box">
            <p className="features-label">Core Capabilities</p>
            <ul className="features-list">
              {features.map((feat, index) => (
                <li key={index}>
                  <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="product-tags">
          {tags && tags.map((tag, idx) => (
            <span key={idx} className="product-tag-badge">{tag}</span>
          ))}
        </div>

        <div className="product-card-footer">
          <span className="product-pricing">{pricing}</span>
          {(isPradeepVeg || (link && link !== '#')) ? (
            <button className={`btn btn-small ${isPradeepVeg ? 'btn-green' : 'btn-primary'}`}>
              {isPradeepVeg ? "Open Store" : "Launch App"}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          ) : (
            <span className="coming-soon-tag">Coming Soon</span>
          )}
        </div>
      </div>
    </div>
  );
}
