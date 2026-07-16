import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Developer from './developer/Developer';
import ComingSoon from './components/ComingSoon';
import ProductSection from './components/ProductSection';
import StoreView from './features/product/ecommerce/components/StoreView';
import GithubSection from './features/github/GithubSection';


// Global Scroll Reveal CSS
import './features/scroll-reveal/scroll-reveal.css';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') || 'home';
  });
  const [viewStore, setViewStore] = useState(false);
  const [profile, setProfile] = useState(null);

  // Fetch live profile details on mount
  useEffect(() => {
    async function fetchLiveProfile() {
      try {
        const res = await fetch("https://api.github.com/users/rpradeepraj");
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        }
      } catch (err) {
        console.warn("Failed to fetch live profile in App.jsx", err);
      }
    }
    fetchLiveProfile();
  }, []);

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

      {!viewStore && <Header activeTab={activeTab} setActiveTab={setActiveTab} profile={profile} />}
      <main>
        {activeTab === 'home' ? (
          <Developer profile={profile} onSelectStore={() => {
            setActiveTab('product');
            setViewStore(true);
          }} />
        ) : activeTab === 'product' ? (
          viewStore ? (
            <StoreView onBack={() => setViewStore(false)} />
          ) : (
            <ProductSection onSelectStore={() => setViewStore(true)} />
          )
        ) : activeTab === 'github' ? (
          <GithubSection />
        ) : (
          <ComingSoon />
        )}
      </main>
      {!viewStore && <Footer profile={profile} />}
    </>
  );
}
