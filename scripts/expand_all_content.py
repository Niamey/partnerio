"""Expand site copy in docs/data/*.json — run from repo root."""
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "docs" / "data"

# Extra sentence appended to each project details (uk)
PROJECT_EXTRA_UK = (
    " Команда Partnerio супроводжувала проєкт від discovery до production: "
    "архітектура, інтеграції, MLOps і підтримка після launch з прозорою звітністю для бізнесу."
)

PROJECT_EXTRA_EN = (
    " Partnerio delivered end-to-end: discovery, architecture, integrations, MLOps, "
    "and post-launch support with transparent business reporting."
)

SERVICES_UK = {
    "development": {
        "description": "Проєктуємо та будуємо веб-, мобільні та корпоративні системи — від MVP до масштабованих enterprise-рішень з чітким roadmap, SLA і документацією для audit.",
        "details": "Працюємо за принципом «архітектура спочатку»: закладаємо модульність, безпеку та можливість масштабування ще на етапі проєктування. Команда включає backend, frontend, mobile та DevOps-інженерів під керівництвом Lead Architect. Досвід: fintech, e-commerce, SaaS, internal tools, high-load платформи. Кожен реліз — з code review, CI/CD, тестами та передачею знань вашій команді.",
        "features": [
            "Веб-додатки, SaaS, admin-панелі та customer portals",
            "Мобільні додатки iOS та Android (native і cross-platform)",
            "Мікросервісна, event-driven і domain-driven архітектура",
            "REST / GraphQL API, webhooks та інтеграції з ERP/CRM",
            "Legacy-модернізація, strangler pattern і міграції даних",
            "Performance tuning, caching і observability",
            "Security-by-design, OWASP і penetration-ready код",
            "Code review, ADR, документація та knowledge transfer",
        ],
    },
    "testing": {
        "description": "Комплексне QA для продуктів, де помилка в production коштує грошей, репутації або compliance-штрафів — з audit-ready звітністю та traceability.",
        "details": "Поєднуємо ручне та автоматизоване тестування: формуємо test strategy, будуємо regression-набори, інтегруємо тести в CI/CD і готуємо звітність для аудиту. Підходимо до fintech, e-commerce, healthtech та інших regulated-галузей. QA-інженери embedded у ваш sprint — баги фіксуються до релізу, а не після.",
        "features": [
            "Функціональне, регресійне та exploratory QA",
            "Автотести: Selenium, Playwright, Cypress, Appium",
            "API-, contract- та integration-тестування",
            "Навантажувальне, stress і soak-тестування",
            "Security-перевірки, OWASP Top 10 і SAST/DAST",
            "Test data management і synthetic data",
            "CI/CD-інтеграція, Allure-звітність і Jira traceability",
            "UAT-супровід і release sign-off для compliance",
        ],
    },
    "ai": {
        "description": "Впроваджуємо ML, NLP, LLM, RAG, computer vision і голосові AI там, де це дає вимірюваний бізнес-ефект. Кожен проєкт — з KPI, ROI-моделлю та планом масштабування.",
        "details": "Повний цикл: discovery, data audit, PoC → MVP → production. Fine-tuning LLM, RAG, MLOps, drift monitoring, human-in-the-loop і підтримка після launch. Досвід: fintech, retail, manufacturing, insurance, legal, EdTech, logistics. On-prem, hybrid, cloud — GDPR/HIPAA-ready. Допомагаємо обрати build vs buy, оцінити data readiness і побудувати roadmap на 6–12 місяців.",
        "features": [
            "LLM-асистенти для support, sales, HR і internal ops",
            "RAG: семантичний пошук, Q&A з цитуванням, hybrid search",
            "NLP: класифікація, summarization, NER, sentiment",
            "Computer Vision: OCR, detection, відеоаналітика, edge AI",
            "Голосові AI: Whisper ASR, TTS, IVR, call analytics",
            "Fine-tuning LLM, LoRA/QLoRA, embeddings, prompt engineering",
            "Multi-agent: LangGraph, CrewAI, tool use, human-in-the-loop",
            "MLOps: CI/CD моделей, drift, A/B-тести, GPU scaling",
            "Evaluation frameworks, red teaming і moderation",
            "Explainability: SHAP, LIME, cited answers для regulated domains",
        ],
    },
    "devops": {
        "description": "Налаштовуємо інфраструктуру та delivery-процеси, щоб релізи були передбачуваними, а системи — стійкими під навантаженням, безпечними та cost-efficient.",
        "details": "Проєктуємо хмарну архітектуру (AWS, Azure, GCP), контейнеризацію, CI/CD, моніторинг і disaster recovery. Допомагаємо командам перейти від «ручного деплою» до GitOps pipeline з rollback, alerting, autoscaling і cost optimization. Runbooks, on-call playbooks і SLO/SLI для production-ready операцій.",
        "features": [
            "AWS, Azure, GCP — проєктування, міграції та landing zones",
            "Docker, Kubernetes, Helm, service mesh",
            "CI/CD: GitHub Actions, GitLab, Jenkins, ArgoCD",
            "Prometheus, Grafana, ELK, OpenTelemetry, CloudWatch",
            "Infrastructure as Code: Terraform, Pulumi, Ansible",
            "Security hardening, secrets management, zero-trust",
            "Disaster recovery, backup strategy, RTO/RPO planning",
            "FinOps: cost dashboards, rightsizing, spot/preemptible workloads",
        ],
    },
    "consulting": {
        "description": "Допомагаємо прийняти правильні технологічні рішення до старту розробки — і виправити курс, якщо продукт уже «пробуксовує» або AI-пілот не масштабується.",
        "details": "Проводимо технічний аудит, оцінюємо архітектуру, процеси delivery, data readiness і команду. Готуємо roadmap, TCO-оцінку, build vs buy analysis і рекомендації щодо AI adoption. Формат — від одноразової executive session до embedded-консалтингу на 3–6 місяців з weekly deliverables.",
        "features": [
            "Аудит коду, архітектури, ML pipelines і процесів",
            "Архітектурне проєктування, C4, ADR і threat modeling",
            "AI readiness assessment і data maturity review",
            "Оцінка термінів, бюджету, ризиків і team topology",
            "Менторинг in-house команд і hiring support",
            "Due diligence для M&A, інвесторів і vendor selection",
            "Підготовка до SOC2 / ISO-ready процесів",
            "Vendor evaluation: LLM, cloud, observability, vector DB",
        ],
    },
    "support": {
        "description": "Беремо на себе супровід проекту після launch: стабільність, моніторинг, інциденти, оновлення, retrain моделей і розвиток функціоналу за SLA.",
        "details": "Працюємо за моделлю L1/L2/L3 support з чіткими SLA на response і resolution time. Налаштовуємо моніторинг і alerting, ведемо runbook, проводимо post-mortem, плануємо capacity, застосовуємо security patches і допомагаємо розвивати продукт — нові фічі, інтеграції, оптимізація inference — без простою business-critical функцій. Monthly health-check і roadmap оновлень для stakeholders.",
        "features": [
            "Підтримка 24/7 або в робочі години за SLA",
            "Моніторинг, alerting, on-call і escalation matrix",
            "Інцидент-менеджмент, RCA і post-mortem",
            "Security patches, dependency updates, CVE triage",
            "Drift monitoring, model retrain і evaluation regression",
            "Масштабування під пікові навантаження",
            "Розвиток функціоналу після launch і product roadmap",
            "Knowledge base, runbooks і training для вашої L1",
        ],
    },
}

