import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "docs" / "data"

UK_EXP = {
    "p1": {
        "description": "LLM-асистент для fintech-кол-центру з RAG, інтеграцією в CRM і телефонію, KYC-верифікацією та безпечною ескалацією до оператора з повним контекстом діалогу.",
        "details": "FinTech Ukraine обробляла понад 15 000 звернень на місяць; оператори витрачали до 70% часу на типові запити. Partnerio провела discovery з бізнесом і compliance, зібрала intent-каталог на 40+ сценаріїв і розробила fine-tuned LLM з RAG на knowledge base. Асистент верифікує клієнта за KYC, відповідає у контексті діалогу, підтримує UA/EN і передає оператору повну транскрипцію. Додали moderation layer, audit log і dashboard з adoption та containment rate.",
    },
    "p2": {
        "description": "Omnichannel-маркетплейс для retail-мережі: єдиний каталог B2C і B2B, оплата, логістика, промо та ABC-аналітика для 50 000+ SKU.",
        "details": "Retail Group масштабувала офлайн-мережу і мала розрізнені системи для магазинів, оптових клієнтів і інтернет-продажів. Спроєктували мікросервісну платформу: каталог, кошик, замовлення, платежі, промо та звітність — з єдиним профілем клієнта. Окремий акцент — performance під Black Friday (< 1.2 сек каталог), модуль для категорійних менеджерів з ABC-аналітикою, інтеграція з ERP і WMS.",
    },
    "p3": {
        "description": "Enterprise test framework для core banking: API, UI, smoke у production і audit-ready звітність для compliance-команди.",
        "details": "NovaBank випускала релізи core banking кожні 2 тижні, але регресія займала 5 робочих днів і блокувала delivery. Partnerio побудувала layered framework: контрактні API-тести, Playwright-сценарії для 40+ критичних user flow, nightly smoke на staging і post-deploy перевірки. Звіти Allure інтегровані в Jira; compliance-команда отримує traceability від user story до test case.",
    },
    "p4": {
        "description": "Real-time CV для дефектоскопії на конвеєрі: edge-inference на TensorRT, інтеграція в MES і dashboard з heatmap дефектів.",
        "details": "IndustrialTech контролювала якість вручну — затримки, людський фактор, складність масштабування. Зібрали 12 000+ зображень дефектів, навчили PyTorch-модель, оптимізували TensorRT на edge-серверах і підключили MES для автозупинки партії. 30 FPS, 8 типів дефектів, push-алерти оператору, trend-аналітика і export для аудиту якості.",
    },
    "p5": {
        "description": "Voice AI для логістики: Whisper ASR, NLU, TTS, IVR і інтеграція з TMS/CRM для автоматичного трекінгу вантажів.",
        "details": "LogiTrans EU — 8 000+ дзвінків/місяць, черги до 15 хв у пік. Whisper ASR, NLU для 25+ intent, TTS і TMS-інтеграція з SMS-підтвердженнями. Ескалація з транскрипцією та next-best-action. 6 мов, call analytics, weekly звіти для operations.",
    },
    "p6": {
        "description": "Enterprise RAG для страхової: семантичний пошук по 120 000+ документів, LLM-відповіді з цитуванням і role-based доступом.",
        "details": "SecureInsurance — юристи витрачали до 40 хв на пошук у PDF/Word. Pipeline: OCR, smart chunking, Azure OpenAI embeddings, Qdrant, LLM з обов'язковими цитатами. Role-based доступ, audit log, hybrid search + re-ranking, export цитат у Word.",
    },
    "p7": {
        "description": "CV/GIS-платформа для agrotech і логістики: супутниковий моніторинг, change detection, object detection і аналітичний dashboard.",
        "details": "GeoInsight EU аналізувала супутникові знімки для agrotech і логістики — ручна обробка займала дні. Partnerio розробила pipeline: preprocessing, tile segmentation, YOLO object detection, change detection між time-series знімками та dashboard для аналітиків. Inference на GPU-кластері з чергою завдань, пріоритизацією критичних зон і export звітів для клієнтів.",
    },
    "p8": {
        "description": "NLP для медкарток: de-identification PHI, ICD-10, LLM-summarization — on-prem, HIPAA-aligned.",
        "details": "MediCore — ручна анонімізація блокувала analytics на 2–3 тижні. NER для PHI, human-in-the-loop, ICD-10 на 200+ категорій, LLM discharge summary. On-prem, audit trail, 50 000 записів/добу, API для EMR.",
    },
    "p9": {
        "description": "ML-прогноз попиту для retail: XGBoost + Prophet, feature store, ERP і auto-reorder для 180+ магазинів.",
        "details": "FreshMarket — overstock і out-of-stock на 15 000 SKU. Feature store (seasonality, promo, weather), ensemble-моделі, what-if dashboard для закупівельників. Weekly retrain, MAPE по категоріях, explainability для category managers.",
    },
    "p11": {
        "description": "AI-репетитор: RAG на curriculum, fine-tuned LLM, auto-grader і adaptive path для 25 000 учнів.",
        "details": "EduSmart — 1 викладач на 120 учнів. RAG на підручниках, plain-language LLM, rubric auto-grader, adaptive path за помилками. Moderation, parental controls, teacher dashboard. Відповідь < 5 сек.",
    },
    "p12": {
        "description": "Real-time fraud ML: Kafka streaming, 200+ ознак, ensemble і SHAP explainability — scoring < 50 ms.",
        "details": "ClearPay — 2M+ транзакцій/добу, 8% false positive. Kafka pipeline, feature store, XGBoost + isolation forest, human review queue, daily retrain. $1.2M/рік економії на chargebacks.",
    },
    "p13": {
        "description": "Multi-agent legal ops: clause extraction, playbook compare, risk scoring, redlines — LangGraph + RAG.",
        "details": "LegalTech Pro — 6 год review на договір. LangGraph agents: extraction, playbook (50+ clauses), risk scoring, redlines. Human approval, audit log, Word export з track changes. 200 договорів/місяць у pilot.",
    },
}

