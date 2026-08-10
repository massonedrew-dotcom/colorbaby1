/* Color Baby House — Контакты (contacts + map) */
function Contacts() {
  const { SectionHeading, Button } = window.DesignSystem_52b7c1;
  const { Ic, scrollToId } = window;

  // ← Редактируйте контактные данные здесь.
  //   href — куда ведёт ссылка (карта/звонок/Telegram); если нет — текст без ссылки.
  const mapsUrl = 'https://yandex.uz/maps/?text=' + encodeURIComponent('Ташкент, улица Тафаккур, 6');
  const info = [
    { i: 'map-pin',  t: 'Адрес',    v: 'г. Ташкент, улица Тафаккур, 6', c: 'pink', href: mapsUrl },
    /* Ориентир отдельной строкой: по нему садик находят быстрее, чем по номеру дома. */
    { i: 'landmark', t: 'Ориентир', v: 'сзади гостиницы «Россия»', c: 'purple' },
    { i: 'phone',   t: 'Телефон',  v: '+998 90 176 69 99', c: 'sky',    href: 'tel:+998901766999' },
    { i: 'phone',   t: 'Телефон',  v: '+998 94 671 26 26', c: 'sun',    href: 'tel:+998946712626' },
    { i: 'send',    t: 'Telegram', v: '@colorbabyhouse',      c: 'mint',   href: 'https://t.me/colorbabyhouse' },
    { i: 'clock',   t: 'Часы работы', v: 'Пн–Пт, 8:00–18:00 · сб — по записи', c: 'orange' },
  ];

  const chip = {
    pink:   { bg: 'var(--pink-100)',   fg: 'var(--on-pink-100)' },
    sky:    { bg: 'var(--sky-100)',    fg: 'var(--on-cyan-100)' },
    mint:   { bg: 'var(--mint-100)',   fg: 'var(--on-mint-100)' },
    orange: { bg: 'var(--orange-100)', fg: 'var(--on-gold-100)' },
    purple: { bg: 'var(--purple-100)', fg: 'var(--on-blue-100)' },
    sun:    { bg: 'var(--yellow-100)', fg: 'var(--on-yellow-100)' },
  };

  return (
    <section id="contacts" className="cs-reveal" style={{ padding: 'var(--section-y) 0', scrollMarginTop: '92px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Контакты" title="Приходите в гости" gradient>
          Будем рады познакомиться лично — позвоните, напишите в Telegram или просто загляните.
        </SectionHeading>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '36px',
          margin: '44px 0 0', alignItems: 'stretch',
        }} className="cs-contacts-grid">
          {/* Info column */}
          <div className="cs-stagger cs-cta" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {info.map((x) => {
              const c = chip[x.c] || chip.pink;
              const Wrap = x.href ? 'a' : 'div';
              const wrapProps = x.href
                ? { href: x.href, target: x.href.startsWith('http') ? '_blank' : undefined, rel: x.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                : {};
              return (
                <Wrap key={x.t + x.v} {...wrapProps} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)', padding: '16px 18px', boxShadow: 'var(--shadow-sm)',
                  textDecoration: 'none', color: 'inherit',
                  cursor: x.href ? 'pointer' : 'default',
                  transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
                }}
                  onMouseEnter={x.href ? (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; } : undefined}
                  onMouseLeave={x.href ? (e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; } : undefined}
                >
                  <span style={{
                    width: 48, height: 48, flex: 'none', borderRadius: '50%',
                    background: c.bg, color: c.fg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Ic n={x.i} size={22} />
                  </span>
                  <div>
                    <span style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 700, marginBottom: '2px' }}>{x.t}</span>
                    <b style={{ fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--ink-900)' }}>{x.v}</b>
                  </div>
                </Wrap>
              );
            })}
            <Button variant="primary" size="lg" iconLeft={<Ic n="calendar-heart" size={20} />}
              onClick={() => scrollToId && scrollToId('enroll')} style={{ marginTop: '4px' }}>
              Записаться на экскурсию
            </Button>
          </div>

          {/* Живая Яндекс.Карта с улицы Тафаккур, 6. Раньше стояла картинка-«схема
              проезда», но она пришла от прежнего бренда со старым адресом.
              iframe грузится лениво и разрешён в CSP (frame-src yandex.*). */}
          <div className="cs-card" style={{
            position: 'relative', minHeight: '380px',
            borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
            border: '6px solid #fff', boxShadow: 'var(--shadow-lg)', background: 'var(--sky-50)',
          }}>
            <iframe
              src={'https://yandex.uz/map-widget/v1/?text=' + encodeURIComponent('Ташкент, улица Тафаккур, 6') + '&z=16'}
              title="Color Baby House на карте — Ташкент, улица Тафаккур, 6 (сзади гостиницы «Россия»)"
              loading="lazy"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            />
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{
              position: 'absolute', left: '14px', bottom: '14px',
              background: 'rgba(255,255,255,0.92)', borderRadius: 'var(--radius-pill)',
              padding: '8px 14px', fontSize: '13px', fontWeight: 800, color: 'var(--ink-900)',
              display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: 'var(--shadow-sm)',
              textDecoration: 'none',
            }}>
              <Ic n="map-pin" size={15} color="var(--color-primary)" /> Открыть в Яндекс.Картах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contacts = Contacts;