SERVICES_EN = {
    "development": {
        "description": "We design and build web, mobile, and enterprise systems — from MVP to scalable enterprise solutions with a clear roadmap, SLA, and audit-ready documentation.",
        "details": "Architecture-first: modularity, security, and scalability from day one. Backend, frontend, mobile, and DevOps engineers led by a Lead Architect. Experience in fintech, e-commerce, SaaS, internal tools, and high-load platforms. Every release includes code review, CI/CD, tests, and knowledge transfer to your team.",
        "features": [
            "Web apps, SaaS, admin panels, and customer portals",
            "Mobile apps iOS and Android (native and cross-platform)",
            "Microservices, event-driven, and domain-driven architecture",
            "REST / GraphQL API, webhooks, ERP/CRM integrations",
            "Legacy modernization, strangler pattern, data migrations",
            "Performance tuning, caching, and observability",
            "Security-by-design, OWASP, and penetration-ready code",
            "Code review, ADR, documentation, and knowledge transfer",
        ],
    },
    "testing": {
        "description": "Comprehensive QA for products where production errors cost money, reputation, or compliance penalties — with audit-ready reporting and traceability.",
        "details": "Manual and automated testing combined: test strategy, regression suites, CI/CD integration, and audit reporting. We work in fintech, e-commerce, healthtech, and other regulated industries. QA engineers embedded in your sprint — bugs fixed before release, not after.",
        "features": [
            "Functional, regression, and exploratory QA",
            "Automation: Selenium, Playwright, Cypress, Appium",
            "API, contract, and integration testing",
            "Load, stress, and soak testing",
            "Security checks, OWASP Top 10, SAST/DAST",
            "Test data management and synthetic data",
            "CI/CD integration, Allure reports, Jira traceability",
            "UAT support and compliance release sign-off",
        ],
    },
    "ai": {
        "description": "We deploy ML, NLP, LLM, RAG, computer vision, and voice AI with measurable business impact. Every project includes KPIs, an ROI model, and a scaling plan.",
        "details": "Full cycle: discovery, data audit, PoC → MVP → production. LLM fine-tuning, RAG, MLOps, drift monitoring, human-in-the-loop, and post-launch support. Experience in fintech, retail, manufacturing, insurance, legal, EdTech, logistics. On-prem, hybrid, cloud — GDPR/HIPAA-ready. We help with build vs buy, data readiness, and a 6–12 month roadmap.",
        "features": [
            "LLM assistants for support, sales, HR, and internal ops",
            "RAG: semantic search, cited Q&A, hybrid search",
            "NLP: classification, summarization, NER, sentiment",
            "Computer vision: OCR, detection, video analytics, edge AI",
            "Voice AI: Whisper ASR, TTS, IVR, call analytics",
            "LLM fine-tuning, LoRA/QLoRA, embeddings, prompt engineering",
            "Multi-agent: LangGraph, CrewAI, tool use, human-in-the-loop",
            "MLOps: model CI/CD, drift, A/B tests, GPU scaling",
            "Evaluation frameworks, red teaming, and moderation",
            "Explainability: SHAP, LIME, cited answers for regulated domains",
        ],
    },
    "devops": {
        "description": "We set up infrastructure and delivery so releases are predictable and systems stay resilient, secure, and cost-efficient under load.",
        "details": "Cloud architecture (AWS, Azure, GCP), containerization, CI/CD, monitoring, and disaster recovery. We help teams move from manual deploys to GitOps pipelines with rollback, alerting, autoscaling, and cost optimization. Runbooks, on-call playbooks, and SLO/SLI for production-ready operations.",
        "features": [
            "AWS, Azure, GCP — design, migrations, landing zones",
            "Docker, Kubernetes, Helm, service mesh",
            "CI/CD: GitHub Actions, GitLab, Jenkins, ArgoCD",
            "Prometheus, Grafana, ELK, OpenTelemetry, CloudWatch",
            "Infrastructure as Code: Terraform, Pulumi, Ansible",
            "Security hardening, secrets management, zero-trust",
            "Disaster recovery, backup strategy, RTO/RPO planning",
            "FinOps: cost dashboards, rightsizing, spot/preemptible workloads",
        ],
    },
    "consulting": {
        "description": "We help you make the right technology decisions before development starts — and fix course when the product struggles or an AI pilot won't scale.",
        "details": "Technical audits, architecture and delivery process review, data readiness, and team assessment. Roadmap, TCO estimates, build vs buy analysis, and AI adoption recommendations. From one-off executive sessions to 3–6 month embedded consulting with weekly deliverables.",
        "features": [
            "Code, architecture, ML pipeline, and process audits",
            "Architecture design, C4, ADR, and threat modeling",
            "AI readiness assessment and data maturity review",
            "Timeline, budget, risk, and team topology estimates",
            "In-house team mentoring and hiring support",
            "Due diligence for M&A, investors, and vendor selection",
            "SOC2 / ISO-ready process preparation",
            "Vendor evaluation: LLM, cloud, observability, vector DB",
        ],
    },
    "support": {
        "description": "Post-launch project support: stability, monitoring, incidents, updates, model retraining, and feature evolution under SLA.",
        "details": "L1/L2/L3 support with clear response and resolution SLAs. Monitoring, alerting, runbooks, post-mortems, capacity planning, security patches, and product evolution — new features, integrations, inference optimization — without downtime on business-critical functions. Monthly health checks and update roadmaps for stakeholders.",
        "features": [
            "24/7 or business-hours support under SLA",
            "Monitoring, alerting, on-call, escalation matrix",
            "Incident management, RCA, and post-mortems",
            "Security patches, dependency updates, CVE triage",
            "Drift monitoring, model retrain, evaluation regression",
            "Scaling for peak load",
            "Post-launch feature development and product roadmap",
            "Knowledge base, runbooks, and L1 team training",
        ],
    },
}

