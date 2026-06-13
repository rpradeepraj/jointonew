import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Developer from './developer/Developer';
import ComingSoon from './components/ComingSoon';

// Global Scroll Reveal CSS
import './features/scroll-reveal/scroll-reveal.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Initialize Lucide Icons on mount and tab switch
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [activeTab]);

  return (
    <>
      {/* Background Blobs for Visual Aesthetics */}
      <div className="bg-glow blob-1"></div>
      <div className="bg-glow blob-2"></div>
      <div className="bg-glow blob-3"></div>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'dev' ? (
          <Developer />
        ) : (
          <ComingSoon />
        )}
      </main>
      <Footer />
    </>
  );
}
