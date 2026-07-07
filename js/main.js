const API_BASE = (() => {
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (window.location.hostname.endsWith('github.io') && parts.length > 0) {
    return `${window.location.origin}/${parts[0]}`;
  }
  return window.location.origin;
})();

const IS_STATIC_HOST = window.location.hostname.endsWith('github.io');

const ICONS = {
  code: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-code" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#1648c8"/><stop offset="1" stop-color="#60a5fa"/></linearGradient></defs><rect x="7" y="11" width="34" height="26" rx="5" fill="url(#ic-code)" fill-opacity=".12"/><rect x="7" y="11" width="34" height="26" rx="5" stroke="url(#ic-code)" stroke-width="2"/><path d="M3 15h4M3 24h4M3 33h4" stroke="url(#ic-code)" stroke-width="2" stroke-linecap="round"/><path d="M19 30l-5-6 5-6M29 18l5 6-5 6M27 32l-4-16" stroke="url(#ic-code)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  shield: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-shield" x1="10" y1="6" x2="38" y2="42" gradientUnits="userSpaceOnUse"><stop stop-color="#059669"/><stop offset="1" stop-color="#34d399"/></linearGradient></defs><path d="M24 4l14 5v12c0 9.5-6.2 16.8-14 19-7.8-2.2-14-9.5-14-19V9l14-5z" fill="url(#ic-shield)" fill-opacity=".14" stroke="url(#ic-shield)" stroke-width="2" stroke-linejoin="round"/><path d="M17 24l4 4 10-10" stroke="url(#ic-shield)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  brain: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-brain" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#a78bfa"/></linearGradient></defs><path d="M24 8c-4 0-7 2.5-8 6.2-3.2.6-5.5 3.4-5 6.8.4 2.8 2.6 4.8 5.2 5.1-.3 4.2 2.8 7.9 7 7.9h1.6c4.2 0 7.3-3.7 7-7.9 2.6-.3 4.8-2.3 5.2-5.1.5-3.4-1.8-6.2-5-6.8C31 10.5 28 8 24 8z" fill="url(#ic-brain)" fill-opacity=".14" stroke="url(#ic-brain)" stroke-width="2"/><circle cx="18" cy="22" r="1.8" fill="url(#ic-brain)"/><circle cx="24" cy="19" r="1.8" fill="url(#ic-brain)"/><circle cx="30" cy="22" r="1.8" fill="url(#ic-brain)"/><path d="M18 28c2 2 4.5 3 6 3s4-1 6-3" stroke="url(#ic-brain)" stroke-width="2" stroke-linecap="round"/><path d="M24 36v4M16 38l2-3M32 38l-2-3" stroke="url(#ic-brain)" stroke-width="2" stroke-linecap="round"/></svg>`,
  cloud: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-cloud" x1="6" y1="14" x2="42" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#0891b2"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><path d="M14 34h22a7 7 0 0 0 .8-14 9 9 0 0 0-17.2-2.8A6.5 6.5 0 0 0 14 34z" fill="url(#ic-cloud)" fill-opacity=".14" stroke="url(#ic-cloud)" stroke-width="2" stroke-linejoin="round"/><rect x="18" y="24" width="5" height="5" rx="1" fill="url(#ic-cloud)"/><rect x="25" y="24" width="5" height="5" rx="1" fill="url(#ic-cloud)"/><path d="M20.5 31h7" stroke="url(#ic-cloud)" stroke-width="2" stroke-linecap="round"/></svg>`,
  chart: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-chart" x1="8" y1="32" x2="40" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#ea580c"/><stop offset="1" stop-color="#fb923c"/></linearGradient></defs><rect x="8" y="30" width="6" height="10" rx="2" fill="url(#ic-chart)" fill-opacity=".35"/><rect x="21" y="22" width="6" height="18" rx="2" fill="url(#ic-chart)" fill-opacity=".55"/><rect x="34" y="14" width="6" height="26" rx="2" fill="url(#ic-chart)"/><path d="M10 18l10 6 8-8 10 5" stroke="url(#ic-chart)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  support: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-support" x1="8" y1="10" x2="40" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#db2777"/><stop offset="1" stop-color="#f472b6"/></linearGradient></defs><path d="M10 22a14 14 0 1 1 28 0v6a3 3 0 0 1-3 3h-2.2a3 3 0 0 1-2.8-2.1l-.6-1.8a3 3 0 0 0-2.8-2.1H22a3 3 0 0 0-2.8 2.1l-.6 1.8A3 3 0 0 1 15.8 31H14a3 3 0 0 1-3-3v-6z" fill="url(#ic-support)" fill-opacity=".12" stroke="url(#ic-support)" stroke-width="2"/><circle cx="24" cy="22" r="3.5" stroke="url(#ic-support)" stroke-width="2"/><path d="M24 36v4" stroke="url(#ic-support)" stroke-width="2" stroke-linecap="round"/></svg>`,
  globe: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-globe" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#1648c8"/><stop offset="1" stop-color="#38bdf8"/></linearGradient></defs><circle cx="24" cy="24" r="16" fill="url(#ic-globe)" fill-opacity=".1" stroke="url(#ic-globe)" stroke-width="2"/><ellipse cx="24" cy="24" rx="7" ry="16" stroke="url(#ic-globe)" stroke-width="1.8"/><path d="M8 24h32M11 16h26M11 32h26" stroke="url(#ic-globe)" stroke-width="1.8" stroke-linecap="round"/><circle cx="32" cy="16" r="3" fill="url(#ic-globe)"/></svg>`,
  layers: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-layers" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#0f766e"/><stop offset="1" stop-color="#2dd4bf"/></linearGradient></defs><path d="M24 8L8 17l16 9 16-9-16-9z" fill="url(#ic-layers)" fill-opacity=".18" stroke="url(#ic-layers)" stroke-width="2" stroke-linejoin="round"/><path d="M8 24l16 9 16-9M8 31l16 9 16-9" stroke="url(#ic-layers)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  team: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><defs><linearGradient id="ic-team" x1="8" y1="12" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#9333ea"/><stop offset="1" stop-color="#c084fc"/></linearGradient></defs><circle cx="18" cy="18" r="5" fill="url(#ic-team)" fill-opacity=".25" stroke="url(#ic-team)" stroke-width="2"/><path d="M8 36c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="url(#ic-team)" stroke-width="2" stroke-linecap="round"/><circle cx="33" cy="20" r="4" fill="url(#ic-team)" fill-opacity=".18" stroke="url(#ic-team)" stroke-width="2"/><path d="M28 36c.6-3.8 3.4-6 8-6 2.2 0 4.2.7 5.5 2.2" stroke="url(#ic-team)" stroke-width="2" stroke-linecap="round"/></svg>`,
};