TEAM_UK = {
    "t1": "Засновник і CEO Partnerio, Lead Architect з 20-річним досвідом enterprise-розробки. Визначає архітектурну стратегію компанії, стандарти інженерії та технічний due diligence для ключових проєктів. Безпосередньо залучений до fintech, banking і high-load платформ — від core banking до payment gateways. Веде архітектурні комітети, code review критичних модулів і менторить team leads. Останні 5 років — фокус на AI-first архітектурі, інтеграції LLM/RAG у enterprise і безпечному deployment у regulated-середовищах.",
    "t2": "Технічний директор Partnerio. Відповідає за технологічну стратегію, вибір стеку, архітектуру платформ і впровадження AI/ML у продукти клієнтів. Має досвід побудови R&D-процесів, масштабування команд 50+ інженерів і міграцій monolith → microservices → event-driven. Курує безпеку, performance та технічну якість delivery. Керує ML/NLP/CV-напрямком, MLOps-практиками та evaluation frameworks. Спікер на внутрішніх AI guilds — ділиться best practices з fine-tuning, RAG і production ML.",
    "t3": "Фінансовий директор Partnerio. Керує фінансовим плануванням, бюджетуванням проєктів, управлінським обліком і оптимізацією витрат IT-компанії. Досвід роботи з міжнародними контрактами (EU, US), валютними ризиками та фінансовою звітністю для enterprise-клієнтів. Забезпечує прозорість T&M, fixed price і dedicated team моделей — щомісячні burn reports без сюрпризів. Допомагає клієнтам будувати ROI-моделі для AI-проєктів і порівнювати cost of build vs buy.",
    "t4": "Операційний директор Partnerio. Відповідає за delivery-процеси, scaling команд, якість сервісу та виконання SLA. Впровадила Agile/Scrum практики, KPI для PM і систему регулярної звітності для клієнтів — weekly status, risk register, capacity planning. Досвід управління portfolio з 15+ паралельних enterprise-проєктів і onboarding нових клієнтів за 2 тижні. Забезпечує передбачуваність термінів, прозорість для stakeholders і smooth handoff між discovery, delivery і support.",
}

