const LANG_KEY = 'partnerio_lang';

const UI = {
  uk: {
    meta: {
      title: 'Partnerio | ШІ-рішення: LLM, NLP, Computer Vision та розробка ПЗ',
      description: 'Partnerio — AI-first IT-компанія з 2010 року. LLM, RAG, NLP, computer vision, голосові AI та production ML. Також розробка ПЗ, QA і DevOps. Київ, Львів. 120+ інженерів, 250+ проєктів.',
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
      eyebrow: 'AI-first компанія · LLM · NLP · Computer Vision · з 2010 року',
      title: 'Штучний інтелект та інженерія ПЗ для вашого бізнесу',
      tagline: 'Від discovery і PoC до production ML — з KPI, SLA та підтримкою після запуску',
      text: 'Partnerio — AI-first партнер для компаній, які будують продукти на штучному інтелекті: LLM-асистенти, RAG, NLP, computer vision і голосові рішення. Допомагаємо пройти шлях від ідеї до production з вимірюваним ROI — accuracy, latency, adoption і cost savings. Поруч надійна розробка ПЗ, QA і DevOps для fintech, retail, manufacturing, healthtech і enterprise в Україні, ЄС та США.',
      cta1: 'Обговорити ШІ-проєкт',
      cta2: 'Переглянути AI-кейси',
      cert1: 'LLM · RAG · fine-tuning',
      cert2: 'NLP · Computer Vision',
      cert3: 'Голосові AI · MLOps',
      stat1: 'проєктів',
      stat2: 'ML/AI-експертів',
      stat3: 'клієнтів',
      imgAlt: 'ШІ, роботи та високі технології — Partnerio',
      accentAlt: 'Робот та штучний інтелект',
      visualBadge: 'AI · Robotics · High Tech',
    },
    showcase: {
      label: 'ШІ в дії',
      title: 'Високі технології, які ми впроваджуємо',
      subtitle: 'LLM, computer vision, голосові AI та MLOps — від лабораторії до production. Реальні кейси з метриками для fintech, manufacturing, legal, insurance і EdTech.',
      llmTag: 'LLM · RAG',
      llmTitle: 'Розумні асистенти та чат-боти',
      llmText: 'Fine-tuned LLM, RAG на корпоративних даних, intent-класифікація, moderation і безпечна ескалація до оператора з повним контекстом діалогу.',
      llmAlt: 'LLM та RAG — штучний інтелект',
      cvTag: 'Computer Vision',
      cvTitle: 'Комп\'ютерний зір на виробництві',
      cvText: 'Object detection, OCR, відеоаналітика, change detection і edge-inference у реальному часі — від конвеєра до аналізу аерофото.',
      cvAlt: 'Computer Vision — контроль якості',
      voiceTag: 'Voice AI',
      voiceTitle: 'Голосові інтерфейси',
      voiceText: 'Whisper ASR, Speech-to-Text, Text-to-Speech, IVR, call analytics і багатомовні голосові інтерфейси для кол-центрів і логістики.',
      voiceAlt: 'Голосові AI-технології',
      mlopsTag: 'MLOps',
      mlopsTitle: 'ML у production',
      mlopsText: 'CI/CD для моделей, feature store, моніторинг drift, A/B-тести, canary deploys і масштабування inference на GPU-кластерах.',
      mlopsAlt: 'MLOps — інфраструктура для ML',
    },
    trust: {
      title: 'Галузі, з якими ми працюємо',
      subtitle: '15+ років досвіду в regulated-середовищах — fintech, banking, manufacturing, healthtech, logistics, EdTech і defense',
    },
    why: {
      label: 'Чому Partnerio',
      title: 'Партнер, який говорить мовою бізнесу та ШІ',
      subtitle: 'Ми не продаємо «магію AI» — будуємо рішення з вимірюваним ефектом, прозорим процесом і командою, яка залишається з вами після launch',
      w1title: 'Вимірюваний ROI',
      w1text: 'Кожен AI-проєкт стартує з KPI: accuracy, latency, adoption, cost savings. Фіксуємо baseline, відстежуємо метрики після launch і звітуємо про бізнес-ефект — не лише про «точність моделі».',
      w2title: 'Повний цикл delivery',
      w2text: 'Data science, backend, frontend, QA, DevOps і підтримка — в одній команді. Не потрібно координувати п\'ять підрядників: від PoC до production і L2/L3 support під SLA.',
      w3title: 'Безпека та compliance',
      w3text: 'NDA, IP transfer, on-prem і hybrid deployment, audit trails, GDPR/HIPAA-ready процеси. Досвід у fintech, banking, insurance, healthtech і miltech — розуміємо вимоги регуляторів.',
      w4title: 'Прозорість і передбачуваність',
      w4text: 'Weekly demo, доступ до backlog, burn-down і ризики — без «чорної скриньки». PM з досвідом у вашій галузі, англомовна комунікація, зручні години для EU та US клієнтів.',
    },
    features: {
      f1title: 'ШІ в production',
      f1text: 'Виводимо ML і LLM у production: від PoC, data audit і fine-tuning до MLOps, моніторингу drift і масштабування. 40+ AI-проєктів — кол-центри, fraud detection, manufacturing CV, RAG для insurance і banking QA.',
      f2title: 'NLP, CV і голос',
      f2text: 'LLM-асистенти, RAG, multi-agent workflows, OCR, object detection, відеоаналітика, Speech-to-Text і Text-to-Speech — повний спектр інтелектуальних модальностей для enterprise.',
      f3title: 'AI-команда + delivery',
      f3text: '35+ ML/NLP/CV-інженерів і data scientists — 40% senior/lead. Поруч backend, frontend, QA і DevOps для end-to-end delivery: один партнер від discovery до support.',
    },
    about: {
      label: 'Про нас',
      title: 'AI-first IT-компанія повного циклу',
      lead: 'Ми допомагаємо бізнесу впроваджувати штучний інтелект з вимірюваним результатом: автоматизація процесів, зниження cost-to-serve, нові AI-продукти та швидший time-to-market. Кожен AI-проєкт — з KPI: accuracy, latency, adoption, ROI.',
      body: 'Partnerio — компанія, орієнтована на ШІ. З офісами в Києві та Львові працюємо з 2010 року: LLM, RAG, NLP, computer vision, голосові AI та класичний ML — як основний фокус. Поруч — розробка ПЗ, QA, DevOps і хмара, щоб довести AI-рішення до production і підтримувати їх. У команді 120+ інженерів, з них 35+ — ML/NLP/CV і data science.',
      body2: 'Працюємо за моделями dedicated team, fixed price і T&M — підбираємо формат під ваш бюджет, stage продукту та внутрішні процеси. Кожен проєкт супроводжує PM з досвідом у вашій галузі: weekly status, burn-down, ризики та доступ до backlog у Jira, Linear або вашій системі.',
      body3: 'Маємо досвід у fintech, retail, manufacturing, healthtech, logistics і miltech — розуміємо regulated-середовище, аудит, compliance-звіти та вимоги до безпеки даних. Будуємо архітектуру «на вирост»: від MVP і PoC до high-load платформ з мільйонами транзакцій на добу.',
      body4: 'Після запуску не зникаємо — беремо підтримку проектів на себе: L2/L3 support, моніторинг 24/7 або в робочі години, інцидент-менеджмент, CI/CD, security patches і плановий розвиток функціоналу за SLA. Ведемо runbook, on-call, monthly health-check і roadmap оновлень. Більшість клієнтів працюють з нами 3+ роки — розширюють команди та запускають нові модулі.',
      check1: 'Enterprise, scale-up і стартап-проєкти — від MVP до core banking',
      check2: 'Agile / Scrum: sprint demo, retrospectives, прогнозовані релізи',
      check3: 'Прозора звітність, KPI, burn rate і SLA на кожному етапі',
      check4: 'NDA, IP transfer, security-by-design і audit-ready документація',
      check5: 'Dedicated team — інженери під ваш бренд або embedded у ваш процес',
      check6: 'AI-first: LLM, NLP, CV, голос + розробка, QA і DevOps в одному партнері',
      check7: 'Офіси в Україні, англомовна комунікація, зручні години для EU та US',
      check8: 'Підтримка проектів після запуску — SLA, моніторинг, інциденти та розвиток продукту',
      cta: "Зв'язатися з нами",
      badge: 'років на ринку',
      imgAlt: 'AI-команда Partnerio',
      imgAltMain: 'Роботизовані технології та автоматизація',
      imgAltAi: 'Мікросхеми та високі технології',
      imgAltData: 'Штучний інтелект та LLM',
    },
    process: {
      label: 'Процес',
      title: 'Як ми працюємо',
      subtitle: 'Структурований підхід від discovery і data audit до production, масштабування та довгострокової підтримки AI-рішень',
      s1title: 'Аналіз',
      s1text: 'Workshop з бізнесом і IT, аудит даних і систем, user stories, оцінка AI-readiness, ризиків і roadmap з milestones та KPI.',
      s2title: 'Розробка',
      s2text: '2-тижневі спринти, PoC → MVP → production, code review, CI/CD, регулярні демо для product owner і stakeholders.',
      s3title: 'Тестування',
      s3text: 'Test plan, manual + automated QA, evaluation набори для ML, performance, security і bias checks перед кожним релізом.',
      s4title: 'Запуск',
      s4text: 'Blue-green/canary deploy, smoke-тести у production, моніторинг моделей, документація, навчання команди клієнта та handoff на support.',
      s5title: 'Підтримка проектів',
      s5text: 'L1/L2/L3 супровід: drift monitoring, retrain, інциденти, security patches, масштабування inference і розвиток функціоналу за SLA.',
    },
    services: {
      label: 'Послуги',
      title: 'Напрямки роботи',
      subtitle: 'ШІ в центрі — LLM, RAG, computer vision, голос, ML agents + розробка, QA, DevOps і підтримка. Кожна послуга — з детальним описом, стеком і deliverables.',
    },
    projects: {
      label: 'Портфоліо',
      title: 'Реалізовані проєкти',
      subtitle: '13+ AI-кейсів з метриками: LLM для кол-центру, RAG для insurance, CV на виробництві, fraud ML, multi-agent legal ops, MilTech і EdTech',
      results: 'Результати',
    },
    tech: {
      label: 'Технології',
      title: 'Технологічний стек',
      subtitle: 'Production-ready стек ШІ: LLM, RAG, computer vision, голос, AI agents, MLOps і векторні бази даних',
      groupDev: 'Розробка та інфраструктура',
      groupAI: 'ШІ та машинне навчання',
      groupNLP: 'NLP та LLM',
      groupRAG: 'RAG та векторні БД',
      groupCV: 'Computer Vision',
      groupVoice: 'Голосові технології',
      groupAgents: 'AI Agents та автоматизація',
    },
    team: {
      label: 'Команда',
      title: 'Ключові експерти',
      subtitle: 'Керівництво з 12–20 роками досвіду в AI/ML, enterprise-архітектурі, fintech, scaling команд і delivery regulated-продуктів',
    },
    reviews: {
      label: 'Відгуки',
      title: 'Рекомендації клієнтів',
      subtitle: 'Відгуки product owner, CTO і VP Engineering — про терміни, якість комунікації, прозорість процесу та вимірюваний бізнес-результат',
    },
    cta: {
      title: 'Обговоримо ваш AI-проєкт?',
      text: 'Розкажіть про задачу — LLM, RAG, NLP, computer vision, голос або класичний ML. Проведемо discovery call, оцінимо data readiness і підготуємо комерційну пропозицію з командою, термінами та KPI протягом 1–2 робочих днів.',
      b1: 'Безкоштовний discovery call',
      b2: 'Оцінка data readiness',
      b3: 'Пропозиція з командою та термінами',
      btn: "Зв'язатися",
    },
    contact: {
      label: 'Контакти',
      title: "Зв'яжіться з нами",
      text: "Опишіть задачу, бажані терміни, бюджет (якщо є) і stage продукту — наш менеджер зв'яжеться протягом одного робочого дня, уточнить деталі та призначить discovery call з AI/ML-експертом.",
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
      tagline: 'AI-first: LLM, NLP, Computer Vision, голосові рішення, AI agents та розробка ПЗ. Ваш технологічний партнер з 2010 року — Київ, Львів, remote для EU та US.',
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
      title: 'Partnerio | AI Solutions: LLM, NLP, Computer Vision & Software Engineering',
      description: 'Partnerio — AI-first IT company since 2010. LLM, RAG, NLP, computer vision, voice AI, and production ML. Plus software development, QA, and DevOps. Kyiv, Lviv. 120+ engineers, 250+ projects.',
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
      eyebrow: 'AI-first company · LLM · NLP · Computer Vision · since 2010',
      title: 'Artificial intelligence and software engineering for your business',
      tagline: 'From discovery and PoC to production ML — with KPIs, SLA, and post-launch support',
      text: 'Partnerio is an AI-first partner for companies building products on artificial intelligence: LLM assistants, RAG, NLP, computer vision, and voice solutions. We help you go from idea to production with measurable ROI — accuracy, latency, adoption, and cost savings. We also deliver reliable software development, QA, and DevOps for fintech, retail, manufacturing, healthtech, and enterprise across Ukraine, the EU, and the US.',
      cta1: 'Discuss your AI project',
      cta2: 'View AI case studies',
      cert1: 'LLM · RAG · fine-tuning',
      cert2: 'NLP · Computer Vision',
      cert3: 'Voice AI · MLOps',
      stat1: 'projects',
      stat2: 'ML/AI experts',
      stat3: 'clients',
      imgAlt: 'AI, robotics, and high technology — Partnerio',
      accentAlt: 'Robot and artificial intelligence',
      visualBadge: 'AI · Robotics · High Tech',
    },
    showcase: {
      label: 'AI in action',
      title: 'High technology we deliver',
      subtitle: 'LLM, computer vision, voice AI, and MLOps — from lab to production. Real case studies with metrics for fintech, manufacturing, legal, insurance, and EdTech.',
      llmTag: 'LLM · RAG',
      llmTitle: 'Smart assistants and chatbots',
      llmText: 'Fine-tuned LLM, RAG on corporate data, intent classification, moderation, and safe handoff to human agents with full dialog context.',
      llmAlt: 'LLM and RAG — artificial intelligence',
      cvTag: 'Computer Vision',
      cvTitle: 'Computer vision in manufacturing',
      cvText: 'Object detection, OCR, video analytics, change detection, and real-time edge inference — from factory lines to aerial imagery analysis.',
      cvAlt: 'Computer vision — quality control',
      voiceTag: 'Voice AI',
      voiceTitle: 'Voice interfaces',
      voiceText: 'Whisper ASR, speech-to-text, text-to-speech, IVR, call analytics, and multilingual voice interfaces for contact centers and logistics.',
      voiceAlt: 'Voice AI technologies',
      mlopsTag: 'MLOps',
      mlopsTitle: 'ML in production',
      mlopsText: 'CI/CD for models, feature store, drift monitoring, A/B tests, canary deploys, and inference scaling on GPU clusters.',
      mlopsAlt: 'MLOps — ML infrastructure',
    },
    trust: {
      title: 'Industries we work with',
      subtitle: '15+ years in regulated environments — fintech, banking, manufacturing, healthtech, logistics, EdTech, and defense',
    },
    why: {
      label: 'Why Partnerio',
      title: 'A partner that speaks both business and AI',
      subtitle: 'We do not sell "AI magic" — we build solutions with measurable impact, transparent process, and a team that stays with you after launch',
      w1title: 'Measurable ROI',
      w1text: 'Every AI project starts with KPIs: accuracy, latency, adoption, cost savings. We establish a baseline, track metrics after launch, and report business impact — not just model scores.',
      w2title: 'Full-cycle delivery',
      w2text: 'Data science, backend, frontend, QA, DevOps, and support in one team. No need to coordinate five vendors: from PoC to production and L2/L3 support under SLA.',
      w3title: 'Security and compliance',
      w3text: 'NDA, IP transfer, on-prem and hybrid deployment, audit trails, GDPR/HIPAA-ready processes. Experience in fintech, banking, insurance, healthtech, and miltech.',
      w4title: 'Transparency and predictability',
      w4text: 'Weekly demos, backlog access, burn-down, and risk tracking — no black box. PM with industry experience, English communication, convenient hours for EU and US clients.',
    },
    features: {
      f1title: 'AI in production',
      f1text: 'We take ML and LLM to production: from PoC, data audit, and fine-tuning to MLOps, drift monitoring, and scaling. 40+ AI projects — call centers, fraud detection, manufacturing CV, insurance RAG, and banking QA.',
      f2title: 'NLP, CV & voice',
      f2text: 'LLM assistants, RAG, multi-agent workflows, OCR, object detection, video analytics, speech-to-text, and text-to-speech — the full spectrum of intelligent modalities for enterprise.',
      f3title: 'AI team + delivery',
      f3text: '35+ ML/NLP/CV engineers and data scientists — 40% senior/lead. Plus backend, frontend, QA, and DevOps for end-to-end delivery: one partner from discovery to support.',
    },
    about: {
      label: 'About us',
      title: 'AI-first full-cycle IT company',
      lead: 'We help businesses adopt artificial intelligence with measurable results: process automation, lower cost-to-serve, new AI products, and faster time-to-market. Every AI project has KPIs: accuracy, latency, adoption, ROI.',
      body: 'Partnerio is an AI-oriented company. With offices in Kyiv and Lviv since 2010, our core focus is LLM, RAG, NLP, computer vision, voice AI, and classic ML. We also provide software development, QA, DevOps, and cloud to bring AI solutions to production and support them. Our team includes 120+ engineers, 35+ in ML/NLP/CV and data science.',
      body2: 'We work under dedicated team, fixed price, and T&M models — choosing the format that fits your budget, product stage, and internal processes. Every project is led by a PM with industry experience: weekly status, burn-down, risk tracking, and backlog access in Jira, Linear, or your system.',
      body3: 'We have experience in fintech, retail, manufacturing, healthtech, logistics, and miltech — we understand regulated environments, audits, compliance reporting, and data security requirements. We build architecture to scale: from MVP and PoC to high-load platforms with millions of transactions per day.',
      body4: 'We do not disappear after launch — we take on project support: L2/L3 support, 24/7 or business-hours monitoring, incident management, CI/CD, security patches, and planned feature evolution under SLA. Runbooks, on-call, monthly health checks, and update roadmaps included. Most clients work with us for 3+ years — expanding teams and launching new modules.',
      check1: 'Enterprise, scale-up, and startup projects — from MVP to core banking',
      check2: 'Agile / Scrum: sprint demos, retrospectives, predictable releases',
      check3: 'Transparent reporting, KPIs, burn rate, and SLA at every stage',
      check4: 'NDA, IP transfer, security-by-design, and audit-ready documentation',
      check5: 'Dedicated team — engineers under your brand or embedded in your process',
      check6: 'AI-first: LLM, NLP, CV, voice + development, QA, and DevOps in one partner',
      check7: 'Offices in Ukraine, English communication, convenient hours for EU and US',
      check8: 'Post-launch project support — SLA, monitoring, incidents, and product evolution',
      cta: 'Contact us',
      badge: 'years on the market',
      imgAlt: 'Partnerio AI team',
      imgAltMain: 'Robotics and industrial automation',
      imgAltAi: 'Microchips and high technology',
      imgAltData: 'Artificial intelligence and LLM',
    },
    process: {
      label: 'Process',
      title: 'How we work',
      subtitle: 'A structured approach from discovery and data audit to production, scaling, and long-term AI solution support',
      s1title: 'Analysis',
      s1text: 'Workshops with business and IT, data and systems audit, user stories, AI-readiness assessment, risk analysis, and roadmap with milestones and KPIs.',
      s2title: 'Development',
      s2text: 'Two-week sprints, PoC → MVP → production, code review, CI/CD, and regular demos for product owners and stakeholders.',
      s3title: 'Testing',
      s3text: 'Test plan, manual + automated QA, ML evaluation sets, performance, security, and bias checks before every release.',
      s4title: 'Launch',
      s4text: 'Blue-green/canary deploy, production smoke tests, model monitoring, documentation, client team training, and support handoff.',
      s5title: 'Project support',
      s5text: 'L1/L2/L3 support: drift monitoring, retraining, incidents, security patches, inference scaling, and feature evolution under SLA.',
    },
    services: {
      label: 'Services',
      title: 'Areas of expertise',
      subtitle: 'AI at the core — LLM, RAG, computer vision, voice, ML agents + development, QA, DevOps, and support. Each service includes detailed scope, stack, and deliverables.',
    },
    projects: {
      label: 'Portfolio',
      title: 'Delivered projects',
      subtitle: '13+ AI case studies with metrics: LLM for call centers, insurance RAG, manufacturing CV, fraud ML, multi-agent legal ops, MilTech, and EdTech',
      results: 'Key results',
    },
    tech: {
      label: 'Technologies',
      title: 'Technology stack',
      subtitle: 'Production-ready AI stack: LLM, RAG, computer vision, voice, AI agents, MLOps, and vector databases',
      groupDev: 'Development & infrastructure',
      groupAI: 'AI & machine learning',
      groupNLP: 'NLP & LLM',
      groupRAG: 'RAG & vector databases',
      groupCV: 'Computer Vision',
      groupVoice: 'Voice & speech',
      groupAgents: 'AI agents & automation',
    },
    team: {
      label: 'Team',
      title: 'Key experts',
      subtitle: 'Leadership with 12–20 years in AI/ML, enterprise architecture, fintech, team scaling, and regulated product delivery',
    },
    reviews: {
      label: 'Reviews',
      title: 'Client testimonials',
      subtitle: 'Feedback from product owners, CTOs, and VPs of Engineering — on timelines, communication quality, process transparency, and measurable business results',
    },
    cta: {
      title: 'Discuss your AI project?',
      text: 'Tell us about your challenge — LLM, RAG, NLP, computer vision, voice, or classic ML. We will run a discovery call, assess data readiness, and prepare a commercial proposal with team, timeline, and KPIs within 1–2 business days.',
      b1: 'Free discovery call',
      b2: 'Data readiness assessment',
      b3: 'Proposal with team and timeline',
      btn: 'Contact us',
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      text: 'Describe your task, desired timeline, budget (if any), and product stage — our manager will contact you within one business day, clarify details, and schedule a discovery call with an AI/ML expert.',
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
      tagline: 'AI-first: LLM, NLP, Computer Vision, voice AI, AI agents, and software engineering. Your technology partner since 2010 — Kyiv, Lviv, remote for EU and US.',
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
