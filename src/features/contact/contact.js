export function initContact() {
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
}
