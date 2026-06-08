// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky header
const header = document.getElementById('header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50));

// Mobile menu
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobile = document.getElementById('closeMobile');
hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMobile.addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mobile-link').forEach(link =>
  link.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===================== PROJECT MODALS =====================

function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeModal(overlay) {
  overlay.classList.remove('open');
  document.body.classList.remove('modal-open');
}

// Open on card click
document.querySelectorAll('.project-card[data-modal]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.modal));
});

// Close via X button
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal(btn.closest('.modal-overlay'));
  });
});

// Close on overlay background click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay);
  });
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
  }
});
