 document.getElementById('year').textContent = new Date().getFullYear();

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50));

    const hamburger = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobile = document.getElementById('closeMobile');
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    closeMobile.addEventListener('click', () => mobileMenu.classList.remove('open'));
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));