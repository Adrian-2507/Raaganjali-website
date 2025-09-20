console.log("Welcome to Raganjali!");

// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!navbarToggle || !navLinks) return; // Prevent errors if elements are missing

  // Toggle menu open/close
  navbarToggle.addEventListener('click', function() {
    const isOpen = navLinks.classList.toggle('open');
    navbarToggle.setAttribute('aria-expanded', isOpen ? "true" : "false");
  });

  // Close menu when a nav link is clicked (on mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 800) {
        navLinks.classList.remove('open');
        navbarToggle.setAttribute('aria-expanded', "false");
      }
    });
  });

  // Close menu if window resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      navLinks.classList.remove('open');
      navbarToggle.setAttribute('aria-expanded', "false");
    }
  });
});
// Hamburger menu toggle for mobile end 
