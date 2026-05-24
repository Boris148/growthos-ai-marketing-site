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

  /* ---------- Mobile menu toggle -------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    const openMenu = () => {
      mobileMenu.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });
  }

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

  /* ---------- ElevenLabs widget — strip "Powered by" branding ------- */
  /* Growing Business tier doesn't support disable_banner server-side, so we
     hide the brand mark from the widget's shadow DOM client-side. */
  const stripElevenBranding = () => {
    const host = document.querySelector('elevenlabs-convai');
    if (!host || !host.shadowRoot) return false;
    const matchers = [
      /powered\s*by/i, /elevenlabs/i, /11labs/i
    ];
    const walk = (root) => {
      const nodes = root.querySelectorAll('*');
      for (const n of nodes) {
        const txt = (n.textContent || '').trim();
        if (txt && txt.length < 60 && matchers.some(rx => rx.test(txt))) {
          // hide only leaf-ish elements (no children with substantive text)
          const hasChildText = Array.from(n.children).some(c => (c.textContent || '').trim().length > 0);
          if (!hasChildText || n.tagName === 'A') {
            n.style.display = 'none';
          }
        }
        if (n.shadowRoot) walk(n.shadowRoot);
      }
    };
    walk(host.shadowRoot);
    return true;
  };
  let stripTries = 0;
  const stripTimer = setInterval(() => {
    stripTries++;
    if (stripElevenBranding() || stripTries > 30) clearInterval(stripTimer);
  }, 1000);
})();
