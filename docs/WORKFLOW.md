# Git & Vercel Deployment Workflow

Документ описывает схему работы с ветками `preview` и `master` для разработки, тестирования и релиза на Vercel.

---

## 📐 Общая схема веток

* **`preview`** — Ветка для тестирования и предпросмотра. При пуше в эту ветку Vercel автоматический создаёт **Preview Deployment**.
* **`master`** — Основная ветка приложения. При пуше в эту ветку Vercel автоматически выкатывает изменения на **Production** (`codecollider.tech`).
* **Все остальные ветки** — Игнорируются Vercel CI/CD (благодаря настройке `ignoreCommand` в `vercel.json`).

---

## 🛠️ Команды и Сценарии работы

### 1. Ежедневная локальная разработка

Переключиться на ветку `preview` и запустить локальный сервер:

```bash
# Переключение на ветку preview
git checkout preview

# Запуск локального сервера разработки
pnpm dev
```

Делайте коммиты по мере выполнения работы:

```bash
git add .
git commit -m "feat: описание вашей фичи"
```

---

### 2. Тестирование на Vercel Preview

Когда фича готова и её нужно протестировать на тестовом стенде Vercel и в TinaCMS:

```bash
# Отправляем изменения в ветку preview на GitHub
git push origin preview
```

> 🚀 **Vercel** автоматически подхватит push и соберет **Preview Deployment**.

---

### 3. Релиз на Production (выкатываем на сайт)

Когда на Preview всё проверено и работа утверждена, выкатываем в `master`:

```bash
# 1. Переключаемся на master
git checkout master

# 2. Подтягиваем свежие изменения из preview
git merge preview

# 3. Пушим в master
git push origin master

# 4. Возвращаемся на рабочую ветку preview
git checkout preview
```

> 🌟 **Vercel** подхватит `master` и обновит рабочий **Production-сайт**.

---

## 💡 Полезные команды для работы с ветками

```bash
# Посмотреть текущую ветку и статус файлов
git status

# Переключиться на ветку preview
git checkout preview

# Переключиться на ветку master
git checkout master

# Создать новую отдельную ветку под конкретную задачу
git checkout -b feature/my-new-task
```