EN_EXP = {
    "p1": {
        "description": "LLM assistant for a fintech call center with RAG, CRM/telephony integration, KYC verification, and secure agent handoff with full context.",
        "details": "FinTech Ukraine handled 15,000+ monthly requests; agents spent 70% of time on routine inquiries. We built a 40+ intent catalog and fine-tuned LLM with RAG on policies and FAQ. KYC verification, UA/EN support, full transcription on escalation, moderation layer, audit log, and adoption dashboard.",
    },
    "p2": {
        "description": "Omnichannel marketplace for a retail chain: unified B2C and B2B catalog, payments, logistics, promos, and ABC analytics for 50,000+ SKUs.",
        "details": "Retail Group scaled offline stores but had fragmented systems for shops, wholesale, and e-commerce. We designed a microservices platform: catalog, cart, orders, payments, promos, and reporting with a single customer profile. Focus on Black Friday performance (< 1.2s catalog), category manager module with ABC analytics, ERP and WMS integration.",
    },
    "p3": {
        "description": "Enterprise test framework for core banking: API, UI, production smoke tests, and audit-ready reporting for compliance teams.",
        "details": "NovaBank released core banking every 2 weeks, but regression took 5 business days and blocked delivery. We built a layered framework: contract API tests, Playwright for 40+ critical flows, nightly staging smoke, and post-deploy checks. Allure reports integrated into Jira with traceability from user story to test case.",
    },
    "p4": {
        "description": "Real-time CV for conveyor defect detection: TensorRT edge inference, MES integration, and defect heatmap dashboard.",
        "details": "IndustrialTech relied on manual inspection. We collected 12,000+ defect images, trained PyTorch, optimized TensorRT on edge servers, and connected MES for batch stops. 30 FPS, 8 defect types, operator alerts, trend analytics, and quality audit export.",
    },
    "p5": {
        "description": "Voice AI for logistics: Whisper ASR, NLU, TTS, IVR, and TMS/CRM integration for shipment tracking.",
        "details": "LogiTrans EU — 8,000+ calls/month, 15-minute queues at peak. Whisper ASR, 25+ intents, TTS, TMS with SMS confirmations. Escalation with transcription and next-best-action. Six languages, call analytics, weekly ops reports.",
    },
    "p6": {
        "description": "Enterprise insurance RAG: semantic search across 120,000+ documents with cited LLM answers and role-based access.",
        "details": "SecureInsurance — up to 40 minutes to find legal wording. OCR ingestion, smart chunking, Azure OpenAI embeddings, Qdrant, mandatory citations. Role-based access, audit log, hybrid search + re-ranking, Word citation export.",
    },
    "p7": {
        "description": "CV/GIS platform for agrotech and logistics: satellite monitoring, change detection, object detection, and analytics dashboard.",
        "details": "GeoInsight EU analyzed satellite imagery for agrotech and logistics — manual processing took days. We built preprocessing, tile segmentation, YOLO detection, time-series change detection, and an analyst dashboard. GPU cluster inference with job queue, critical zone prioritization, and client report export.",
    },
    "p8": {
        "description": "Medical record NLP: PHI de-identification, ICD-10 classification, LLM summarization — on-prem, HIPAA-aligned.",
        "details": "MediCore — manual anonymization blocked analytics for 2–3 weeks. PHI NER, human-in-the-loop, ICD-10 across 200+ categories, discharge LLM summaries. On-prem, audit trail, 50,000 records/day, EMR API.",
    },
    "p9": {
        "description": "Retail demand forecasting: XGBoost + Prophet ensemble, feature store, ERP integration, auto-reorder for 180+ stores.",
        "details": "FreshMarket — overstock and out-of-stock on 15,000 SKUs. Feature store (seasonality, promo, weather), what-if buyer dashboard, weekly retrain, MAPE by category, explainability for managers.",
    },
    "p11": {
        "description": "AI tutor: curriculum RAG, fine-tuned LLM, auto-grader, and adaptive paths for 25,000 students.",
        "details": "EduSmart — 1 teacher per 120 students. RAG on textbooks, plain-language LLM, rubric auto-grader, mistake-based adaptive paths. Moderation, parental controls, teacher dashboard. Response under 5 seconds.",
    },
    "p12": {
        "description": "Real-time fraud ML: Kafka streaming, 200+ features, ensemble model, SHAP explainability — scoring under 50 ms.",
        "details": "ClearPay — 2M+ daily transactions, 8% false positives. Kafka pipeline, feature store, XGBoost + isolation forest, human review queue, daily retrain. $1.2M/year saved on chargebacks.",
    },
    "p13": {
        "description": "Multi-agent legal ops: clause extraction, playbook comparison, risk scoring, redlines — LangGraph + RAG.",
        "details": "LegalTech Pro — 6 hours per contract review. LangGraph agents for extraction, 50+ clause playbook, risk scoring, redlines. Human approval, audit log, Word track-changes export. 200 contracts/month in pilot.",
    },
}

