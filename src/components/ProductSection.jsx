import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProductsFromSheet } from '../services/sheetService';
import { GOOGLE_SHEET_CONFIG } from '../mock/productsData';
import '../features/product/product.css';

export default function ProductSection({ onSelectStore }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Google Sheets configurations
  const [sheetId, setSheetId] = useState(localStorage.getItem('j2n_sheet_id') || GOOGLE_SHEET_CONFIG.spreadsheetId);
  const [sheetEnabled, setSheetEnabled] = useState(() => {
    const saved = localStorage.getItem('j2n_sheet_enabled');
    return saved !== null ? saved === 'true' : GOOGLE_SHEET_CONFIG.enabled;
  });
  const [showConfig, setShowConfig] = useState(false);

  // Load products when configurations change
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await fetchProductsFromSheet(sheetEnabled ? sheetId : "");
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [sheetId, sheetEnabled]);

  // Handle Search & Filter logic
  useEffect(() => {
    let result = products;

    // Apply category filter
    if (activeCategory !== 'All') {
      result = result.filter(
        (p) => p.category && p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          (p.title && p.title.toLowerCase().includes(term)) ||
          (p.subtitle && p.subtitle.toLowerCase().includes(term)) ||
          (p.description && p.description.toLowerCase().includes(term)) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(term))) ||
          (p.category && p.category.toLowerCase().includes(term))
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, activeCategory, products]);

  // Extract unique categories dynamically
  const categories = ['All', ...new Set(products.map((p) => p.category).filter(Boolean))];

  const handleToggleSheet = () => {
    const nextVal = !sheetEnabled;
    setSheetEnabled(nextVal);
    localStorage.setItem('j2n_sheet_enabled', String(nextVal));
  };

  const handleSaveSheetId = (e) => {
    e.preventDefault();
    const inputId = e.target.elements.sheetIdInput.value.trim();
    setSheetId(inputId);
    localStorage.setItem('j2n_sheet_id', inputId);
    alert("Google Sheet ID updated and saved locally! Fetching updated data...");
  };

  return (
    <section id="products-section" className="section-padding section-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">Innovations</span>
          <h2 className="section-title">SaaS Products & Websites</h2>
          <p className="section-intro">
            A directory of full-stack SaaS portals, geospatial dashboards, and custom e-commerce integrations powered by modern tech stacks.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Dynamic Controls / Filter panel */}
        <div className="product-controls">
          
          {/* Quick Google Sheet Info Button */}
          <div className="text-center" style={{ marginBottom: '-0.5rem' }}>
            <button 
              className="btn btn-secondary btn-small"
              onClick={() => setShowConfig(!showConfig)}
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px', verticalAlign: 'middle' }}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
              {showConfig ? "Hide Google Sheet Config" : "Connect Google Sheet"}
            </button>
          </div>

          {/* Google Sheets Connection Details */}
          {showConfig && (
            <div className="sheet-config-panel reveal active">
              <div className="sheet-config-header">
                <span className="sheet-config-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  Google Spreadsheet Data Source
                </span>
                <button 
                  className={`btn btn-small ${sheetEnabled ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={handleToggleSheet}
                  style={{ padding: '0.3rem 0.7rem', fontSize: '0.75rem' }}
                >
                  {sheetEnabled ? "Sync Enabled" : "Sync Disabled (Using Mock)"}
                </button>
              </div>
              <div className="sheet-config-body">
                <p>
                  You can manage all portfolio products directly from your own Google Sheet. 
                  Make sure your spreadsheet is shared as <strong>"Anyone with link can view"</strong>, copy its ID, and paste it below.
                </p>
                <form onSubmit={handleSaveSheetId} className="sheet-input-row">
                  <input 
                    type="text" 
                    name="sheetIdInput" 
                    className="sheet-id-input"
                    placeholder="Enter Google Spreadsheet ID (e.g. 1-W4m-q_...)" 
                    defaultValue={sheetId}
                    required
                  />
                  <button type="submit" className="btn btn-secondary btn-small" style={{ padding: '0.5rem 1rem' }}>
                    Save & Load
                  </button>
                </form>
                <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                  Headers required: <code>id, title, subtitle, description, category, pricing, link, images, tags, features, isFeatured</code>
                </p>
              </div>
            </div>
          )}

          {/* Search Bar */}
          <div className="product-search-wrapper">
            <input
              type="text"
              className="product-search-input"
              placeholder="Search SaaS applications by title, tags, or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              className="search-icon-svg" 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </div>

          {/* Category Filter Pills */}
          {!loading && categories.length > 1 && (
            <div className="product-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="product-loading-container">
            <div className="spinner"></div>
            <p style={{ color: 'var(--text-secondary)' }}>Retrieving SaaS products directory...</p>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onSelect={onSelectStore} />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="no-products-found glass-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                <h3>No Products Found</h3>
                <p>We couldn't find any SaaS applications matching "{searchTerm}". Try clearing your filters or search terms.</p>
                {searchTerm && (
                  <button 
                    className="btn btn-secondary btn-small" 
                    onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                    style={{ marginTop: '1.25rem' }}
                  >
                    Reset Search
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
