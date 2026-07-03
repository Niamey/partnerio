const LANG_KEY = 'partnerio_lang';

const UI = {
  uk: {
    meta: {
      title: 'Partnerio | Розробка, тестування ПЗ та ШІ-рішення',
      description: 'Partnerio — розробка, тестування ПЗ та ШІ-проєкти. Ваш надійний технологічний партнер.',
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
      eyebrow: 'IT-компанія повного циклу · з 2010 року',
      title: 'Інженерія програмного забезпечення та ШІ для бізнесу',
      text: 'Partnerio — технологічний партнер для компаній, яким потрібна надійна розробка, системне тестування та впровадження інтелектуальних рішень.',
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
      f1text: 'Клієнти з 15 країн. Понад 250 проєктів для компаній з України, ЄС та США.',
      f2title: 'Системний підхід',
      f2text: 'Від технічного аудиту до повного циклу розробки, тестування та підтримки.',
      f3title: 'Експертна команда',
      f3text: '120+ розробників, QA-інженерів та ML-спеціалістів у 6 галузях.',
    },
    about: {
      label: 'Про нас',
      title: 'Провідна IT-компанія повного циклу',
      lead: 'Ми допомагаємо бізнесу впроваджувати технології з вимірюваним результатом.',
      body: 'Partnerio з офісами в Києві та Львові працює з 2010 року. Спеціалізуємося на розробці ПЗ, комплексному тестуванні та створенні ШІ-рішень для корпоративного та середнього бізнесу.',
      body2: 'Ми працюємо як технологічний партнер: беремо на себе відповідальність за архітектуру, якість коду, тестування та впровадження. Кожен проєкт супроводжується чітким планом, регулярними демо та звітністю для стейкхолдерів.',
      check1: 'Enterprise та стартап-проєкти',
      check2: 'Agile / Scrum методологія',
      check3: 'Прозора звітність та SLA',
      cta: "Зв'язатися з нами",
      badge: 'років на ринку',
      imgAlt: 'Команда Partnerio',
    },
    values: {
      label: 'Підхід',
      title: 'Наші цінності',
      subtitle: 'Принципи, на яких будуємо довгострокову співпрацю з клієнтами',
      v1title: 'Прозорість',
      v1text: 'Відкрита комунікація, зрозумілі естимейти та регулярні звіти по спринтах.',
      v2title: 'Якість',
      v2text: 'Code review, автотести та QA на кожному етапі — від MVP до enterprise.',
      v3title: 'Партнерство',
      v3text: 'Працюємо як розширення вашої команди, а не як зовнішній підрядник.',
      v4title: 'Інновації',
      v4text: 'Впроваджуємо сучасні технології та ШІ там, де вони дають вимірюваний ефект.',
    },
    history: {
      label: 'Історія',
      title: 'Шлях Partnerio',
      y1title: 'Заснування',
      y1text: 'Старт у Києві. Перші проєкти з веб-розробки та QA для локального бізнесу.',
      y2title: 'Міжнародні клієнти',
      y2text: 'Вихід на ринки ЄС та США. Розширення команди до 40+ фахівців.',
      y3title: 'Офіс у Львові',
      y3text: 'Відкриття другого офісу. Запуск напрямку DevOps та хмарних рішень.',
      y4title: 'ШІ-напрямок',
      y4text: 'Створення ML-лабораторії. Перші LLM та computer vision проєкти для enterprise.',
      y5title: '250+ проєктів',
      y5text: '120+ експертів, клієнти з 15 країн. Повний цикл: розробка, QA, ШІ, підтримка.',
    },
    process: {
      label: 'Процес',
      title: 'Як ми працюємо',
      subtitle: 'Структурований підхід від аналізу до production',
      s1title: 'Аналіз',
      s1text: 'Дослідження цілей, аудит та формування roadmap.',
      s2title: 'Розробка',
      s2text: 'Ітеративна реалізація з регулярними демо.',
      s3title: 'Тестування',
      s3text: 'QA, автотести та контроль якості на кожному етапі.',
      s4title: 'Запуск',
      s4text: 'Деплой, документація та технічна підтримка.',
    },
    services: {
      label: 'Послуги',
      title: 'Напрямки роботи',
      subtitle: 'Повний спектр IT-послуг для вашого бізнесу',
    },
    projects: {
      label: 'Портфоліо',
      title: 'Реалізовані проєкти',
    },
    tech: {
      label: 'Технології',
      title: 'Технологічний стек',
    },
    team: {
      label: 'Команда',
      title: 'Ключові експерти',
    },
    reviews: {
      label: 'Відгуки',
      title: 'Рекомендації клієнтів',
    },
    models: {
      label: 'Співпраця',
      title: 'Формати роботи',
      subtitle: 'Оберіть модель, яка відповідає вашим цілям та бюджету',
      m1title: 'Виділена команда',
      m1text: 'Розробники, QA та аналітики працюють виключно над вашим продуктом. Гнучке масштабування складу.',
      m2title: 'Проєкт під ключ',
      m2text: 'Фіксований scope, терміни та бюджет. Від discovery до релізу та передачі в експлуатацію.',
      m3title: 'Аудит та консалтинг',
      m3text: 'Технічний аудит, архітектурний review, оцінка ризиків та roadmap модернізації.',
    },
    faq: {
      label: 'FAQ',
      title: 'Часті запитання',
    },
    cta: {
      title: 'Обговоримо ваш проєкт?',
      text: 'Підготуємо комерційну пропозицію протягом 1–2 робочих днів.',
      btn: "Зв'язатися",
    },
    contact: {
      label: 'Контакти',
      title: "Зв'яжіться з нами",
      text: "Опишіть задачу — наш менеджер зв'яжеться з вами для уточнення деталей.",
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
      tagline: 'Розробка, тестування ПЗ та ШІ-рішення для бізнесу.',
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
      title: 'Partnerio | Software Development, QA & AI Solutions',
      description: 'Partnerio — software development, QA, and AI projects. Your trusted technology partner.',
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
      eyebrow: 'Full-cycle IT company · since 2010',
      title: 'Software engineering and AI for business',
      text: 'Partnerio is a technology partner for companies that need reliable development, systematic testing, and intelligent solutions.',
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
      f1text: 'Clients from 15 countries. Over 250 projects for companies in Ukraine, the EU, and the US.',
      f2title: 'Systematic approach',
      f2text: 'From technical audit to full-cycle development, testing, and support.',
      f3title: 'Expert team',
      f3text: '120+ developers, QA engineers, and ML specialists across 6 industries.',
    },
    about: {
      label: 'About us',
      title: 'Leading full-cycle IT company',
      lead: 'We help businesses adopt technology with measurable results.',
      body: 'Partnerio has offices in Kyiv and Lviv and has been operating since 2010. We specialize in software development, comprehensive testing, and AI solutions for corporate and mid-market businesses.',
      body2: 'We work as a technology partner: we take responsibility for architecture, code quality, testing, and delivery. Every project includes a clear plan, regular demos, and stakeholder reporting.',
      check1: 'Enterprise and startup projects',
      check2: 'Agile / Scrum methodology',
      check3: 'Transparent reporting and SLA',
      cta: 'Contact us',
      badge: 'years on the market',
      imgAlt: 'Partnerio team',
    },
    values: {
      label: 'Approach',
      title: 'Our values',
      subtitle: 'Principles that guide long-term partnerships with our clients',
      v1title: 'Transparency',
      v1text: 'Open communication, clear estimates, and regular sprint reports.',
      v2title: 'Quality',
      v2text: 'Code review, test automation, and QA at every stage — from MVP to enterprise.',
      v3title: 'Partnership',
      v3text: 'We work as an extension of your team, not as an external vendor.',
      v4title: 'Innovation',
      v4text: 'We adopt modern technologies and AI where they deliver measurable impact.',
    },
    history: {
      label: 'History',
      title: 'The Partnerio journey',
      y1title: 'Founded',
      y1text: 'Started in Kyiv. First web development and QA projects for local businesses.',
      y2title: 'International clients',
      y2text: 'Expanded to EU and US markets. Grew the team to 40+ specialists.',
      y3title: 'Lviv office',
      y3text: 'Opened a second office. Launched DevOps and cloud solutions practice.',
      y4title: 'AI practice',
      y4text: 'Built an ML lab. First LLM and computer vision projects for enterprise.',
      y5title: '250+ projects',
      y5text: '120+ experts, clients in 15 countries. Full cycle: development, QA, AI, support.',
    },
    process: {
      label: 'Process',
      title: 'How we work',
      subtitle: 'A structured approach from analysis to production',
      s1title: 'Analysis',
      s1text: 'Goal research, audit, and roadmap planning.',
      s2title: 'Development',
      s2text: 'Iterative delivery with regular demos.',
      s3title: 'Testing',
      s3text: 'QA, test automation, and quality control at every stage.',
      s4title: 'Launch',
      s4text: 'Deployment, documentation, and technical support.',
    },
    services: {
      label: 'Services',
      title: 'Areas of expertise',
      subtitle: 'Full range of IT services for your business',
    },
    projects: {
      label: 'Portfolio',
      title: 'Delivered projects',
    },
    tech: {
      label: 'Technologies',
      title: 'Technology stack',
    },
    team: {
      label: 'Team',
      title: 'Key experts',
    },
    reviews: {
      label: 'Reviews',
      title: 'Client testimonials',
    },
    models: {
      label: 'Engagement',
      title: 'Engagement models',
      subtitle: 'Choose the model that fits your goals and budget',
      m1title: 'Dedicated team',
      m1text: 'Developers, QA, and analysts work exclusively on your product. Flexible team scaling.',
      m2title: 'Fixed-scope project',
      m2text: 'Defined scope, timeline, and budget. From discovery to release and handover.',
      m3title: 'Audit & consulting',
      m3text: 'Technical audit, architecture review, risk assessment, and modernization roadmap.',
    },
    faq: {
      label: 'FAQ',
      title: 'Frequently asked questions',
    },
    cta: {
      title: 'Ready to discuss your project?',
      text: 'We will prepare a commercial proposal within 1–2 business days.',
      btn: 'Contact us',
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      text: 'Describe your task — our manager will contact you to clarify the details.',
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
      tagline: 'Software development, QA, and AI solutions for business.',
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
