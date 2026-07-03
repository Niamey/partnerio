# Деплой Partnerio — виправлення 404

Сайт: **https://niamey.github.io/partnerio/**

## Варіант A (рекомендовано): папка `/docs`

1. Запуште зміни:
   ```powershell
   cd C:\Users\Hello\Documents\work\interwiev\Partnerio\partnerio
   git add docs .github/workflows/pages.yml DEPLOY.md
   git commit -m "Fix Pages 404: deploy static site from docs folder"
   git push origin main
   ```

2. GitHub → **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/docs`  ← не root, а **docs**
   - **Save**

3. Зачекайте 2–5 хв, відкрийте https://niamey.github.io/partnerio/ (Ctrl+F5)

## Варіант B: GitHub Actions

1. Після `git push` (див. вище)
2. **Settings → Pages → Source:** **GitHub Actions**
3. Перевірте **Actions** — workflow **Deploy Partnerio site** має бути зелений

## Якщо все ще 404

- Перевірте логін: **Niamey** (не niarney)
- Репозиторій: **partnerio** (не partnerio-front)
- У Settings → Pages має бути зелений банер «Your site is live at…»
