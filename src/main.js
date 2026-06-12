document.addEventListener('DOMContentLoaded', () => {
  /* --- MOBILE NAV TOGGLE --- */
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-link');
  
  if (mobileNavToggle && mobileMenu) {
    const icon = mobileNavToggle.querySelector('i');
    
    mobileNavToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const isActive = mobileMenu.classList.contains('active');
      
      if (icon) {
        // Toggle menu icon using Lucide's setAttribute or recreate
        icon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
        if (window.lucide) window.lucide.createIcons();
      }
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (window.lucide) window.lucide.createIcons();
        }
      });
    });
  }

  /* --- HEADER BLUR ON SCROLL --- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* --- SKILLS TABS --- */
  const tabs = document.querySelectorAll('.skills-tab');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      // Update active tab button
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update active pane
      panes.forEach(pane => {
        if (pane.id === targetTab) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  /* --- PROJECTS FILTER --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter project cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || (filter === 'gis' && (category === 'gis' || category === 'enterprise'))) {
          card.classList.remove('hidden');
          // Re-trigger scroll reveal animation if visible
          setTimeout(() => card.classList.add('active'), 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* --- PROJECT INQUIRY FORM SIMULATION --- */
  const projectForm = document.getElementById('project-form');
  const projectSuccess = document.getElementById('project-success');

  if (projectForm && projectSuccess) {
    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = projectForm.querySelector('button[type="submit"]');
      const btnText = submitBtn.querySelector('.btn-text');
      const spinner = submitBtn.querySelector('.spinner');
      
      // Set submitting state
      submitBtn.disabled = true;
      btnText.textContent = 'Submitting...';
      spinner.classList.remove('hidden');

      // Simulate API request
      setTimeout(() => {
        projectForm.classList.add('hidden');
        projectSuccess.classList.remove('hidden');
        
        // Clear form values
        projectForm.reset();
      }, 1500);
    });
  }

  /* --- CONTACT FORM SIMULATION --- */
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const btnText = submitBtn.querySelector('.btn-text');
      const spinner = submitBtn.querySelector('.spinner');
      
      // Set submitting state
      submitBtn.disabled = true;
      btnText.textContent = 'Sending...';
      spinner.classList.remove('hidden');

      // Simulate API request
      setTimeout(() => {
        contactForm.classList.add('hidden');
        contactSuccess.classList.remove('hidden');
        
        // Clear form values
        contactForm.reset();
      }, 1500);
    });
  }

  /* --- SCROLL REVEAL (INTERSECTION OBSERVER) --- */
  const reveals = document.querySelectorAll('.reveal, .timeline-item, .project-card');
  
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
    // Add reveal class to items dynamically if they don't have it
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }
    revealOnScroll.observe(el);
  });
});
