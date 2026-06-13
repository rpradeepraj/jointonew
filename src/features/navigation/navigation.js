export function initNavigation() {
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
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}