TEAM_EN = {
    "t1": "Founder and CEO of Partnerio, Lead Architect with 20 years of enterprise development. Sets architecture strategy, engineering standards, and technical due diligence for key projects. Directly involved in fintech, banking, and high-load platforms — from core banking to payment gateways. Leads architecture committees, critical code reviews, and mentors team leads. Last 5 years focused on AI-first architecture, LLM/RAG integration in enterprise, and secure deployment in regulated environments.",
    "t2": "CTO of Partnerio. Owns technology strategy, stack selection, platform architecture, and AI/ML adoption in client products. Built R&D processes, scaled teams of 50+ engineers, and led monolith → microservices → event-driven migrations. Oversees security, performance, and delivery quality. Leads ML/NLP/CV practice, MLOps, and evaluation frameworks. Runs internal AI guilds sharing fine-tuning, RAG, and production ML best practices.",
    "t3": "CFO of Partnerio. Manages financial planning, project budgeting, management accounting, and IT cost optimization. Experience with international contracts (EU, US), currency risk, and enterprise financial reporting. Ensures transparency for T&M, fixed price, and dedicated team models — monthly burn reports with no surprises. Helps clients build ROI models for AI projects and compare build vs buy costs.",
    "t4": "COO of Partnerio. Owns delivery processes, team scaling, service quality, and SLA execution. Implemented Agile/Scrum, PM KPIs, and regular client reporting — weekly status, risk register, capacity planning. Managed portfolios of 15+ parallel enterprise projects and onboarded new clients within 2 weeks. Ensures predictable timelines, stakeholder transparency, and smooth handoff between discovery, delivery, and support.",
}

