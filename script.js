console.log("Welcome to Raganjali!");

// Unified Hamburger Menu Script
(function() {
  'use strict';
  
  function initHamburgerMenu() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!navbarToggle || !navLinks) {
      console.warn('Hamburger menu elements not found');
      return;
    }
    
    // Toggle menu when hamburger is clicked
    navbarToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.classList.toggle('open');
    });
    
    // Close menu when any nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 650) {
        navLinks.classList.remove('open');
      }
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', function(e) {
      if (!navbarToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburgerMenu);
  } else {
    initHamburgerMenu();
  }
})();