SERVICES_UK = {
    "development": {
        "description": "Проєктуємо та будуємо веб-, мобільні та корпоративні системи — від MVP до масштабованих enterprise-рішень з чітким roadmap і SLA.",
        "details": "Працюємо за принципом «архітектура спочатку»: закладаємо модульність, безпеку та можливість масштабування ще на етапі проєктування. Команда включає backend, frontend, mobile та DevOps-інженерів під керівництвом Lead Architect. Досвід: fintech, e-commerce, SaaS, internal tools.",
    },
    "testing": {
        "description": "Комплексне QA для продуктів, де помилка в production коштує грошей, репутації або compliance-штрафів — з audit-ready звітністю.",
        "details": "Поєднуємо ручне та автоматизоване тестування: формуємо test strategy, будуємо regression-набори, інтегруємо тести в CI/CD і готуємо звітність для аудиту. Підходимо до fintech, e-commerce, healthtech та інших regulated-галузей.",
    },
    "ai": {
        "description": "Впроваджуємо ML, NLP, LLM, RAG, computer vision і голосові AI там, де це дає вимірюваний бізнес-ефект. Кожен проєкт — з KPI і ROI-моделлю.",
        "details": "Повний цикл: discovery, data audit, PoC → production. Fine-tuning LLM, RAG, MLOps, drift monitoring, підтримка після launch. Досвід: fintech, retail, manufacturing, insurance, legal, EdTech. On-prem, hybrid, cloud — GDPR/HIPAA-ready.",
        "features": [
            "LLM-асистенти для support, sales і internal ops",
            "RAG: семантичний пошук, Q&A з цитуванням",
            "NLP: класифікація, summarization, NER",
            "Computer Vision: OCR, detection, відеоаналітика, edge AI",
            "Голосові AI: ASR, TTS, IVR, call analytics",
            "Fine-tuning LLM, LoRA/QLoRA, embeddings",
            "Multi-agent: LangGraph, tool use, human-in-the-loop",
            "MLOps: CI/CD моделей, drift, A/B-тести, GPU scaling",
        ],
    },
    "devops": {
        "description": "Налаштовуємо інфраструктуру та delivery-процеси, щоб релізи були передбачуваними, а системи — стійкими під навантаженням і безпечними.",
        "details": "Проєктуємо хмарну архітектуру (AWS, Azure, GCP), контейнеризацію, CI/CD, моніторинг і disaster recovery. Допомагаємо командам перейти від «ручного деплою» до автоматизованого pipeline з rollback, alerting і cost optimization.",
    },
    "consulting": {
        "description": "Допомагаємо прийняти правильні технологічні рішення до старту розробки — і виправити курс, якщо продукт уже «пробуксовує».",
        "details": "Проводимо технічний аудит, оцінюємо архітектуру, процеси delivery та команду. Готуємо roadmap, TCO-оцінку та рекомендації щодо build vs buy. Формат — від одноразової сесії до embedded-консалтингу на 3–6 місяців.",
    },
    "support": {
        "description": "Беремо на себе супровід проекту після launch: стабільність, моніторинг, інциденти, оновлення та розвиток функціоналу за SLA.",
        "details": "Працюємо за моделлю L1/L2/L3 support з чіткими SLA на response і resolution time. Налаштовуємо моніторинг і alerting, ведемо runbook, проводимо post-mortem, плануємо capacity, застосовуємо security patches і допомагаємо розвивати продукт — нові фічі, інтеграції, оптимізація — без простою business-critical функцій.",
    },
}