TESTIMONIALS_UK = {
    "r1": "Нам потрібен був ШІ-асистент для кол-центру до пікового сезону — терміни піджимали, а внутрішня команда була зайнята core banking. Partnerio за 3 місяці зібрали MVP, інтегрували з CRM Salesforce і телефонією, провели UAT з операторами. Зараз автоматизовано 60% типових діалогів, час першої відповіді скоротився з 4 хв до 40 сек, NPS +12 п.п. Оператори отримують готовий контекст при ескалації. Щотижневі демо, прозорий backlog і жодних сюрпризів — саме те, чого ми чекали. Після launch команда залишилась на support: drift monitoring, retrain моделі, moderation updates під SLA.",
    "r2": "Після запуску e-commerce платформи від Partnerio ми обробляємо понад 2 000 замовлень на добу в пік — Black Friday пройшов без інцидентів. Окремо цінуємо архітектуру: B2B і B2C в одній системі без дублювання даних, єдиний профіль клієнта, інтеграція з ERP і WMS. QA-команда Partnerio побудувала 400+ автотестів — баги в production впали на 80%. Комунікація на рівні product owner: backlog, пріоритети, ризики — все видно. Рекомендуємо як партнера для складних retail-платформ і довгострокового support.",
    "r3": "Core banking — не проєкт, де можна експериментувати з термінами. Partnerio зібрали команду, яка розуміє regulated-середовище: audit trails, compliance-звіти, документація для регулятора. Регресія скоротилась з 5 днів до 4 годин — це змінило наш release cadence з monthly на bi-weekly. Архітектура масштабується, технічна документація дозволила внутрішній команді швидко підхопити L2 support. Працюємо з Partnerio вже третій рік — розширили scope на DevOps і новий fraud ML модуль.",
    "r4": "RAG для insurance — складний кейс: 120 000+ документів, role-based доступ, обов'язкові цитати для юристів. Partnerio зробили PoC за 6 тижнів, потім production з audit log і export цитат у Word. Час пошку відповіді скоротився з 40 хв до 3 хв. Особливо цінуємо обережність з даними — on-prem embeddings, NDA, IP transfer. Команда говорить мовою compliance, а не лише ML metrics.",
}

