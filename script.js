const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.firstChild.textContent = isOpen ? 'Close ' : 'Menu ';
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => navigation.classList.remove('is-open'));
});

const revealItems = document.querySelectorAll('.section, .project-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealItems.forEach((item) => observer.observe(item));
