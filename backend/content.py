"""Bilingual API content for Partnerio (uk / en)."""

from __future__ import annotations

import json
from pathlib import Path

SUPPORTED_LANGS = ("uk", "en")
_DATA_ROOT = Path(__file__).resolve().parent.parent / "data"
_JSON_CACHE: dict[str, dict] = {}


def normalize_lang(lang: str | None) -> str:
    if lang and lang.lower() in SUPPORTED_LANGS:
        return lang.lower()
    return "uk"


CONTENT: dict[str, dict] = {
    "uk": {
        "services": [
            {
                "id": "development",
                "title": "Розробка ПЗ",
                "description": "Створюємо веб-, мобільні та корпоративні системи будь-якої складності — від MVP до enterprise-рішень.",
                "icon": "code",
                "features": [
                    "Веб-додатки та SaaS-платформи",
                    "Мобільні додатки iOS та Android",
                    "Мікросервісна архітектура",
                    "Інтеграції з API та legacy-системами",
                ],
            },
            {
                "id": "testing",
                "title": "Тестування ПЗ",
                "description": "Забезпечуємо якість продукту на всіх етапах — від ручного QA до автоматизованого тестування.",
                "icon": "shield",
                "features": [
                    "Функціональне та регресійне тестування",
                    "Автотести (Selenium, Playwright, Cypress)",
                    "Навантажувальне та безпекове тестування",
                    "CI/CD інтеграція тестів",
                ],
            },
            {
                "id": "ai",
                "title": "ШІ-проєкти",
                "description": "Розробляємо інтелектуальні рішення на базі машинного навчання, NLP та комп'ютерного зору.",
                "icon": "brain",
                "features": [
                    "Чат-боти та віртуальні асистенти",
                    "Аналіз даних та прогнозування",
                    "Computer Vision та OCR",
                    "Fine-tuning LLM під ваш бізнес",
                ],
            },
            {
                "id": "devops",
                "title": "DevOps та хмара",
                "description": "Налаштовуємо інфраструктуру, CI/CD пайплайни та моніторинг для стабільної роботи продуктів.",
                "icon": "cloud",
                "features": [
                    "AWS, Azure, GCP",
                    "Docker та Kubernetes",
                    "Моніторинг та логування",
                    "Infrastructure as Code",
                ],
            },
            {
                "id": "consulting",
                "title": "IT-консалтинг",
                "description": "Допомагаємо обрати технології, спроєктувати архітектуру та оптимізувати процеси розробки.",
                "icon": "chart",
                "features": [
                    "Технічний аудит коду",
                    "Архітектурне проєктування",
                    "Code review та менторинг",
                    "Оцінка термінів та бюджету",
                ],
            },
            {
                "id": "support",
                "title": "Підтримка та супровід",
                "description": "Забезпечуємо безперебійну роботу ваших систем після запуску — 24/7 моніторинг і швидке реагування.",
                "icon": "support",
                "features": [
                    "Технічна підтримка SLA",
                    "Оновлення та патчі безпеки",
                    "Масштабування під навантаження",
                    "Документація та навчання команди",
                ],
            },
        ],
        "projects": [
            {
                "id": "p1",
                "category": "ШІ / NLP",
                "title": "Розумний асистент для кол-центру",
                "description": "Розробили LLM-асистента, який автоматизує 60% типових звернень клієнтів та інтегрується з CRM.",
                "client": "FinTech Ukraine",
                "date": "2025",
                "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            },
            {
                "id": "p2",
                "category": "Веб-розробка",
                "title": "E-commerce платформа",
                "description": "Повноцінний маркетплейс з платіжною системою, аналітикою та адмін-панеллю для 50 000+ SKU.",
                "client": "Retail Group",
                "date": "2024",
                "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
            },
            {
                "id": "p3",
                "category": "QA / Автотести",
                "title": "Автоматизація тестування банківської системи",
                "description": "Побудували фреймворк автотестів, що скоротив час регресії з 5 днів до 4 годин.",
                "client": "NovaBank",
                "date": "2024",
                "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
            },
            {
                "id": "p4",
                "category": "Computer Vision",
                "title": "Система контролю якості на виробництві",
                "description": "ШІ-модель виявляє дефекти продукції в реальному часі з точністю 98.5%.",
                "client": "IndustrialTech",
                "date": "2025",
                "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
            },
        ],
        "team": [
            {
                "id": "t1",
                "name": "Антон Філь",
                "role": "CEO & Lead Architect",
                "experience": "15 років досвіду",
                "bio": "Засновник компанії. Експерт з enterprise-архітектури та стратегії розвитку IT-продуктів.",
                "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
            },
            {
                "id": "t2",
                "name": "Ольга Корнєва",
                "role": "СТО",
                "experience": "17 років досвіду",
                "bio": "Технічний директор компанії. Визначає технологічну стратегію, архітектуру платформ та впровадження інновацій у продукти.",
                "image": "images/olga-korneva.png",
            },
            {
                "id": "t3",
                "name": "Дмитро Бондаренко",
                "role": "AI/ML Lead",
                "experience": "8 років досвіду",
                "bio": "PhD у машинному навчанні. Спеціалізується на NLP та computer vision.",
                "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
            },
            {
                "id": "t4",
                "name": "Анна Мельник",
                "role": "Senior Full-Stack Developer",
                "experience": "7 років досвіду",
                "bio": "Експерт з React, Node.js та Python. Вела розробку 20+ успішних проєктів.",
                "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
            },
        ],
        "testimonials": [
            {
                "id": "r1",
                "name": "Ігор Петренко",
                "company": "FinTech Ukraine",
                "text": "Partnerio допомогла нам запустити ШІ-асистента за 3 місяці. Команда професійна, комунікація на найвищому рівні. Рекомендую!",
                "date": "Жовтень 2025",
            },
            {
                "id": "r2",
                "name": "Олена Сидоренко",
                "company": "Retail Group",
                "text": "Завдяки автотестам від Partnerio ми скоротили кількість багів у продакшені на 80%. QA-команда — справжні професіонали.",
                "date": "Травень 2025",
            },
            {
                "id": "r3",
                "name": "Віктор Лисенко",
                "company": "NovaBank",
                "text": "Розробили складну банківську систему вчасно та в бюджеті. Архітектура масштабується, документація — на висоті.",
                "date": "Червень 2025",
            },
        ],
        "stats": [
            {"value": "120+", "label": "Спеціалістів", "description": "Розробники, QA-інженери та ML-експерти в нашій команді."},
            {"value": "250+", "label": "Проєктів", "description": "Успішно реалізованих рішень для клієнтів з 15 країн."},
            {"value": "98%", "label": "Задоволених клієнтів", "description": "Повертаються до нас з новими завданнями та рекомендують партнерам."},
        ],
        "messages": {
            "contact_success": "Дякуємо! Ми зв'яжемося з вами найближчим часом.",
            "contact_error": "Не вдалося надіслати форму. Спробуйте пізніше.",
            "invalid_json": "Невірний формат JSON",
            "name_short": "Вкажіть ім'я (мінімум 2 символи)",
            "email_invalid": "Вкажіть коректний email",
            "message_short": "Повідомлення занадто коротке (мінімум 10 символів)",
        },
    },
    "en": {
        "services": [
            {
                "id": "development",
                "title": "Software Development",
                "description": "We build web, mobile, and enterprise systems of any complexity — from MVP to enterprise-grade solutions.",
                "icon": "code",
                "features": [
                    "Web apps and SaaS platforms",
                    "iOS and Android mobile apps",
                    "Microservices architecture",
                    "API and legacy system integrations",
                ],
            },
            {
                "id": "testing",
                "title": "Software Testing",
                "description": "We ensure product quality at every stage — from manual QA to fully automated testing.",
                "icon": "shield",
                "features": [
                    "Functional and regression testing",
                    "Test automation (Selenium, Playwright, Cypress)",
                    "Load and security testing",
                    "CI/CD test integration",
                ],
            },
            {
                "id": "ai",
                "title": "AI Projects",
                "description": "We develop intelligent solutions based on machine learning, NLP, and computer vision.",
                "icon": "brain",
                "features": [
                    "Chatbots and virtual assistants",
                    "Data analysis and forecasting",
                    "Computer vision and OCR",
                    "LLM fine-tuning for your business",
                ],
            },
            {
                "id": "devops",
                "title": "DevOps & Cloud",
                "description": "We set up infrastructure, CI/CD pipelines, and monitoring for reliable product operations.",
                "icon": "cloud",
                "features": [
                    "AWS, Azure, GCP",
                    "Docker and Kubernetes",
                    "Monitoring and logging",
                    "Infrastructure as Code",
                ],
            },
            {
                "id": "consulting",
                "title": "IT Consulting",
                "description": "We help you choose technologies, design architecture, and optimize development processes.",
                "icon": "chart",
                "features": [
                    "Technical code audit",
                    "Architecture design",
                    "Code review and mentoring",
                    "Timeline and budget estimation",
                ],
            },
            {
                "id": "support",
                "title": "Support & Maintenance",
                "description": "We keep your systems running after launch — 24/7 monitoring and rapid incident response.",
                "icon": "support",
                "features": [
                    "SLA-backed technical support",
                    "Security updates and patches",
                    "Scaling under load",
                    "Documentation and team training",
                ],
            },
        ],
        "projects": [
            {
                "id": "p1",
                "category": "AI / NLP",
                "title": "Smart call center assistant",
                "description": "Built an LLM assistant that automates 60% of routine customer requests and integrates with CRM.",
                "client": "FinTech Ukraine",
                "date": "2025",
                "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            },
            {
                "id": "p2",
                "category": "Web Development",
                "title": "E-commerce platform",
                "description": "Full marketplace with payments, analytics, and admin panel for 50,000+ SKUs.",
                "client": "Retail Group",
                "date": "2024",
                "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
            },
            {
                "id": "p3",
                "category": "QA / Automation",
                "title": "Banking system test automation",
                "description": "Built a test framework that reduced regression time from 5 days to 4 hours.",
                "client": "NovaBank",
                "date": "2024",
                "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
            },
            {
                "id": "p4",
                "category": "Computer Vision",
                "title": "Manufacturing quality control system",
                "description": "AI model detects product defects in real time with 98.5% accuracy.",
                "client": "IndustrialTech",
                "date": "2025",
                "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
            },
        ],
        "team": [
            {
                "id": "t1",
                "name": "Anton Fil",
                "role": "CEO & Lead Architect",
                "experience": "15 years of experience",
                "bio": "Company founder. Expert in enterprise architecture and IT product strategy.",
                "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
            },
            {
                "id": "t2",
                "name": "Olga Korneva",
                "role": "CTO",
                "experience": "17 years of experience",
                "bio": "Chief Technology Officer. Defines technology strategy, platform architecture, and drives innovation across products.",
                "image": "images/olga-korneva.png",
            },
            {
                "id": "t3",
                "name": "Dmytro Bondarenko",
                "role": "AI/ML Lead",
                "experience": "8 years of experience",
                "bio": "PhD in machine learning. Specializes in NLP and computer vision.",
                "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
            },
            {
                "id": "t4",
                "name": "Anna Melnyk",
                "role": "Senior Full-Stack Developer",
                "experience": "7 years of experience",
                "bio": "Expert in React, Node.js, and Python. Led development of 20+ successful projects.",
                "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
            },
        ],
        "testimonials": [
            {
                "id": "r1",
                "name": "Ihor Petrenko",
                "company": "FinTech Ukraine",
                "text": "Partnerio helped us launch an AI assistant in 3 months. Professional team, excellent communication. Highly recommended!",
                "date": "October 2025",
            },
            {
                "id": "r2",
                "name": "Olena Sydorenko",
                "company": "Retail Group",
                "text": "Thanks to Partnerio's test automation, we reduced production bugs by 80%. The QA team are true professionals.",
                "date": "May 2025",
            },
            {
                "id": "r3",
                "name": "Viktor Lysenko",
                "company": "NovaBank",
                "text": "They delivered a complex banking system on time and on budget. Scalable architecture and excellent documentation.",
                "date": "June 2025",
            },
        ],
        "stats": [
            {"value": "120+", "label": "Specialists", "description": "Developers, QA engineers, and ML experts on our team."},
            {"value": "250+", "label": "Projects", "description": "Successfully delivered solutions for clients in 15 countries."},
            {"value": "98%", "label": "Satisfied clients", "description": "Return with new tasks and recommend us to partners."},
        ],
        "messages": {
            "contact_success": "Thank you! We will contact you shortly.",
            "contact_error": "Failed to submit the form. Please try again later.",
            "invalid_json": "Invalid JSON format",
            "name_short": "Please enter your name (at least 2 characters)",
            "email_invalid": "Please enter a valid email",
            "message_short": "Message is too short (minimum 10 characters)",
        },
    },
}


def _json_bundle(lang: str) -> dict:
    lang = normalize_lang(lang)
    if lang not in _JSON_CACHE:
        path = _DATA_ROOT / f"{lang}.json"
        if path.is_file():
            _JSON_CACHE[lang] = json.loads(path.read_text(encoding="utf-8"))
        else:
            _JSON_CACHE[lang] = {}
    return _JSON_CACHE[lang]


def get_content(lang: str | None, key: str):
    lang = normalize_lang(lang)
    bundle = _json_bundle(lang)
    if key in bundle:
        return bundle[key]
    return CONTENT[lang][key]


def get_message(lang: str | None, key: str) -> str:
    return get_content(lang, "messages")[key]
