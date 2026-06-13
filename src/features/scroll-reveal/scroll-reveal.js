export function initScrollReveal() {
  /* --- SCROLL REVEAL (INTERSECTION OBSERVER) --- */
  const reveals = document.querySelectorAll('.reveal, .timeline-item');
  
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Stop observing once animated
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
}
