/* Color Baby House — UI kit shared helpers (window-global pattern) */

/* Настройки сайта (домен, счётчики, приёмник заявок) — см. site.config.js в корне. */
const CFG = window.CS_CONFIG || {};

/* ===== Пути к статике =====
   Страницы сайта лежат на разной глубине: главная в корне, а превью
   дизайн-системы — в /ui_kits/website/. Относительные пути вида '../../assets/…'
   в JSX считаются от адреса СТРАНИЦЫ, а не от файла компонента, поэтому один и
   тот же путь ломался бы на одной из них. Базу задаёт сама страница атрибутом
   <html data-asset-base="…">, а компоненты просто зовут asset('assets/…'). */
const ASSET_BASE = document.documentElement.getAttribute('data-asset-base') || '';
const asset = (p) => ASSET_BASE + String(p).replace(/^\/+/, '');
/* Адрес главной. Нужен для ссылки с логотипа: по чек-листу логотип обязан
   вести на главную. Возвращаем относительный путь, а не «/», чтобы сайт
   одинаково работал и на своём домене, и во вложенной папке (GitHub Pages). */
const homeUrl = () => asset('') || './';

/* Собственные размеры фотографий. Нужны, чтобы браузер зарезервировал место под
   картинку до её загрузки — иначе страница «прыгает» при подгрузке (метрика CLS,
   а это фактор ранжирования). Держим списком: файлов немного, а лезть за
   размерами в рантайме поздно — место нужно зарезервировать заранее. */
const PHOTO_SIZES = {
  'acting': [900, 600], 'chess': [900, 600], 'drawing': [900, 600],
  'english': [900, 600], 'speech': [900, 600],
  'crafts': [800, 1200], 'games': [800, 1200],
  'dance': [899, 1200], 'gymnastics': [899, 1200],
  'kids-reading': [899, 1200], 'massage': [899, 1200], 'playroom': [899, 1200],
  'robotics': [899, 1200], 'summer-pool': [899, 1200], 'taekwondo': [899, 1200],
};

/* Если браузер не умеет WebP — молча подменяем картинку на исходный JPEG.
   Срабатывает один раз: data-fb помечает уже подменённые, иначе при повторной
   ошибке получился бы бесконечный цикл. */
function onImgFallback(e) {
  const im = e.currentTarget;
  if (im.dataset.fb || !im.dataset.fallback) return;
  im.dataset.fb = '1';
  im.src = im.dataset.fallback;
}

/* Готовый набор атрибутов для <img>: WebP вместо JPEG (на 40–50 % легче),
   собственные размеры против скачков вёрстки и ленивая загрузка. */
function imgProps(path, { eager = false } = {}) {
  const name = String(path).split('/').pop().replace(/\.\w+$/, '');
  const size = PHOTO_SIZES[name];
  const isJpg = /\.jpe?g$/i.test(path);
  return {
    src: asset(isJpg ? path.replace(/\.jpe?g$/i, '.webp') : path),
    'data-fallback': isJpg ? asset(path) : undefined,
    onError: isJpg ? onImgFallback : undefined,
    width: size ? size[0] : undefined,
    height: size ? size[1] : undefined,
    loading: eager ? 'eager' : 'lazy',
    decoding: 'async',
  };
}

const Ic = ({ n, size = 24, color, style = {} }) => (
  <i data-lucide={n} style={{ width: size, height: size, color, ...style }}></i>
);

/* Photo — реальное фото (если задан src) или плейсхолдер-заглушка.
   src — путь от корня сайта ('assets/photos/x.jpg'), objectPosition — какую
   часть кадра показывать при обрезке. */
function Photo({ caption = 'Фото', icon = 'image', tint = 'pink', radius = 'var(--radius-lg)', src = null, alt = '', objectPosition = 'center', eager = false, className, style = {} }) {
  if (src) {
    return (
      <img
        {...imgProps(src, { eager })}
        alt={alt || caption}
        className={className}
        style={{
          display: 'block', width: '100%', height: '100%',
          objectFit: 'cover', objectPosition,
          borderRadius: radius,
          ...style,
        }}
      />
    );
  }
  const grad = {
    pink: 'linear-gradient(135deg, var(--pink-100), var(--orange-100))',
    sky: 'linear-gradient(135deg, var(--sky-100), var(--mint-100))',
    sun: 'linear-gradient(135deg, var(--yellow-100), var(--orange-100))',
    purple: 'linear-gradient(135deg, var(--purple-100), var(--pink-100))',
  };
  return (
    <div className={className} style={{
      background: grad[tint] || grad.pink,
      borderRadius: radius,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: '10px', color: 'var(--ink-400)', overflow: 'hidden', position: 'relative',
      ...style,
    }}>
      <Ic n={icon} size={34} />
      <span style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '.02em' }}>{caption}</span>
    </div>
  );
}

