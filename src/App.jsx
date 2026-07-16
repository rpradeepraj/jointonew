import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Developer from './developer/Developer';
import ComingSoon from './components/ComingSoon';
import ProductSection from './components/ProductSection';
import StoreView from './features/product/ecommerce/components/StoreView';


// Global Scroll Reveal CSS
import './features/scroll-reveal/scroll-reveal.css';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') || 'home';
  });
  const [viewStore, setViewStore] = useState(false);

  useEffect(() => {
    if (activeTab !== 'product') {
      setViewStore(false);
    }
  }, [activeTab]);

  useEffect(() => {
    // Initialize Lucide Icons on mount and tab switch
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Update URL query parameters based on activeTab
    const params = new URLSearchParams(window.location.search);
    if (activeTab === 'home') {
      params.delete('tab');
    } else {
      params.set('tab', activeTab);
    }
    const newSearch = params.toString();
    const newUrl = window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash;
    window.history.pushState(null, '', newUrl);
  }, [activeTab]);

  useEffect(() => {
    // Listen for back/forward navigation
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setActiveTab(params.get('tab') || 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      {/* Background Blobs for Visual Aesthetics */}
      <div className="bg-glow blob-1"></div>
      <div className="bg-glow blob-2"></div>
      <div className="bg-glow blob-3"></div>

      {!viewStore && <Header activeTab={activeTab} setActiveTab={setActiveTab} />}
      <main>
        {activeTab === 'dev' ? (
          <Developer />
        ) : activeTab === 'product' ? (
          viewStore ? (
            <StoreView onBack={() => setViewStore(false)} />
          ) : (
            <ProductSection onSelectStore={() => setViewStore(true)} />
          )
        ) : (
          <ComingSoon />
        )}
      </main>
      {!viewStore && <Footer />}
    </>
  );
}
