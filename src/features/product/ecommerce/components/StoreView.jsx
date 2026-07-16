import React, { useState, useEffect } from 'react';
import StoreHeader from './StoreHeader';
import StoreHero from './StoreHero';
import StoreErrorPanel from './StoreErrorPanel';
import StoreProductCard from './StoreProductCard';
import CartDrawer from './CartDrawer';
import { useCart } from '../hooks/useCart';
import { useTranslation } from '../hooks/useTranslation';
import { fetchStoreProductsFromSheet } from '../services/storeSheetService';
import { VEGETABLE_SHEET_CONFIG } from '../mock/storeData';
import '../store.css';

export default function StoreView({ onBack }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Custom Hooks
  const { lang, toggleLanguage, t } = useTranslation();
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItemsCount
  } = useCart();

  // Load store inventory products dynamically from config sheet
  useEffect(() => {
    async function loadStoreData() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchStoreProductsFromSheet(VEGETABLE_SHEET_CONFIG.spreadsheetId);
        setProducts(data);
      } catch (err) {
        console.error("Error loading store products:", err);
        setError(err.message || "Failed to load products from Google Sheet.");
      } finally {
        setLoading(false);
      }
    }
    loadStoreData();
  }, []);

  // Search & filter products
  useEffect(() => {
    let result = products;

    if (activeCategory !== 'All') {
      result = result.filter(
        (p) => p.category && p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(term)) ||
          (p.description && p.description.toLowerCase().includes(term)) ||
          (p.category && p.category.toLowerCase().includes(term)) ||
          (p.ingredients && p.ingredients.some(ing => ing.toLowerCase().includes(term)))
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, activeCategory, products]);

  // Extract categories dynamically
  const categories = ['All', ...new Set(products.map((p) => p.category).filter(Boolean))];

  return (
    <div className="store-container-wrapper">
      
      {/* Header component */}
      <StoreHeader 
        lang={lang} 
        onToggleLanguage={toggleLanguage} 
        onOpenCart={() => setCartOpen(true)} 
        cartCount={totalItemsCount} 
        onBack={onBack} 
        t={t} 
      />

      {/* Hero Section Component */}
      <StoreHero t={t} />

      {/* Main Shop Products Catalog */}
      <main className="container" style={{ marginTop: '2rem' }}>
        
        {/* Search & Categories */}
        <div className="store-shop-controls">
          <div className="store-search-box">
            <input 
              type="text" 
              className="store-search-input"
              placeholder={t("Search farm fresh cut vegetables...")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="store-search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>

          {!loading && !error && categories.length > 1 && (
            <div className="store-filters-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`store-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {t(cat)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic products list or loading/error layouts */}
        {error ? (
          <StoreErrorPanel error={error} sheetId={VEGETABLE_SHEET_CONFIG.spreadsheetId} t={t} />
        ) : loading ? (
          <div className="product-loading-container">
            <div className="spinner" style={{ borderTopColor: 'var(--store-primary)' }}></div>
            <p style={{ color: 'var(--store-text-muted)' }}>
              {lang === 'TA' ? "சரக்குகளை ஏற்றுகிறது..." : "Loading fresh cuts inventory..."}
            </p>
          </div>
        ) : (
          <>
            {filteredProducts.length > 0 ? (
              <div className="store-products-grid">
                {filteredProducts.map((prod) => (
                  <StoreProductCard 
                    key={prod.id} 
                    product={{
                      ...prod,
                      name: t(prod.name),
                      description: lang === 'TA' ? (t(prod.name) + " மிக புதிய தயாரிப்பு, சமைக்க தயார் நிலையில் உள்ளது.") : prod.description,
                      ingredients: prod.ingredients.map(ing => t(ing))
                    }} 
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="no-products-found" style={{ background: '#fff', border: '1px solid var(--store-border)' }}>
                <h3>{lang === 'TA' ? "தயாரிப்புகள் இல்லை" : "No Vegetables Found"}</h3>
                <p>
                  {lang === 'TA' ? "நீங்கள் தேடிய பெயரில் தயாரிப்புகள் எதுவும் இல்லை. மீண்டும் தேடவும்." : `No products matched "${searchTerm}". Try resetting your filters.`}
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Floating cart button */}
      {totalItemsCount > 0 && (
        <button 
          className="store-floating-cart"
          onClick={() => setCartOpen(true)}
          title="View Cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span className="floating-cart-badge">{totalItemsCount}</span>
        </button>
      )}

      {/* Cart Drawer Component */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems.map(item => ({
          ...item,
          name: t(item.name)
        }))}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={() => clearCart(lang === 'TA' ? "நிச்சயமாக கூடையை காலியாக்க வேண்டுமா?" : "Are you sure you want to clear your cart?")}
      />
    </div>
  );
}
