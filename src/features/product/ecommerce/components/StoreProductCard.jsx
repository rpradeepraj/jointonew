import React, { useState } from 'react';

export default function StoreProductCard({ product, onAddToCart }) {
  const { name, description, category, image, price, sizes, prices, ingredients, isBestseller } = product;
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);

  // Get current active price based on size index
  const activePrice = prices && prices[selectedSizeIdx] !== undefined ? prices[selectedSizeIdx] : price;
  const activeSize = sizes && sizes[selectedSizeIdx] ? sizes[selectedSizeIdx] : "Standard";

  const handleSizeClick = (e, index) => {
    e.stopPropagation();
    setSelectedSizeIdx(index);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    onAddToCart(product, activeSize, activePrice);
  };

  return (
    <div className="store-product-card card-hover">
      {/* Product Image Panel */}
      <div className="store-product-img-wrapper">
        <img 
          src={image} 
          alt={name} 
          className="store-product-img" 
          loading="lazy"
        />
        {isBestseller && (
          <span className="store-bestseller-badge">Bestseller</span>
        )}
      </div>

      {/* Product Content Details */}
      <div className="store-product-info">
        <h3 className="store-product-title">{name}</h3>
        <p className="store-product-desc">{description}</p>

        {/* Ingredients list tags */}
        {ingredients && ingredients.length > 0 && (
          <div className="store-ingredients-box">
            <span className="store-ingredients-label">Ingredients:</span>
            <div className="store-ingredients-tags">
              {ingredients.map((ing, index) => (
                <span key={index} className="store-ingredient-tag">{ing}</span>
              ))}
            </div>
          </div>
        )}

        <div className="store-card-divider"></div>

        {/* Portion size selector pills */}
        {sizes && sizes.length > 1 && (
          <div className="store-size-selector">
            <p className="size-selector-label">Select Portion</p>
            <div className="store-size-pills">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className={`store-size-pill ${index === selectedSizeIdx ? 'active' : ''}`}
                  onClick={(e) => handleSizeClick(e, index)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer Pricing & CTA */}
        <div className="store-card-footer">
          <div className="store-price-container">
            <span className="currency-symbol">₹</span>
            <span className="store-price-amt">{activePrice}</span>
          </div>
          <button 
            className="btn btn-small btn-add-cart" 
            onClick={handleAddToCartClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px' }}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
