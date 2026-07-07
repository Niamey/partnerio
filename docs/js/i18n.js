const LANG_KEY = 'partnerio_lang';

const UI = {
  uk: {
    meta: {
      title: 'Partnerio | Розробка, тестування ПЗ та ШІ-рішення для enterprise',
      description: 'Partnerio — IT-компанія повного циклу з 2010 року. Розробка ПЗ, QA, DevOps, ШІ-проєкти та підтримка для fintech, retail і manufacturing. Офіси в Києві та Львові. 120+ інженерів, 250+ проєктів.',
    },
    topbar: {
      hours: 'Пн–Пт · 9:00–18:00 · Київ та Львів',
    },
    nav: {
      about: 'Про нас',
      services: 'Послуги',
      projects: 'Проєкти',
      team: 'Команда',
      reviews: 'Відгуки',
      contact: "Зв'язатися",
      menu: 'Меню',
    },
    hero: {
      eyebrow: 'IT-компанія повного циклу · 120+ інженерів · з 2010 року',
      title: 'Інженерія програмного забезпечення та ШІ для бізнесу',
      text: 'Partnerio — технологічний партнер для компаній, яким потрібна надійна розробка з передбачуваними термінами, системне тестування та впровадження інтелектуальних рішень з вимірюваним ROI. Працюємо з fintech, retail, manufacturing та enterprise-клієнтами з України, ЄС і США.',
      cta1: 'Запросити консультацію',
      cta2: 'Переглянути кейси',
      cert1: 'ISO-сумісні процеси',
      cert2: 'Agile / Scrum',
      cert3: 'NDA та SLA',
      stat1: 'проєктів',
      stat2: 'експертів',
      stat3: 'клієнтів',
      imgAlt: 'Офіс Partnerio',
    },
    trust: {
      title: 'Галузі, з якими ми працюємо',
    },
    features: {
      f1title: 'Міжнародний досвід',
      f1text: 'Клієнти з 15 країн — від стартапів до enterprise. Понад 250 проєктів: банківські системи, e-commerce, production ML, core banking QA. Знаємо regulated-середовище та вимоги compliance.',
      f2title: 'Системний підхід',
      f2text: 'Починаємо з discovery і архітектурного аудиту, проходимо development і QA, залишаємось на підтримці з SLA. Кожен етап — з документацією, демо та прозорою звітністю для stakeholders.',
      f3title: 'Експертна команда',
      f3text: '120+ розробників, QA-інженерів, DevOps та ML-спеціалістів. 40% — senior і lead рівень. Середній досвід у команді понад 7 років; 7 галузей спеціалізації, включно з miltech.',
    },
    about: {
      label: 'Про нас',
      title: 'Провідна IT-компанія повного циклу',
      lead: 'Ми допомагаємо бізнесу впроваджувати технології з вимірюваним результатом — скороченням time-to-market, зниженням operational cost і підвищенням надійності систем.',
      body: 'Partnerio з офісами в Києві та Львові працює з 2010 року. Спеціалізуємося на розробці ПЗ, комплексному тестуванні, DevOps та створенні ШІ-рішень для корпоративного та середнього бізнесу.',
      body2: 'Працюємо за моделями dedicated team, fixed price і T&M — підбираємо формат під ваш бюджет і stage продукту. Кожен проєкт супроводжуємо PM, weekly status і доступом до backlog у вашій системі.',
      check1: 'Enterprise, scale-up та стартап-проєкти',
      check2: 'Agile / Scrum з sprint demo та retrospectives',
      check3: 'Прозора звітність, KPI та SLA на кожному етапі',
      check4: 'NDA, IP transfer і security-by-design',
      cta: "Зв'язатися з нами",
      badge: 'років на ринку',
      imgAlt: 'Команда Partnerio',
    },
    process: {
      label: 'Процес',
      title: 'Як ми працюємо',
      subtitle: 'Структурований підхід від discovery до production — з чіткими артефактами на кожному етапі',
      s1title: 'Аналіз',
      s1text: 'Workshop з бізнесом і IT, аудит існуючих систем, user stories, оцінка ризиків і roadmap з milestones.',
      s2title: 'Розробка',
      s2text: '2-тижневі спринти, code review, CI/CD, регулярні демо для product owner і stakeholders.',
      s3title: 'Тестування',
      s3text: 'Test plan, manual + automated QA, performance і security checks перед кожним релізом.',
      s4title: 'Запуск',
      s4text: 'Blue-green/canary deploy, runbooks, навчання команди клієнта і передача на L2/L3 support.',
    },
    services: {
      label: 'Послуги',
      title: 'Напрямки роботи',
      subtitle: 'Шість напрямків — від MVP до enterprise-платформ, QA, DevOps, ШІ та супроводу після launch',
    },
    projects: {
      label: 'Портфоліо',
      title: 'Реалізовані проєкти',
      subtitle: 'Реальні кейси з метриками: fintech, retail, banking QA та computer vision на виробництві',
      results: 'Результати',
    },
    tech: {
      label: 'Технології',
      title: 'Технологічний стек',
      subtitle: 'Сучасний стек — перевірений у production для high-load і regulated-продуктів',
    },
    team: {
      label: 'Команда',
      title: 'Ключові експерти',
      subtitle: 'Керівництво з 12–20 роками досвіду в enterprise-розробці, fintech і scaling IT-команд',
    },
    reviews: {
      label: 'Відгуки',
      title: 'Рекомендації клієнтів',
      subtitle: 'Відгуки product owner і CTO — про терміни, якість комунікації та бізнес-результат',
    },
    cta: {
      title: 'Обговоримо ваш проєкт?',
      text: 'Розкажіть про задачу — проведемо discovery call, уточнимо scope і підготуємо комерційну пропозицію з термінами та командою протягом 1–2 робочих днів.',
      btn: "Зв'язатися",
    },
    contact: {
      label: 'Контакти',
      title: "Зв'яжіться з нами",
      text: "Опишіть задачу, бажані терміни та бюджет (якщо є) — наш менеджер зв'яжеться з вами протягом одного робочого дня для уточнення деталей і призначення discovery call.",
      kyiv: 'Київ',
      lviv: 'Львів',
      hours: 'Пн–Пт 9:00–18:00',
      formTitle: 'Заявка на консультацію',
      name: "Ім'я та прізвище *",
      email: 'Email *',
      phone: 'Телефон',
      service: 'Послуга',
      message: 'Опис проєкту *',
      submit: 'Надіслати заявку',
      sending: 'Надсилання...',
      privacy: 'Надсилаючи форму, ви погоджуєтесь на обробку персональних даних відповідно до політики конфіденційності.',
      error: 'Не вдалося надіслати форму. Спробуйте пізніше.',
      serviceEmpty: 'Оберіть напрямок',
      serviceDev: 'Розробка ПЗ',
      serviceTest: 'Тестування ПЗ',
      serviceAi: 'ШІ-проєкти',
      serviceDevops: 'DevOps',
      serviceConsult: 'IT-консалтинг',
      serviceSupport: 'Підтримка',
      namePh: 'Іван Петренко',
      emailPh: 'ivan@company.ua',
      phonePh: '+38 (0__) ___-__-__',
      messagePh: 'Коротко опишіть задачу або запитання...',
    },
    footer: {
      tagline: 'Розробка, тестування ПЗ, DevOps та ШІ-рішення для бізнесу. Ваш технологічний партнер з 2010 року.',
      company: 'Компанія',
      services: 'Послуги',
      contacts: 'Контакти',
      dev: 'Розробка',
      testing: 'Тестування',
      ai: 'ШІ-проєкти',
      rights: 'Усі права захищені.',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання',
    },
    backTop: 'Нагору',
  },
  en: {
    meta: {
      title: 'Partnerio | Software Development, QA & AI Solutions for Enterprise',
      description: 'Partnerio — full-cycle IT company since 2010. Software development, QA, DevOps, AI projects, and support for fintech, retail, and manufacturing. Offices in Kyiv and Lviv. 120+ engineers, 250+ projects.',
    },
    topbar: {
      hours: 'Mon–Fri · 9:00–18:00 · Kyiv & Lviv',
    },
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      team: 'Team',
      reviews: 'Reviews',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      eyebrow: 'Full-cycle IT company · 120+ engineers · since 2010',
      title: 'Software engineering and AI for business',
      text: 'Partnerio is a technology partner for companies that need reliable development with predictable timelines, systematic testing, and intelligent solutions with measurable ROI. We work with fintech, retail, manufacturing, and enterprise clients across Ukraine, the EU, and the US.',
      cta1: 'Request a consultation',
      cta2: 'View case studies',
      cert1: 'ISO-aligned processes',
      cert2: 'Agile / Scrum',
      cert3: 'NDA & SLA',
      stat1: 'projects',
      stat2: 'experts',
      stat3: 'clients',
      imgAlt: 'Partnerio office',
    },
    trust: {
      title: 'Industries we work with',
    },
    features: {
      f1title: 'International experience',
      f1text: 'Clients in 15 countries — from startups to enterprise. Over 250 projects: banking systems, e-commerce, production ML, core banking QA. We understand regulated environments and compliance requirements.',
      f2title: 'Systematic approach',
      f2text: 'We start with discovery and architecture audit, move through development and QA, and stay on for SLA-backed support. Every stage includes documentation, demos, and transparent reporting for stakeholders.',
      f3title: 'Expert team',
      f3text: '120+ developers, QA engineers, DevOps, and ML specialists. 40% at senior and lead level. Average team experience over 7 years across 7 industry verticals, including miltech.',
    },
    about: {
      label: 'About us',
      title: 'Leading full-cycle IT company',
      lead: 'We help businesses adopt technology with measurable results — faster time-to-market, lower operational costs, and more reliable systems.',
      body: 'Partnerio has offices in Kyiv and Lviv and has been operating since 2010. We specialize in software development, comprehensive testing, DevOps, and AI solutions for corporate and mid-market businesses.',
      body2: 'We work under dedicated team, fixed price, and T&M models — choosing the format that fits your budget and product stage. Every project includes a PM, weekly status updates, and backlog access in your system.',
      check1: 'Enterprise, scale-up, and startup projects',
      check2: 'Agile / Scrum with sprint demos and retrospectives',
      check3: 'Transparent reporting, KPIs, and SLA at every stage',
      check4: 'NDA, IP transfer, and security-by-design',
      cta: 'Contact us',
      badge: 'years on the market',
      imgAlt: 'Partnerio team',
    },
    process: {
      label: 'Process',
      title: 'How we work',
      subtitle: 'A structured approach from discovery to production — with clear deliverables at every stage',
      s1title: 'Analysis',
      s1text: 'Workshops with business and IT, system audit, user stories, risk assessment, and a milestone-based roadmap.',
      s2title: 'Development',
      s2text: 'Two-week sprints, code review, CI/CD, and regular demos for product owners and stakeholders.',
      s3title: 'Testing',
      s3text: 'Test plan, manual + automated QA, performance and security checks before every release.',
      s4title: 'Launch',
      s4text: 'Blue-green/canary deploy, runbooks, client team training, and handoff to L2/L3 support.',
    },
    services: {
      label: 'Services',
      title: 'Areas of expertise',
      subtitle: 'Six practice areas — from MVP to enterprise platforms, QA, DevOps, AI, and post-launch support',
    },
    projects: {
      label: 'Portfolio',
      title: 'Delivered projects',
      subtitle: 'Real case studies with metrics: fintech, retail, banking QA, and manufacturing computer vision',
      results: 'Key results',
    },
    tech: {
      label: 'Technologies',
      title: 'Technology stack',
      subtitle: 'Modern stack — battle-tested in production for high-load and regulated products',
    },
    team: {
      label: 'Team',
      title: 'Key experts',
      subtitle: 'Leadership with 12–20 years of experience in enterprise development, fintech, and scaling IT teams',
    },
    reviews: {
      label: 'Reviews',
      title: 'Client testimonials',
      subtitle: 'Feedback from product owners and CTOs — on timelines, communication quality, and business outcomes',
    },
    cta: {
      title: 'Ready to discuss your project?',
      text: 'Tell us about your task — we will run a discovery call, clarify scope, and prepare a commercial proposal with timeline and team within 1–2 business days.',
      btn: 'Contact us',
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      text: 'Describe your task, desired timeline, and budget (if available) — our manager will contact you within one business day to clarify details and schedule a discovery call.',
      kyiv: 'Kyiv',
      lviv: 'Lviv',
      hours: 'Mon–Fri 9:00–18:00',
      formTitle: 'Consultation request',
      name: 'Full name *',
      email: 'Email *',
      phone: 'Phone',
      service: 'Service',
      message: 'Project description *',
      submit: 'Submit request',
      sending: 'Sending...',
      privacy: 'By submitting this form, you agree to the processing of personal data in accordance with our privacy policy.',
      error: 'Failed to submit the form. Please try again later.',
      serviceEmpty: 'Select a service',
      serviceDev: 'Software development',
      serviceTest: 'Software testing',
      serviceAi: 'AI projects',
      serviceDevops: 'DevOps',
      serviceConsult: 'IT consulting',
      serviceSupport: 'Support',
      namePh: 'John Smith',
      emailPh: 'john@company.com',
      phonePh: '+1 (___) ___-____',
      messagePh: 'Briefly describe your task or question...',
    },
    footer: {
      tagline: 'Software development, QA, DevOps, and AI solutions for business. Your technology partner since 2010.',
      company: 'Company',
      services: 'Services',
      contacts: 'Contact',
      dev: 'Development',
      testing: 'Testing',
      ai: 'AI projects',
      rights: 'All rights reserved.',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
    },
    backTop: 'Back to top',
  },
};

let currentLang = localStorage.getItem(LANG_KEY) || 'uk';

function t(key) {
  const parts = key.split('.');
  let node = UI[currentLang];
  for (const part of parts) {
    node = node?.[part];
  }
  if (node !== undefined) return node;
  node = UI.uk;
  for (const part of parts) {
    node = node?.[part];
  }
  return node ?? key;
}

function getLang() {
  return currentLang;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });

  const title = document.querySelector('title');
  if (title) title.textContent = t('meta.title');

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t('meta.description'));

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  if (!UI[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations();
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

function initLangSwitch() {
  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  applyTranslations();
}

window.i18n = { t, getLang, setLang, applyTranslations, initLangSwitch };
