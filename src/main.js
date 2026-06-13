import { initNavigation } from './features/navigation/navigation.js';
import { initSkills } from './features/skills/skills.js';
import { initDevelopApp } from './features/develop-app/develop-app.js';
import { initContact } from './features/contact/contact.js';
import { initScrollReveal } from './features/scroll-reveal/scroll-reveal.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSkills();
  initDevelopApp();
  initContact();
  initScrollReveal();
});
