/* GrowthOS AI — main.js
   Vanilla. No dependencies. Respects prefers-reduced-motion via CSS. */

(() => {
  'use strict';

  /* ---------- Nav: add .scrolled after the user moves off the top ----- */
  const nav = document.getElementById('nav');
  const setNavState = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 12);
  };
  setNavState();
  window.addEventListener('scroll', setNavState, { passive: true });

  /* ---------- Year stamp ---------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Scroll reveal ------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- FAQ accordion ------------------------------------------- */
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.setAttribute('role', 'button');
    q.setAttribute('tabindex', '0');
    q.setAttribute('aria-expanded', 'false');

    const toggle = () => {
      const open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    q.addEventListener('click', toggle);
    q.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  /* ---------- Service card cursor glow -------------------------------- */
  document.querySelectorAll('.svc-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* ---------- Voice mock: rotate the "active" row for a small "live" effect */
  const callRows = document.querySelectorAll('.voice-call-row');
  if (callRows.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let idx = 0;
    setInterval(() => {
      callRows.forEach((row, i) => {
        row.classList.toggle('active', i === idx);
        const indicator = row.querySelector('.pulse, .dotted');
        if (indicator) {
          indicator.className = i === idx ? 'pulse' : 'dotted';
        }
      });
      idx = (idx + 1) % callRows.length;
    }, 2600);
  }

  /* ---------- Smooth in-page anchor offset for the fixed nav ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
