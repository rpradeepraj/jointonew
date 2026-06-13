import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import DevelopApp from './DevelopApp';
import Contact from './Contact';

export default function Developer() {
  useEffect(() => {
    // Initialize Scroll Reveal for elements in Developer section
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
      <Hero />
      <About />
      <Skills />
      <Experience />
      <DevelopApp />
      <Contact />
    </>
  );
}
