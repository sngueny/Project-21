// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Function to update navigation indicator position
function updateNavIndicator() {
  const activeLink = document.querySelector('.nav-link.active');
  const indicator = document.getElementById('nav-indicator');
  const navContainer = document.querySelector('.hidden.md\\:flex.space-x-8');

  if (activeLink && indicator && navContainer) {
    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();
    
    const left = linkRect.left - containerRect.left;
    const width = linkRect.width;
    
    indicator.style.left = left + 'px';
    indicator.style.width = width + 'px';
  }
}

// Initialize indicator on load
document.addEventListener('DOMContentLoaded', updateNavIndicator);

// Update indicator on window resize
window.addEventListener('resize', updateNavIndicator);

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
        link.classList.remove('text-primary');
        link.classList.add('text-gray-700');
      });
      const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
        activeLink.classList.remove('text-gray-700');
        activeLink.classList.add('text-primary');
      }
      updateNavIndicator();
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
  const scrollPosition = window.scrollY;

  // Get all sections
  const sections = document.querySelectorAll('section');

  let closestSection = null;
  let minDistance = Infinity;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const distance = Math.abs(scrollPosition - sectionTop);

    if (distance < minDistance) {
      minDistance = distance;
      closestSection = section;
    }
  });

  if (closestSection) {
    const sectionId = closestSection.getAttribute('id');
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      link.classList.remove('text-primary');
      link.classList.add('text-gray-700');
      if (link.getAttribute('href') === '#' + sectionId) {
        link.classList.add('active');
        link.classList.remove('text-gray-700');
        link.classList.add('text-primary');
      }
    });
    updateNavIndicator();
  }
});

// Modal Functions
function showVolunteerModal() {
  document.getElementById('volunteer-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVolunteerModal() {
  document.getElementById('volunteer-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function showContactModal() {
  document.getElementById('contact-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeContactModal() {
  document.getElementById('contact-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Event listeners for modal buttons
document.querySelectorAll('.volunteer-btn').forEach(button => {
  button.addEventListener('click', showVolunteerModal);
});

document.querySelectorAll('.contact-btn').forEach(button => {
  button.addEventListener('click', showContactModal);
});

// Close modals when clicking outside
document.getElementById('volunteer-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('volunteer-modal')) {
    closeVolunteerModal();
  }
});

document.getElementById('contact-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('contact-modal')) {
    closeContactModal();
  }
});

// Form submissions
document.getElementById('volunteer-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // In a real implementation, this would send data to a server
  alert('Thank you for your interest in volunteering! We will review your application and get back to you soon.');
  closeVolunteerModal();
  // Reset form
  e.target.reset();
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // In a real implementation, this would send data to a server
  alert('Thank you for your message! We will get back to you as soon as possible.');
  closeContactModal();
  // Reset form
  e.target.reset();
});