function escapeAttr(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;');
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function bindImageFallbacks(root) {
  if (!root) return;
  root.querySelectorAll('img[data-fallback-class]').forEach((img) => {
    img.addEventListener('error', () => {
      const replacement = document.createElement('div');
      replacement.className = img.dataset.fallbackClass || '';
      replacement.textContent = img.dataset.fallbackInitials || '?';
      const wrap = img.dataset.fallbackReplace === 'parent'
        ? img.closest('.review-card__avatar--photo')
        : null;
      (wrap || img).replaceWith(replacement);
    }, { once: true });
  });
}

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

function resolveImage(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const resolved = new URL(url.replace(/^\//, ''), window.location.href).href;
  if (/images\/team\//i.test(url)) {
    return `${resolved}${resolved.includes('?') ? '&' : '?'}v=20250708b`;
  }
  if (/images\/(anton-fil|olga-kornieva|olga-korneva)\.png$/i.test(url)) {
    return `${resolved}${resolved.includes('?') ? '&' : '?'}v=20250708b`;
  }
  return resolved;
}

function isAiProject(project) {
  const hay = `${project.category} ${project.title}`.toLowerCase();
  return /ш\u0456|шi|\bai\b|ml|nlp|rag|cv|vision|voice|agent|llm|fraud|deep learning|computer vision|голос|forecast|прогноз|nlp|ocr|chatbot|асистент|recommendation|рекомендац/i.test(hay);
}

const HIDDEN_PROJECT_IDS = new Set(['p10']);
const HIDDEN_PROJECT_RE = /міграція fintech|paystream|payment-платформи в aws eks|kubernetes.*eks/i;

function isVisibleProject(project) {
  if (!project) return false;
  if (HIDDEN_PROJECT_IDS.has(project.id)) return false;
  const hay = `${project.title || ''} ${project.description || ''} ${project.details || ''}`.toLowerCase();
  return !HIDDEN_PROJECT_RE.test(hay);
}

function filterProjects(projects) {
  return (projects || []).filter(isVisibleProject);
}

async function fetchStaticData(key) {
  const lang = i18n.getLang();
  const bases = [window.location.href];
  if (IS_STATIC_HOST) bases.unshift(`${API_BASE}/`);
  let lastError = null;
  for (const base of bases) {
    try {
      const res = await fetch(new URL(`data/${lang}.json`, base), { cache: 'no-store' });
      if (!res.ok) continue;
      const data = await res.json();
      if (data && key in data) return data[key];
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error(`static data missing: ${key}`);
}

async function fetchJSON(endpoint) {
  const lang = i18n.getLang();
  const key = endpoint.replace('/api/', '');
  if (IS_STATIC_HOST) {
    try {
      return await fetchStaticData(key);
    } catch (err) {
      console.warn(`Static load failed for ${key}:`, err);
      return null;
    }
  }
  const url = `${API_BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}lang=${lang}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`API failed for ${endpoint}, trying static:`, err);
    try {
      return await fetchStaticData(key);
    } catch {
      return null;
    }
  }
}

function renderServices(services) {
  const grid = document.getElementById('services-grid');
  if (!services || !grid) return;
  grid.innerHTML = services.map((s, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `
    <article class="service-card reveal visible" style="transition-delay:${i * 0.06}s">
      <div class="service-card__mark" aria-hidden="true">
        <span class="service-card__num">${num}</span>
      </div>
      <h3>${escapeHtml(s.title)}</h3>
      <p class="service-card__lead">${escapeHtml(s.description)}</p>
      ${s.details ? `<p class="service-card__details">${escapeHtml(s.details)}</p>` : ''}
      <ul>${(s.features || []).map((f) => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
    </article>`;
  }).join('');
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
      <div class="stat-item__value" data-value="${escapeAttr(s.value)}">${escapeHtml(s.value)}</div>
      <div class="stat-item__label">${escapeHtml(s.label)}</div>
      <p class="stat-item__desc">${escapeHtml(s.description)}</p>
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

function renderProjectCards(projects, resultsLabel) {
  return projects.map((p, i) => `
    <article class="project-card reveal visible" style="transition-delay:${i * 0.08}s">
      <div class="project-card__image">
        <img src="${resolveImage(p.image)}" alt="${escapeHtml(p.category)}" loading="lazy">
        <span class="project-card__category">${escapeHtml(p.category)}</span>
      </div>
      <div class="project-card__body">
        <p class="project-card__lead">${escapeHtml(p.description)}</p>
        ${p.details ? `<p class="project-card__details">${escapeHtml(p.details)}</p>` : ''}
        ${p.stack?.length ? `<div class="project-card__stack">${p.stack.map((t) => `<span>${escapeHtml(t)}</span>`).join('')}</div>` : ''}
        ${p.results?.length ? `<div class="project-card__results"><strong>${escapeHtml(resultsLabel)}</strong><ul>${p.results.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}</ul></div>` : ''}
        <div class="project-card__meta"><span>${escapeHtml(p.client)}</span><span>${escapeHtml(p.date)}</span></div>
      </div>
    </article>
  `).join('');
}

function renderProjects(projects) {
  const aiGrid = document.getElementById('ai-projects-grid');
  const grid = document.getElementById('projects-grid');
  const otherTitle = document.querySelector('[data-i18n="projects.otherTitle"]');
  if (!projects || (!aiGrid && !grid)) return;

  const visible = filterProjects(projects);
  const resultsLabel = i18n.t('projects.results');
  const aiProjects = visible.filter(isAiProject);
  const otherProjects = visible.filter((p) => !isAiProject(p));

  if (aiGrid) {
    aiGrid.innerHTML = aiProjects.length
      ? renderProjectCards(aiProjects, resultsLabel)
      : `<p class="projects-empty">${escapeHtml(i18n.t('projects.empty'))}</p>`;
  }

  if (grid) {
    grid.innerHTML = otherProjects.length ? renderProjectCards(otherProjects, resultsLabel) : '';
  }

  if (otherTitle) {
    otherTitle.hidden = otherProjects.length === 0;
  }
}

function renderTeam(team) {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  if (!team || !Array.isArray(team)) {
    grid.innerHTML = '';
    return;
  }
  grid.innerHTML = team.map((m, i) => `
    <article class="team-card reveal visible" style="transition-delay:${i * 0.06}s">
      <div class="team-card__image">
        <img src="${resolveImage(m.image)}" alt="${escapeHtml(m.name)}" loading="lazy"
          data-fallback-class="team-card__initials" data-fallback-initials="${escapeAttr(initials(m.name))}">
      </div>
      <div class="team-card__body">
        <h3>${escapeHtml(m.name)}</h3>
        <p class="team-card__role">${escapeHtml(m.role)}</p>
        <p class="team-card__exp">${escapeHtml(m.experience)}</p>
        <p class="team-card__bio">${escapeHtml(m.bio)}</p>
      </div>
    </article>
  `).join('');
  bindImageFallbacks(grid);
}

function renderTestimonials(items) {
  const grid = document.getElementById('reviews-grid');
  if (!items || !grid) return;
  grid.innerHTML = items.map((t, i) => `
    <article class="review-card reveal visible" style="transition-delay:${i * 0.08}s">
      <div class="review-card__stars">★★★★★</div>
      <p>${escapeHtml(t.text)}</p>
      <div class="review-card__author">
        ${t.image
    ? `<div class="review-card__avatar review-card__avatar--photo"><img src="${resolveImage(t.image)}" alt="${escapeHtml(t.name)}" loading="lazy" data-fallback-class="review-card__avatar" data-fallback-initials="${escapeAttr(initials(t.name))}" data-fallback-replace="parent"></div>`
    : `<div class="review-card__avatar">${escapeHtml(initials(t.name))}</div>`}
        <div><h4>${escapeHtml(t.name)}</h4><span>${escapeHtml(t.company)}</span></div>
      </div>
      <p class="review-card__date">${escapeHtml(t.date)}</p>
    </article>
  `).join('');
  bindImageFallbacks(grid);
}

async function loadApiContent() {
  const grids = ['services-grid', 'stats-grid', 'ai-projects-grid', 'projects-grid', 'team-grid', 'reviews-grid'];
  try {
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
  } catch (err) {
    console.error('Failed to load site content:', err);
    grids.forEach((id) => {
      const el = document.getElementById(id);
      if (el && !el.innerHTML.trim()) {
        el.innerHTML = `<p class="projects-empty">${escapeHtml(i18n.t('projects.empty'))}</p>`;
      }
    });
  }
  if (window.i18n?.applyWhySection) i18n.applyWhySection();
  if (window.i18n?.applyProcessSection) i18n.applyProcessSection();
  observeReveal();
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
  if (!header || !burger || !nav) return;

  const links = nav.querySelectorAll('.nav__link[data-section]');
  const sections = [...links].map((l) => document.getElementById(l.dataset.section)).filter(Boolean);
  const scrollOffset = () => header.offsetHeight + 24;

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
    const scrollPos = window.scrollY + scrollOffset();
    let current = '';
    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop) current = sec.id;
    });
    links.forEach((l) => l.classList.toggle('active', l.dataset.section === current));
  });

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(e.target) || burger.contains(e.target)) return;
    burger.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !nav.classList.contains('open')) return;
    burger.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
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
  if (!form || !messageEl) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    messageEl.className = 'form-message';
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = i18n.t('contact.sending');
    try {
      if (IS_STATIC_HOST) {
        const subject = encodeURIComponent('Partnerio — consultation request');
        const body = encodeURIComponent(
          `Name: ${form.name.value.trim()}\nEmail: ${form.email.value.trim()}\nPhone: ${form.phone.value.trim()}\nService: ${form.service.value}\n\n${form.message.value.trim()}`
        );
        window.location.href = `mailto:olyakorneva09@gmail.com?subject=${subject}&body=${body}`;
        messageEl.className = 'form-message success';
        messageEl.textContent = i18n.t('contact.mailtoSuccess');
        form.reset();
        return;
      }
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
        const apiMsg = result.message
          || (typeof result.detail === 'string' ? result.detail : null);
        messageEl.textContent = apiMsg || i18n.t('contact.error');
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

function initFeatureIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const icon = ICONS[el.dataset.icon];
    if (icon) el.innerHTML = icon;
  });
}

async function init() {
  i18n.initLangSwitch();
  initHeader();
  initContactForm();
  initBackToTop();
  initFeatureIcons();
  observeReveal();
  await loadApiContent();
  document.addEventListener('langchange', () => {
    i18n.applyTranslations();
    loadApiContent();
  });
}

document.addEventListener('DOMContentLoaded', init);
