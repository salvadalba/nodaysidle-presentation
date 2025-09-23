// NoDaysIdle Portfolio - Enhanced JS
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
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });

  // Typing effect for hero title
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
      }
    };
    
    setTimeout(typeWriter, 300);
  }

  // Fade in sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply fade-in to all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeInObserver.observe(section);
  });

  // Animate achievement stats
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        entry.target.style.transform = 'scale(1.2)';
        setTimeout(() => {
          entry.target.style.transform = 'scale(1)';
        }, 300);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.achievement-stat').forEach(stat => {
    stat.style.transition = 'transform 0.3s ease';
    statsObserver.observe(stat);
  });

  // Add glitch effect to NDI brand occasionally
  const brand = document.querySelector('.brand');
  if (brand) {
    setInterval(() => {
      brand.style.textShadow = '2px 2px 0 #ff0000, -2px -2px 0 #00ff00';
      setTimeout(() => {
        brand.style.textShadow = 'none';
      }, 100);
    }, 10000);
  }
})();