SERVICES_EN = {
    "development": {
        "description": "We design and build web, mobile, and enterprise systems — from MVP to scalable enterprise solutions with a clear roadmap and SLA.",
        "details": "Architecture-first approach: modularity, security, and scalability from day one. Backend, frontend, mobile, and DevOps engineers led by a Lead Architect. Experience in fintech, e-commerce, SaaS, and internal tools.",
    },
    "testing": {
        "description": "Comprehensive QA for products where production errors cost money, reputation, or compliance penalties — with audit-ready reporting.",
        "details": "Manual and automated testing combined: test strategy, regression suites, CI/CD integration, and audit reporting. We work in fintech, e-commerce, healthtech, and other regulated industries.",
    },
    "ai": {
        "description": "We deploy ML, NLP, LLM, RAG, computer vision, and voice AI with measurable business impact. Every project starts with KPIs and an ROI model.",
        "details": "Full cycle: discovery, data audit, PoC → production. LLM fine-tuning, RAG, MLOps, drift monitoring, post-launch support. Experience in fintech, retail, manufacturing, insurance, legal, EdTech. On-prem, hybrid, cloud — GDPR/HIPAA-ready.",
        "features": [
            "LLM assistants for support, sales, and internal ops",
            "RAG: semantic search, cited Q&A",
            "NLP: classification, summarization, NER",
            "Computer vision: OCR, detection, video analytics, edge AI",
            "Voice AI: ASR, TTS, IVR, call analytics",
            "LLM fine-tuning, LoRA/QLoRA, embeddings",
            "Multi-agent: LangGraph, tool use, human-in-the-loop",
            "MLOps: model CI/CD, drift, A/B tests, GPU scaling",
        ],
    },
    "devops": {
        "description": "We set up infrastructure and delivery so releases are predictable and systems stay resilient under load and secure.",
        "details": "Cloud architecture (AWS, Azure, GCP), containerization, CI/CD, monitoring, and disaster recovery. We help teams move from manual deploys to automated pipelines with rollback, alerting, and cost optimization.",
    },
    "consulting": {
        "description": "We help you make the right technology decisions before development starts — and fix course when the product is already struggling.",
        "details": "Technical audits, architecture and delivery process review, team assessment. Roadmap, TCO estimates, build vs buy recommendations. From one-off sessions to 3–6 month embedded consulting.",
    },
    "support": {
        "description": "We take on post-launch project support: stability, monitoring, incidents, updates, and feature evolution under SLA.",
        "details": "L1/L2/L3 support with clear response and resolution SLAs. Monitoring, alerting, runbooks, post-mortems, capacity planning, security patches, and product evolution — new features, integrations, optimization — without downtime on business-critical functions.",
    },
}

