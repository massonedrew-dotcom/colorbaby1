function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CFG = window.CS_CONFIG || {};
const ASSET_BASE = document.documentElement.getAttribute('data-asset-base') || '';
const asset = p => ASSET_BASE + String(p).replace(/^\/+/, '');
const homeUrl = () => asset('') || './';
const PHOTO_SIZES = {
  'acting': [900, 600],
  'chess': [900, 600],
  'drawing': [900, 600],
  'english': [900, 600],
  'speech': [900, 600],
  'crafts': [800, 1200],
  'games': [800, 1200],
  'dance': [899, 1200],
  'gymnastics': [899, 1200],
  'kids-reading': [899, 1200],
  'massage': [899, 1200],
  'playroom': [899, 1200],
  'robotics': [899, 1200],
  'summer-pool': [899, 1200],
  'taekwondo': [899, 1200]
};
function onImgFallback(e) {
  const im = e.currentTarget;
  if (im.dataset.fb || !im.dataset.fallback) return;
  im.dataset.fb = '1';
  im.src = im.dataset.fallback;
}
function imgProps(path, {
  eager = false
} = {}) {
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
    decoding: 'async'
  };
}
const Ic = ({
  n,
  size = 24,
  color,
  style = {}
}) => React.createElement("i", {
  "data-lucide": n,
  style: {
    width: size,
    height: size,
    color,
    ...style
  }
});
function Photo({
  caption = 'Фото',
  icon = 'image',
  tint = 'pink',
  radius = 'var(--radius-lg)',
  src = null,
  alt = '',
  objectPosition = 'center',
  eager = false,
  className,
  style = {}
}) {
  if (src) {
    return React.createElement("img", _extends({}, imgProps(src, {
      eager
    }), {
      alt: alt || caption,
      className: className,
      style: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition,
        borderRadius: radius,
        ...style
      }
    }));
  }
  const grad = {
    pink: 'linear-gradient(135deg, var(--pink-100), var(--orange-100))',
    sky: 'linear-gradient(135deg, var(--sky-100), var(--mint-100))',
    sun: 'linear-gradient(135deg, var(--yellow-100), var(--orange-100))',
    purple: 'linear-gradient(135deg, var(--purple-100), var(--pink-100))'
  };
  return React.createElement("div", {
    className: className,
    style: {
      background: grad[tint] || grad.pink,
      borderRadius: radius,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      color: 'var(--ink-400)',
      overflow: 'hidden',
      position: 'relative',
      ...style
    }
  }, React.createElement(Ic, {
    n: icon,
    size: 34
  }), React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '13px',
      letterSpacing: '.02em'
    }
  }, caption));
}
function Blob({
  color = 'var(--pink-200)',
  size = 220,
  className,
  style = {}
}) {
  return React.createElement("div", {
    className: className,
    style: {
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      filter: 'blur(40px)',
      opacity: 0.55,
      pointerEvents: 'none',
      ...style
    }
  });
}
function SunMark({
  size = 40,
  alt = 'Логотип Color Baby House',
  className,
  style = {}
}) {
  return React.createElement("img", {
    src: asset('assets/logo-cbh-mark.svg'),
    alt: alt,
    width: size,
    height: size,
    loading: "lazy",
    decoding: "async",
    className: className,
    style: {
      width: size,
      height: size,
      ...style
    }
  });
}
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
function goal(name, params) {
  try {
    if (CFG.METRIKA_ID && typeof window.ym === 'function') {
      window.ym(CFG.METRIKA_ID, 'reachGoal', name, params);
    }
    if (CFG.GA4_ID && typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  } catch (e) {}
}
async function sendLead(payload) {
  const data = {
    ...payload,
    page: location.pathname + location.search,
    referrer: document.referrer || '',
    sentAt: new Date().toISOString()
  };
  if (!CFG.FORM_ENDPOINT) {
    console.warn('[Color Baby House] FORM_ENDPOINT не задан в site.config.js — заявка НЕ отправлена:', data);
    return {
      ok: false,
      reason: 'no-endpoint'
    };
  }
  try {
    const res = await fetch(CFG.FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) return {
      ok: false,
      reason: 'http-' + res.status
    };
    return {
      ok: true
    };
  } catch (err) {
    console.error('[Color Baby House] Не удалось отправить заявку:', err);
    return {
      ok: false,
      reason: 'network'
    };
  }
}
function formatPhone(value) {
  let v = (value || '').replace(/[^\d ]/g, '');
  const digits = v.replace(/\s/g, '');
  if (!digits) return '';
  if (digits.length > 15) {
    let count = 0;
    v = v.replace(/\d/g, d => ++count > 15 ? '' : d);
  }
  return '+' + v.replace(/^\s+/, '');
}
function sanitize(value, maxLen = 80) {
  const cleaned = (value || '').replace(/[<>]/g, '').split('').filter(ch => {
    const code = ch.charCodeAt(0);
    return code >= 32 && code !== 127;
  }).join('');
  return cleaned.slice(0, maxLen);
}
function ConsentCheck({
  checked,
  onChange,
  id
}) {
  return React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      cursor: 'pointer',
      fontSize: '12px',
      lineHeight: 1.45,
      color: 'var(--color-text-subtle)'
    }
  }, React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: e => onChange(e.target.checked),
    required: true,
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      marginTop: 1,
      accentColor: 'var(--color-primary)',
      cursor: 'pointer'
    }
  }), React.createElement("span", null, "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D(\u043D\u0430) \u043D\u0430", ' ', React.createElement("a", {
    href: asset('consent.html'),
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--color-primary-text)'
    }
  }, "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), ' ', "\u0438 \u0441", ' ', React.createElement("a", {
    href: asset('privacy.html'),
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--color-primary-text)'
    }
  }, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")));
}
Object.assign(window, {
  CFG,
  asset,
  homeUrl,
  imgProps,
  Ic,
  Photo,
  Blob,
  SunMark,
  scrollToId,
  formatPhone,
  sanitize,
  goal,
  sendLead,
  ConsentCheck
});