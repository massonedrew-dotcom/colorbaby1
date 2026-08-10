# Безопасность сайта «Color Baby House»

Краткая памятка по тому, как сейчас устроена защита и что делать дальше.

## Как собран сайт (важно для понимания рисков)

Сейчас это **полностью статический фронтенд**:

- React и Babel подключаются по CDN (`unpkg.com`), JSX компилируется **прямо в браузере**;
- разметка и стили — из дизайн-системы (`styles.css`, токены);
- **нет ни сервера, ни базы данных** — страница просто отдаётся как файлы.

## Про SQL-инъекции

**SQL-инъекций здесь сейчас быть не может** — потому что нет ни SQL-базы, ни серверного кода,
который выполнял бы запросы. Форма заявки пока **не отправляет данные никуда** (заглушка).

SQL-инъекции станут актуальны **только когда появится бэкенд**, принимающий заявки. Тогда обязательно:

1. **Параметризованные запросы / prepared statements** (никогда не склеивать SQL строками).
   Пример (Node + PostgreSQL): `db.query('INSERT INTO leads(name, phone) VALUES($1, $2)', [name, phone])`.
2. **Серверная валидация** всех полей (не доверять данным из браузера).
3. **ORM** (Prisma, Sequelize, Knex) — экранирует значения по умолчанию.
4. **Минимальные права** у пользователя БД (только INSERT в таблицу заявок).
5. **Rate limiting / капча** на эндпоинте формы — против спама и перебора.

## Что уже сделано на фронтенде

- **CSP (Content-Security-Policy)** — в `<meta>` в `standalone.html` и в серверных заголовках
  (`_headers`, `.htaccess`): ограничивает, откуда грузятся скрипты/стили/картинки, и режет
  inline-инъекции чужого кода.
- **Санитизация ввода** (`sanitize()` в `Common.jsx`): из текстовых полей формы удаляются
  угловые скобки `<`/`>` и управляющие символы, ограничена длина — защита от вставки HTML/скриптов (XSS).
- **Маска телефона** (`formatPhone`) — в поле телефона остаются только `+` и цифры.
- **Безопасные внешние ссылки** — `rel="noopener noreferrer"` на всех ссылках с `target="_blank"`.
- **Referrer-Policy** — не утекает полный адрес страницы на сторонние сайты.

## Что включить на хостинге (заголовки уровня сервера)

Заголовки в `<meta>` работают частично; полноценно их задаёт сервер. Готовые файлы:

- **Netlify / Cloudflare Pages** → файл `_headers`;
- **Apache** → файл `.htaccess`;
- **Nginx** — добавьте в конфиг:
  ```nginx
  add_header X-Frame-Options "DENY" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
  add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://unpkg.com; form-action 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'" always;
  ```

Главное на хостинге: **обязательно включить HTTPS** (бесплатно через Let's Encrypt) — без него
заголовок HSTS и защита данных формы не имеют смысла.

## Рекомендации на будущее

- Перейти на **продакшен-сборку** (Vite): убрать Babel-в-браузере и `'unsafe-eval'` из CSP,
  подключать React локально (а не с CDN) — это и безопаснее, и быстрее.
- При подключении приёма заявок (почта/Telegram-бот/CRM) — см. раздел про SQL-инъекции выше.