TEAM_UK = {
    "t1": "Засновник і CEO Partnerio, Lead Architect з 20-річним досвідом enterprise-розробки. Визначає архітектурну стратегію компанії, стандарти інженерії та технічний due diligence для ключових проєктів. Безпосередньо залучений до fintech, banking і high-load платформ. Веде архітектурні комітети, code review критичних модулів і менторить team leads. Останні 5 років — фокус на AI-first архітектурі та інтеграції LLM у enterprise.",
    "t2": "Технічний директор Partnerio. Відповідає за технологічну стратегію, вибір стеку, архітектуру платформ і впровадження AI/ML у продукти клієнтів. Має досвід побудови R&D-процесів, масштабування команд 50+ інженерів і міграцій monolith → microservices. Курує безпеку, performance та технічну якість delivery. Керує ML/NLP/CV-напрямком і MLOps-практиками компанії.",
    "t3": "Фінансовий директор Partnerio. Керує фінансовим плануванням, бюджетуванням проєктів, управлінським обліком і оптимізацією витрат IT-компанії. Досвід роботи з міжнародними контрактами (EU, US), валютними ризиками та фінансовою звітністю для enterprise-клієнтів. Забезпечує прозорість T&M, fixed price і dedicated team моделей. Допомагає клієнтам будувати ROI-моделі для AI-проєктів.",
    "t4": "Операційний директор Partnerio. Відповідає за delivery-процеси, scaling команд, якість сервісу та виконання SLA. Впровадила Agile/Scrum практики, KPI для PM і систему регулярної звітності для клієнтів. Досвід управління portfolio з 15+ паралельних enterprise-проєктів і onboarding нових клієнтів за 2 тижні. Забезпечує передбачуваність термінів і прозорість для stakeholders.",
}

TEAM_EN = {
    "t1": "Founder and CEO of Partnerio, Lead Architect with 20 years of enterprise development experience. Sets company architecture strategy, engineering standards, and technical due diligence for key projects. Directly involved in fintech, banking, and high-load platforms. Leads architecture committees, critical code reviews, and mentors team leads. Last 5 years focused on AI-first architecture and LLM integration in enterprise.",
    "t2": "CTO of Partnerio. Owns technology strategy, stack selection, platform architecture, and AI/ML adoption in client products. Built R&D processes, scaled teams of 50+ engineers, and led monolith → microservices migrations. Oversees security, performance, and delivery quality. Leads the ML/NLP/CV practice and MLOps at the company.",
    "t3": "CFO of Partnerio. Manages financial planning, project budgeting, management accounting, and IT cost optimization. Experience with international contracts (EU, US), currency risk, and financial reporting for enterprise clients. Ensures transparency for T&M, fixed price, and dedicated team models. Helps clients build ROI models for AI projects.",
    "t4": "COO of Partnerio. Owns delivery processes, team scaling, service quality, and SLA execution. Implemented Agile/Scrum practices, PM KPIs, and regular client reporting. Managed portfolios of 15+ parallel enterprise projects and onboarded new clients within 2 weeks. Ensures predictable timelines and stakeholder transparency.",
}

