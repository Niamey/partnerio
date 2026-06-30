const API_BASE = window.location.origin;

const ICONS = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.5 2A5.5 5.5 0 0 0 4 7.5c0 .9.2 1.75.57 2.5A4 4 0 0 0 5 18a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4 4 4 0 0 0 .43-8A5.5 5.5 0 0 0 14.5 2 5.5 5.5 0 0 0 12 3a5.5 5.5 0 0 0-2.5-1z"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  support: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
};

const OLGA_KORNEVA = {
  uk: {
    id: 't2',
    name: 'Ольга Корнєва',
    role: 'СТО',
    experience: '17 років досвіду',
    bio: 'Технічний директор компанії. Визначає технологічну стратегію, архітектуру платформ та впровадження інновацій у продукти.',
    image: 'images/olga-korneva.png',
  },
  en: {
    id: 't2',
    name: 'Olga Korneva',
    role: 'CTO',
    experience: '17 years of experience',
    bio: 'Chief Technology Officer. Defines technology strategy, platform architecture, and drives innovation across products.',
    image: 'images/olga-korneva.png',
  },
};

function resolveImage(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${API_BASE}${path}`;
}

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

function patchTeam(team) {
  const lang = i18n.getLang();
  const olga = OLGA_KORNEVA[lang] || OLGA_KORNEVA.uk;
  if (!team || !Array.isArray(team)) return [olga];
  return team.map((member) => (member.id === 't2' ? olga : member));
}

async function fetchJSON(endpoint) {
  const lang = i18n.getLang();
  const url = `${API_BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}lang=${lang}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`Failed to load ${endpoint}:`, err);
    return null;
  }
}

function renderServices(services) {
  const grid = document.getElementById('services-grid');
  if (!services || !grid) return;
  grid.innerHTML = services.map((s, i) => `
    <article class="service-card reveal visible" style="transition-delay:${i * 0.06}s">
      <div class="service-card__icon">${ICONS[s.icon] || ICONS.code}</div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <ul>${s.features.map((f) => `<li>${f}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function animateCounter(el, target) {
  const num = parseInt(target.replace(/\D/g, ''), 10);
  if (!num) return;
  const hasPlus = target.includes('+');
  const hasPercent = target.includes('%');
  let current = 0;
  const step = Math.max(1, Math.floor(num / 35));
  const tick = () => {
    current += step;
    if (current >= num) {
      el.textContent = target;
      return;
    }
    el.textContent = `${current}${hasPlus ? '+' : ''}${hasPercent ? '%' : ''}`;
    requestAnimationFrame(tick);
  };
  tick();
}

function renderStats(stats) {
  const grid = document.getElementById('stats-grid');
  if (!stats || !grid) return;
  grid.innerHTML = stats.map((s, i) => `
    <div class="stat-item reveal visible" style="transition-delay:${i * 0.1}s">
      <div class="stat-item__value" data-value="${s.value}">${s.value}</div>
      <div class="stat-item__label">${s.label}</div>
      <p class="stat-item__desc">${s.description}</p>
    </div>
  `).join('');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target, entry.target.dataset.value);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  grid.querySelectorAll('.stat-item__value').forEach((el) => observer.observe(el));
}

function renderProjects(projects) {
  const grid = document.getElementById('projects-grid');
  if (!projects || !grid) return;
  grid.innerHTML = projects.map((p, i) => `
    <article class="project-card reveal visible" style="transition-delay:${i * 0.08}s">
      <div class="project-card__image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <span class="project-card__category">${p.category}</span>
      </div>
      <div class="project-card__body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-card__meta"><span>${p.client}</span><span>${p.date}</span></div>
      </div>
    </article>
  `).join('');
}

function renderTeam(team) {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  const members = patchTeam(team);
  grid.innerHTML = members.map((m, i) => `
    <article class="team-card reveal visible" style="transition-delay:${i * 0.06}s">
      <div class="team-card__image">
        <img src="${resolveImage(m.image)}" alt="${m.name}" loading="lazy"${m.id === 't2' ? ` onerror="this.onerror=null;this.src='${resolveImage('images/olga-korneva.png')}'"` : ''}>
      </div>
      <div class="team-card__body">
        <h3>${m.name}</h3>
        <p class="team-card__role">${m.role}</p>
        <p class="team-card__exp">${m.experience}</p>
        <p class="team-card__bio">${m.bio}</p>
      </div>
    </article>
  `).join('');
}

function renderTestimonials(items) {
  const grid = document.getElementById('reviews-grid');
  if (!items || !grid) return;
  grid.innerHTML = items.map((t, i) => `
    <article class="review-card reveal visible" style="transition-delay:${i * 0.08}s">
      <div class="review-card__stars">★★★★★</div>
      <p>${t.text}</p>
      <div class="review-card__author">
        <div class="review-card__avatar">${initials(t.name)}</div>
        <div><h4>${t.name}</h4><span>${t.company}</span></div>
      </div>
      <p class="review-card__date">${t.date}</p>
    </article>
  `).join('');
}

async function loadApiContent() {
  const [services, stats, projects, team, testimonials] = await Promise.all([
    fetchJSON('/api/services'),
    fetchJSON('/api/stats'),
    fetchJSON('/api/projects'),
    fetchJSON('/api/team'),
    fetchJSON('/api/testimonials'),
  ]);
  renderServices(services);
  renderStats(stats);
  renderProjects(projects);
  renderTeam(team);
  renderTestimonials(testimonials);
}

function observeReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
    if (el._observed) return;
    el._observed = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
    observer.observe(el);
  });
}

function initHeader() {
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const links = nav.querySelectorAll('.nav__link[data-section]');
  const sections = [...links].map((l) => document.getElementById(l.dataset.section)).filter(Boolean);

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
    const scrollPos = window.scrollY + 100;
    let current = '';
    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop) current = sec.id;
    });
    links.forEach((l) => l.classList.toggle('active', l.dataset.section === current));
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const messageEl = document.getElementById('form-message');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    messageEl.className = 'form-message';
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = i18n.t('contact.sending');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.value.trim(),
          email: form.email.value.trim(),
          phone: form.phone.value.trim() || null,
          service: form.service.value || null,
          message: form.message.value.trim(),
          lang: i18n.getLang(),
        }),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        messageEl.className = 'form-message success';
        messageEl.textContent = result.message;
        form.reset();
      } else {
        messageEl.className = 'form-message error';
        messageEl.textContent = result.message || i18n.t('contact.error');
      }
    } catch {
      messageEl.className = 'form-message error';
      messageEl.textContent = i18n.t('contact.error');
    } finally {
      btn.disabled = false;
      btn.textContent = i18n.t('contact.submit');
    }
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

async function init() {
  i18n.initLangSwitch();
  initHeader();
  initContactForm();
  initBackToTop();
  observeReveal();
  await loadApiContent();
  document.addEventListener('langchange', () => {
    i18n.applyTranslations();
    loadApiContent();
  });
}

document.addEventListener('DOMContentLoaded', init);
