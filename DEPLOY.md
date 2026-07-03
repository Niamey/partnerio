# Деплой Partnerio на GitHub Pages

## Правильна адреса сайту

Логін GitHub: **Niamey** (не niarney, не niamrey)

Сайт: **https://niamey.github.io/partnerio/**

## Крок 1 — увімкнути GitHub Actions (не "Deploy from branch")

1. https://github.com/Niamey/partnerio/settings/pages
2. **Build and deployment → Source** → виберіть **GitHub Actions**
3. Збережіть

## Крок 2 — запушити workflow

```powershell
cd C:\Users\Hello\Documents\work\interwiev\Partnerio\partnerio
git add .github/workflows/pages.yml DEPLOY.md
git commit -m "Add GitHub Actions Pages deploy workflow"
git push origin main
```

## Крок 3 — перевірити збірку

1. https://github.com/Niamey/partnerio/actions
2. Відкрийте workflow **Deploy Partnerio site** — має бути зелена галочка
3. Через 1–3 хв відкрийте https://niamey.github.io/partnerio/