TESTIMONIALS_UK = {
    "r1": "Нам потрібен був ШІ-асистент для кол-центру до пікового сезону — терміни піджимали. Partnerio за 3 місяці зібрали MVP, інтегрували з CRM і телефонією. Зараз автоматизовано 60% типових діалогів, а оператори отримують готовий контекст при ескалації. Щотижневі демо, прозорий backlog і жодних сюрпризів у кінці — саме те, чого ми чекали від підрядника. Після launch команда Partnerio залишилась на support — drift monitoring і retrain моделі під SLA.",
    "r2": "Після запуску e-commerce платформи від Partnerio ми обробляємо понад 2 000 замовлень на добу в пік. Окремо цінуємо архітектуру — B2B і B2C в одній системі без дублювання даних. QA-команда Partnerio побудувала автотести, і кількість багів у production впала на 80%. Комунікація на рівні product owner, а не «чорна скринька розробки». Рекомендуємо як партнера для складних retail-платформ.",
    "r3": "Core banking — не проєкт, де можна експериментувати з термінами. Partnerio зібрали команду, яка розуміє regulated-середовище: audit trails, compliance-звіти, документація. Регресія скоротилась з 5 днів до 4 годин — це змінило наш release cadence. Архітектура масштабується, а технічна документація дозволила внутрішній команді швидко підхопити підтримку. Працюємо з Partnerio вже третій рік.",
}

TESTIMONIALS_EN = {
    "r1": "We needed an AI assistant for our call center before peak season — timelines were tight. Partnerio delivered an MVP in 3 months, integrated with CRM and telephony. Now 60% of routine dialogs are automated, and agents get full context on escalation. Weekly demos, transparent backlog, no end-of-project surprises — exactly what we wanted from a vendor. After launch, Partnerio stayed on support — drift monitoring and model retraining under SLA.",
    "r2": "After launching the e-commerce platform from Partnerio, we handle 2,000+ orders per day at peak. We especially value the architecture — B2B and B2C in one system without data duplication. Partnerio's QA team built automated tests, and production bugs dropped 80%. Communication at product owner level, not a black-box dev shop. We recommend them for complex retail platforms.",
    "r3": "Core banking is not a project where you can experiment with timelines. Partnerio assembled a team that understands regulated environments: audit trails, compliance reports, documentation. Regression went from 5 days to 4 hours — that changed our release cadence. Architecture scales, and technical docs let our internal team take over support quickly. We've worked with Partnerio for three years now.",
}

for lang, exp, services, team, testimonials in [
    ("uk", UK_EXP, SERVICES_UK, TEAM_UK, TESTIMONIALS_UK),
    ("en", EN_EXP, SERVICES_EN, TEAM_EN, TESTIMONIALS_EN),
]:
    path = DATA / f"{lang}.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    for p in data["projects"]:
        if p["id"] in exp:
            p.update(exp[p["id"]])
    for s in data["services"]:
        if s["id"] in services:
            s.update(services[s["id"]])
    for t in data["team"]:
        if t["id"] in team:
            t["bio"] = team[t["id"]]
    for r in data["testimonials"]:
        if r["id"] in testimonials:
            r["text"] = testimonials[r["id"]]
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    for dest in (ROOT / "data", ROOT / "frontend" / "data"):
        shutil.copy2(path, dest / f"{lang}.json")

print("JSON updated")