/* Decorative blurred blob */
function Blob({ color = 'var(--pink-200)', size = 220, className, style = {} }) {
  return <div className={className} style={{
    position: 'absolute', width: size, height: size, borderRadius: '50%',
    background: color, filter: 'blur(40px)', opacity: 0.55, pointerEvents: 'none', ...style,
  }} />;
}

/* Фирменный знак: кольцо из мазков, дети с шариком, ладони под ними.
   Вектор (SVG), а не PNG — знак стоит в шапке, в подвале и на служебных
   страницах, и в каждом размере должен быть резким. Имя SunMark сохранено:
   на него ссылаются компоненты и собранная копия дизайн-системы. */
function SunMark({ size = 40, alt = 'Логотип Color Baby House', className, style = {} }) {
  return <img src={asset('assets/logo-cbh-mark.svg')} alt={alt} width={size} height={size}
    loading="lazy" decoding="async" className={className} style={{ width: size, height: size, ...style }} />;
}

/* Smooth-scroll to a section by id (accounts for sticky header via scrollMarginTop) */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===== Цели аналитики =====
   Один вызов — и событие уходит и в Яндекс.Метрику, и в GA4. Если счётчик не
   подключён (или посетитель не дал согласия), функция просто ничего не делает. */
function goal(name, params) {
  try {
    if (CFG.METRIKA_ID && typeof window.ym === 'function') {
      window.ym(CFG.METRIKA_ID, 'reachGoal', name, params);
    }
    if (CFG.GA4_ID && typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  } catch (e) { /* аналитика не должна ронять сайт */ }
}

/* ===== Отправка заявки =====
   Адрес обработчика задаётся в site.config.js (FORM_ENDPOINT). Пока он пустой,
   форма ведёт себя как раньше (показывает благодарность), но в консоль пишется
   явное предупреждение — чтобы «тихая» потеря заявок не осталась незамеченной. */
async function sendLead(payload) {
  const data = {
    ...payload,
    page: location.pathname + location.search,
    referrer: document.referrer || '',
    sentAt: new Date().toISOString(),
  };
  if (!CFG.FORM_ENDPOINT) {
    console.warn('[Color Baby House] FORM_ENDPOINT не задан в site.config.js — заявка НЕ отправлена:', data);
    return { ok: false, reason: 'no-endpoint' };
  }
  try {
    const res = await fetch(CFG.FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) return { ok: false, reason: 'http-' + res.status };
    return { ok: true };
  } catch (err) {
    console.error('[Color Baby House] Не удалось отправить заявку:', err);
    return { ok: false, reason: 'network' };
  }
}

/* Маска телефона: гарантирует «+» в начале, не привязана к стране.
   Сохраняет цифры и пробелы как ввёл пользователь (до 15 цифр, стандарт E.164). */
function formatPhone(value) {
  let v = (value || '').replace(/[^\d ]/g, '');           // оставляем только цифры и пробелы
  const digits = v.replace(/\s/g, '');
  if (!digits) return '';
  if (digits.length > 15) {                               // не даём ввести больше 15 цифр
    let count = 0;
    v = v.replace(/\d/g, (d) => (++count > 15 ? '' : d));
  }
  return '+' + v.replace(/^\s+/, '');
}

/* Лёгкая санитизация текстового ввода (защита от вставки HTML/скриптов).
   Убирает угловые скобки и управляющие символы (код < 32 и DEL), ограничивает длину. */
function sanitize(value, maxLen = 80) {
  const cleaned = (value || '')
    .replace(/[<>]/g, '')
    .split('')
    .filter((ch) => {
      const code = ch.charCodeAt(0);
      return code >= 32 && code !== 127;
    })
    .join('');
  return cleaned.slice(0, maxLen);
}

/* ===== Согласие на обработку персональных данных =====
   Закон Республики Узбекистан «О персональных данных» (ЗРУ-547) требует
   согласия субъекта до сбора данных. Галочка намеренно НЕ отмечена по
   умолчанию: предустановленная галочка согласием не считается. */
function ConsentCheck({ checked, onChange, id }) {
  return (
    <label htmlFor={id} style={{
      display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer',
      fontSize: '12px', lineHeight: 1.45, color: 'var(--color-text-subtle)',
    }}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required
        style={{
          width: 18, height: 18, flex: 'none', marginTop: 1,
          accentColor: 'var(--color-primary)', cursor: 'pointer',
        }}
      />
      <span>
        Согласен(на) на{' '}
        <a href={asset('consent.html')} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-text)' }}>
          обработку персональных данных
        </a>{' '}и с{' '}
        <a href={asset('privacy.html')} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-text)' }}>
          политикой конфиденциальности
        </a>
      </span>
    </label>
  );
}

Object.assign(window, {
  CFG, asset, homeUrl, imgProps, Ic, Photo, Blob, SunMark, scrollToId,
  formatPhone, sanitize, goal, sendLead, ConsentCheck,
});
