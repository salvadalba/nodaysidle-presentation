// Developer Portfolio Starter Template JS
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Smooth scroll for in-page anchors
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.tagName === 'A' && t.getAttribute('href')?.startsWith('#')) {
      const id = t.getAttribute('href');
      const el = id ? document.querySelector(id) : null;
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
})();
