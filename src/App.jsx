import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import DevelopApp from './components/DevelopApp';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Global Scroll Reveal CSS
import './features/scroll-reveal/scroll-reveal.css';

export default function App() {
  useEffect(() => {
    // Initialize Scroll Reveal
    const reveals = document.querySelectorAll('.reveal, .timeline-item');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
      revealOnScroll.observe(el);
    });

    // Initialize Lucide Icons on mount
    if (window.lucide) {
      window.lucide.createIcons();
    }

    return () => {
      reveals.forEach(el => revealOnScroll.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Background Blobs for Visual Aesthetics */}
      <div className="bg-glow blob-1"></div>
      <div className="bg-glow blob-2"></div>
      <div className="bg-glow blob-3"></div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <DevelopApp />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
