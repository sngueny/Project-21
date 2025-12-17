// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Initialize Hero Carousel
const heroSwiper = new Swiper('.hero-carousel', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    // Close mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }

    // Scroll to target
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });

      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Project Tabs
const projectTabButtons = document.querySelectorAll('.project-tab-btn');

projectTabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active state from all buttons
    projectTabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.classList.remove('bg-primary');
      btn.classList.remove('text-white');
      btn.classList.add('bg-gray-200');
      btn.classList.add('text-gray-700');
    });

    // Add active state to clicked button
    button.classList.add('active');
    button.classList.add('bg-primary');
    button.classList.add('text-white');
    button.classList.remove('bg-gray-200');
    button.classList.remove('text-gray-700');

    // In a real implementation, we would filter projects based on the selected category
    // For this prototype, we're not implementing the actual filtering
  });
});

// Donation Amount Selection
const donationAmountButtons = document.querySelectorAll('.donation-amount-btn');

donationAmountButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active state from all buttons
    donationAmountButtons.forEach(btn => {
      btn.classList.remove('border-primary');
      btn.classList.remove('bg-primary/10');
      btn.classList.remove('text-primary');
      btn.classList.add('border-gray-200');
    });

    // Add active state to clicked button
    button.classList.add('border-primary');
    button.classList.add('bg-primary/10');
    button.classList.add('text-primary');
    button.classList.remove('border-gray-200');
  });
});

// Donation Type Selection
const donationTypeButtons = document.querySelectorAll('.donation-type-btn');

donationTypeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active state from all buttons
    donationTypeButtons.forEach(btn => {
      btn.classList.remove('border-primary');
      btn.classList.remove('bg-primary/10');
      btn.classList.remove('text-primary');
      btn.classList.add('border-gray-200');
    });

    // Add active state to clicked button
    button.classList.add('border-primary');
    button.classList.add('bg-primary/10');
    button.classList.add('text-primary');
    button.classList.remove('border-gray-200');
  });
});

// Update active navigation based on scroll position
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + 100;

  // Get all sections
  const sections = document.querySelectorAll('section');

  // Check which section is currently in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
    }
  });
});