TESTIMONIALS_EN = {
    "r1": "We needed an AI assistant for our call center before peak season — tight timelines and our internal team was busy with core banking. Partnerio delivered an MVP in 3 months, integrated with Salesforce CRM and telephony, and ran UAT with agents. Now 60% of routine dialogs are automated, first response time dropped from 4 min to 40 sec, NPS +12 pp. Agents get full context on escalation. Weekly demos, transparent backlog, no surprises — exactly what we wanted. After launch, the team stayed on support: drift monitoring, model retrain, moderation updates under SLA.",
    "r2": "After launching Partnerio's e-commerce platform, we handle 2,000+ orders per day at peak — Black Friday with zero incidents. We especially value the architecture: B2B and B2C in one system without data duplication, unified customer profile, ERP and WMS integration. Partnerio's QA built 400+ automated tests — production bugs dropped 80%. Product-owner-level communication: backlog, priorities, risks — all visible. We recommend them for complex retail platforms and long-term support.",
    "r3": "Core banking is not a project where you experiment with timelines. Partnerio assembled a team that understands regulated environments: audit trails, compliance reports, regulator documentation. Regression went from 5 days to 4 hours — that changed our release cadence from monthly to bi-weekly. Architecture scales; technical docs let our internal team take over L2 support quickly. We've worked with Partnerio for three years — expanded scope to DevOps and a new fraud ML module.",
    "r4": "Insurance RAG is complex: 120,000+ documents, role-based access, mandatory citations for lawyers. Partnerio built a PoC in 6 weeks, then production with audit log and Word citation export. Search time dropped from 40 minutes to 3 minutes. We especially value data care — on-prem embeddings, NDA, IP transfer. The team speaks compliance language, not just ML metrics.",
}

STATS_UK = [
    {
        "value": "50+",
        "label": "Спеціалістів",
        "description": "Backend, frontend, mobile, QA, DevOps, ML/NLP/CV-інженери та data scientists. Середній досвід — 7+ років, 40% — senior і lead. Команда розширюється під ваш проєкт без довгого onboarding.",
    },
    {
        "value": "250+",
        "label": "Проєктів",
        "description": "Успішно реалізовані рішення для клієнтів з 15 країн: fintech, retail, manufacturing, healthtech, insurance, legal, logistics і EdTech — від MVP до enterprise scale.",
    },
    {
        "value": "98%",
        "label": "Задоволених клієнтів",
        "description": "Повертаються з новими задачами, продовжують support-контракти 3+ роки та рекомендують Partnerio партнерам, інвесторам і колегам по галузі.",
    },
]

STATS_EN = [
    {
        "value": "50+",
        "label": "Specialists",
        "description": "Backend, frontend, mobile, QA, DevOps, ML/NLP/CV engineers, and data scientists. Average experience 7+ years, 40% senior/lead. Team scales to your project without long onboarding.",
    },
    {
        "value": "250+",
        "label": "Projects",
        "description": "Successful deliveries for clients in 15 countries: fintech, retail, manufacturing, healthtech, insurance, legal, logistics, and EdTech — from MVP to enterprise scale.",
    },
    {
        "value": "98%",
        "label": "Satisfied clients",
        "description": "They return with new challenges, continue support contracts for 3+ years, and recommend Partnerio to partners, investors, and industry peers.",
    },
]


def expand_projects(projects, extra: str) -> None:
    for p in projects:
        if p.get("details") and extra not in p["details"]:
            p["details"] = p["details"].rstrip() + extra


for lang, services, team, testimonials, stats, extra in [
    ("uk", SERVICES_UK, TEAM_UK, TESTIMONIALS_UK, STATS_UK, PROJECT_EXTRA_UK),
    ("en", SERVICES_EN, TEAM_EN, TESTIMONIALS_EN, STATS_EN, PROJECT_EXTRA_EN),
]:
    path = DATA / f"{lang}.json"
    data = json.loads(path.read_text(encoding="utf-8"))

    for s in data["services"]:
        if s["id"] in services:
            s.update(services[s["id"]])

    expand_projects(data["projects"], extra)

    for t in data["team"]:
        if t["id"] in team:
            t["bio"] = team[t["id"]]

    if lang == "uk" and "r4" not in {r["id"] for r in data["testimonials"]}:
        data["testimonials"].append(
            {
                "id": "r4",
                "name": "Марина Кovalenko" if lang == "uk" else "Maryna Kovalenko",
                "company": "SecureInsurance",
                "text": testimonials["r4"],
                "date": "Листопад 2025" if lang == "uk" else "November 2025",
                "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
            }
        )
    for r in data["testimonials"]:
        if r["id"] in testimonials:
            r["text"] = testimonials[r["id"]]

    data["stats"] = stats

    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    for dest in (ROOT / "data", ROOT / "frontend" / "data"):
        dest.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, dest / f"{lang}.json")

print("JSON expanded")
