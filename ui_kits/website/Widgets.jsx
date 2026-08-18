/* Color Baby House — мелкие сквозные виджеты: кнопка «наверх» и cookie-уведомление */

/* Кнопка быстрой прокрутки наверх.
   Появляется, когда посетитель ушёл ниже полутора экранов — раньше она только
   мешала бы. Сдвинута влево от плавающей заявки, чтобы кнопки не наезжали. */
function ScrollTop() {
  const { Ic } = window;
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.5);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const up = () => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={up}
      aria-label="Наверх"
      title="Наверх"
      style={{
        position: 'fixed', zIndex: 190,
        bottom: 'clamp(16px, 3vh, 28px)',
        left: 'clamp(16px, 2vw, 28px)',
        width: 48, height: 48, borderRadius: '50%',
        border: '2px solid var(--plate-line, #F2C41C)', background: 'rgba(255,255,255,0.94)',
        color: 'var(--color-primary-text)', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: 'var(--shadow-md)',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      }}
    >
      <Ic n="arrow-up" size={22} />
    </button>
  );
}

/* Уведомление об использовании cookie и систем аналитики.
   Показывается один раз, пока посетитель не сделает выбор. Пока выбора нет,
   счётчики не грузятся вовсе — см. analytics.js. */
function CookieBanner() {
  const { Ic, asset } = window;
  const api = window.CSAnalytics;
  const [show, setShow] = React.useState(() => !!(api && api.needsBanner()));

  if (!show) return null;

  const decide = (accepted) => {
    if (accepted) api.accept(); else api.decline();
    setShow(false);
  };

  return (
    <div role="dialog" aria-label="Использование cookie" style={{
      position: 'fixed', zIndex: 300,
      left: 'clamp(12px, 2vw, 24px)', right: 'clamp(12px, 2vw, 24px)',
      bottom: 'clamp(12px, 2vh, 24px)',
      maxWidth: '760px', margin: '0 auto',
      background: '#fff', borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-xl, var(--shadow-lg))',
      padding: 'clamp(16px, 2.5vw, 22px)',
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px',
    }}>
      <span style={{
        width: 44, height: 44, flex: 'none', borderRadius: '50%',
        background: 'var(--color-primary-soft)', color: 'var(--color-primary-text)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Ic n="cookie" size={22} />
      </span>
      <p style={{
        flex: '1 1 280px', margin: 0, fontSize: '14px', lineHeight: 1.55,
        color: 'var(--color-text-muted)',
      }}>
        Мы используем cookie и сервисы аналитики, чтобы сайт работал удобнее.
        Подробнее — в{' '}
        <a href={asset('privacy.html')} style={{ color: 'var(--color-primary-text)', fontWeight: 700 }}>
          политике конфиденциальности
        </a>.
      </p>
      <div style={{ display: 'flex', gap: '10px', flex: '0 0 auto' }}>
        <button type="button" onClick={() => decide(false)} style={{
          padding: '11px 18px', borderRadius: 'var(--radius-pill)',
          border: '2px solid var(--color-border-strong)', background: 'transparent',
          color: 'var(--ink-700)', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
          fontFamily: 'var(--font-body)',
        }}>Только необходимые</button>
        <button type="button" onClick={() => decide(true)} style={{
          padding: '11px 20px', borderRadius: 'var(--radius-pill)',
          border: 'none', background: 'var(--color-primary)', color: '#fff',
          fontWeight: 800, fontSize: '14px', cursor: 'pointer',
          fontFamily: 'var(--font-body)', boxShadow: 'var(--shadow-pink)',
        }}>Принять</button>
      </div>
    </div>
  );
}

Object.assign(window, { ScrollTop, CookieBanner });
