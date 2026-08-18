/* Color Baby House — Footer */
function Footer() {
  const { Ic, scrollToId, asset, homeUrl, SunMark, goal, CFG } = window;

  // Ссылки ведут только туда, где действительно есть секция: «мёртвые» пункты
  // с href="#" поисковик считает битыми ссылками, а посетителя они раздражают.
  const cols = [
    { h: 'Садик', items: [
      { t: 'О нас', id: 'about' },
      { t: 'Распорядок дня', id: 'schedule' },
      { t: 'Галерея', id: 'gallery' },
      { t: 'Лето', id: 'summer' },
    ] },
    { h: 'Занятия', items: [
      { t: 'Английский', id: 'programs' },
      { t: 'Танцы', id: 'programs' },
      { t: 'Шахматы', id: 'programs' },
      { t: 'Робототехника', id: 'programs' },
      { t: 'Логопед', id: 'programs' },
    ] },
    { h: 'Родителям', items: [
      { t: 'Цены', id: 'pricing' },
      { t: 'Запись', id: 'enroll' },
      { t: 'Отзывы', id: 'reviews' },
      { t: 'Частые вопросы', id: 'faq' },
      { t: 'Контакты', id: 'contacts' },
    ] },
  ];

  const year = new Date().getFullYear();
  const founded = CFG.FOUNDED ? String(CFG.FOUNDED) : '';

  const social = [
    { i: 'send', label: 'Telegram', href: 'https://t.me/' + CFG.TELEGRAM, goal: 'click_telegram' },
    { i: 'camera', label: 'Instagram', href: 'https://instagram.com/' + CFG.INSTAGRAM, goal: 'click_instagram' },
    { i: 'phone', label: 'Позвонить', href: 'tel:' + CFG.PHONE_PRIMARY, goal: 'click_phone' },
  ];

  return (
    <footer className="cs-footer" style={{ background: 'var(--ink-900)', color: '#fff', paddingTop: 'clamp(48px,6vw,72px)' }}>
      <div className="cs-footer-grid cs-stagger" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '40px',
      }}>
        <div className="cs-footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Логотип — ссылка на главную (требование коммерческих факторов) */}
          <a href={homeUrl()} aria-label="Color Baby House — на главную"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <SunMark size={44} className="cs-sun-spin" />
            <span style={{ lineHeight: 1 }}>
              <b style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', color: '#fff', display: 'block' }}>Color Baby House</b>
            </span>
          </a>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '15px', lineHeight: 1.6, maxWidth: '280px' }}>
            Развивающий садик для малышей от 1 до 7 лет. Забота, тепло и каждый день — что-то новое.
          </p>

          {/* Адрес и часы работы в подвале — их ищут на каждой странице */}
          <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px' }}>
            <span style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', color: 'rgba(255,255,255,0.72)' }}>
              <Ic n="map-pin" size={17} /> {CFG.ADDRESS}
            </span>
            {/* Ориентир — по нему садик находят быстрее, чем по номеру дома */}
            {CFG.LANDMARK && (
              <span style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', color: 'rgba(255,255,255,0.72)' }}>
                <Ic n="landmark" size={17} /> Ориентир: {CFG.LANDMARK}
              </span>
            )}
            <a href={'tel:' + CFG.PHONE_PRIMARY} onClick={() => goal('click_phone')}
              style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#fff', fontWeight: 700, textDecoration: 'none' }}>
              <Ic n="phone" size={17} /> +998 90 176 69 99
            </a>
            <a href={'tel:' + CFG.PHONE_SECONDARY} onClick={() => goal('click_phone')}
              style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#fff', fontWeight: 700, textDecoration: 'none' }}>
              <Ic n="phone" size={17} /> +998 94 671 26 26
            </a>
            {CFG.EMAIL && (
              <a href={'mailto:' + CFG.EMAIL} onClick={() => goal('click_email')}
                style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#fff', fontWeight: 700, textDecoration: 'none' }}>
                <Ic n="mail" size={17} /> {CFG.EMAIL}
              </a>
            )}
            <span style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'rgba(255,255,255,0.72)' }}>
              <Ic n="clock" size={17} /> Пн–Пт 8:00–18:00 · сб — по записи
            </span>
          </address>

          <div style={{ display: 'flex', gap: '10px' }}>
            {social.map((b) => (
              <a key={b.label} href={b.href} aria-label={b.label} title={b.label}
                target={b.href.startsWith('http') ? '_blank' : undefined}
                rel={b.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => goal(b.goal)}
                className="cs-footer-social"
                style={{
                  width: 44, height: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 'var(--radius-circle)',
                  background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer',
                  transition: 'transform var(--dur-fast) var(--ease-bounce), background var(--dur-base) var(--ease-out)',
                }}
              >
                <Ic n={b.i} size={20} />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.h} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <b style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: '#fff' }}>{c.h}</b>
            {c.items.map((it) => (
              <a key={c.h + it.t} href={'#' + it.id}
                onClick={(e) => { e.preventDefault(); scrollToId(it.id); }}
                style={{ color: 'rgba(255,255,255,0.62)', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-300)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.62)'}>{it.t}</a>
            ))}
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: 'var(--container-max)', margin: '40px auto 0', padding: '20px clamp(20px,5vw,48px)',
        borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        color: 'rgba(255,255,255,0.5)', fontSize: '14px',
      }}>
        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', alignItems: 'center' }}>
          <span>© {founded ? founded + '–' + year : year} Color Baby House</span>
          <a href={asset('privacy.html')} style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-300)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Политика конфиденциальности</a>
          <a href={asset('consent.html')} style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--pink-300)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Согласие на обработку данных</a>
        </span>
        <span>{CFG.ADDRESS} · Пн–Пт 8:00–18:00</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
