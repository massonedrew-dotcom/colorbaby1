/* Color Baby House — счётчики аналитики.
   Обычный скрипт (не JSX): грузится до React и не зависит от него.

   Как это работает:
   1. Номера счётчиков берутся из site.config.js. Пусто — ничего не грузится.
   2. По умолчанию счётчики ждут согласия посетителя (cookie-баннер), потому что
      закон РУз «О персональных данных» (ЗРУ-547) требует согласия до обработки.
      Дал согласие — счётчики поднимаются сразу, без перезагрузки страницы.
   3. Решение запоминается в localStorage, повторно баннер не показывается. */
(function () {
  var cfg = window.CS_CONFIG || {};
  var KEY = 'cs-analytics-consent';
  var started = false;

  function loadMetrika(id) {
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * new Date();
      for (var j = 0; j < e.scripts.length; j++) { if (e.scripts[j].src === r) { return; } }
      k = e.createElement(t); a = e.getElementsByTagName(t)[0];
      k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

    window.ym(id, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }

  function loadGA4(id) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id);
  }

  function start() {
    if (started) return;
    started = true;
    try {
      if (cfg.METRIKA_ID) loadMetrika(cfg.METRIKA_ID);
      if (cfg.GA4_ID) loadGA4(cfg.GA4_ID);
    } catch (e) {
      console.warn('[Color Baby House] Не удалось запустить аналитику:', e);
    }
  }

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* приватный режим — просто не запоминаем */ }
  }

  window.CSAnalytics = {
    /* Есть ли уже решение посетителя: 'granted' | 'denied' | null */
    decision: read,
    accept: function () { write('granted'); start(); },
    decline: function () { write('denied'); },
    /* Нужно ли показывать баннер */
    needsBanner: function () {
      if (!cfg.ANALYTICS_REQUIRES_CONSENT) return false;
      if (!cfg.METRIKA_ID && !cfg.GA4_ID) return false;   // нечего спрашивать
      return read() === null;
    },
  };

  if (!cfg.ANALYTICS_REQUIRES_CONSENT || read() === 'granted') start();
})();
