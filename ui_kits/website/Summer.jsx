/* Color Baby House — Летний лагерь с бассейном */
function Summer() {
  const { SectionHeading, Button, Badge } = window.DesignSystem_52b7c1;
  const { Ic, Photo, scrollToId } = window;

  const points = [
    { i: 'waves',    t: 'Бассейн и купальный сезон' },
    { i: 'sun',      t: 'Игры и прогулки на свежем воздухе' },
    { i: 'palette',  t: 'Творческие мастер-классы' },
    { i: 'utensils', t: 'Пятиразовое питание' },
  ];

  return (
    <section id="summer" style={{
      padding: 'var(--section-y) 0',
      background: 'linear-gradient(180deg, var(--pink-50), var(--pink-100))',
      scrollMarginTop: '92px',
    }}>
      <div className="cs-summer-grid" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center',
      }}>
        {/* Фото бассейна */}
        <div className="cs-reveal-left" style={{ position: 'relative' }}>
          <Photo src="assets/photos/summer-pool.jpg" alt="Летний сезон с бассейном в садике Color Baby House"
            objectPosition="center 30%"
            style={{ height: '420px', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-lg)', border: '6px solid #fff' }} />
          <Badge color="sun" variant="solid" size="lg" iconLeft={<Ic n="sun" size={16} />}
            style={{ position: 'absolute', top: '16px', left: '16px', boxShadow: 'var(--shadow-md)' }}>
            Летний сезон
          </Badge>
        </div>

        {/* Текст */}
        <div className="cs-reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <SectionHeading align="left" eyebrow="Лето в Color Baby House" title="Летний лагерь с бассейном">
            Летом малышей ждёт особый сезон: купание в бассейне, игры на свежем воздухе,
            творчество и приключения каждый день. Присоединяйтесь! ☀️
          </SectionHeading>

          <div className="cs-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {points.map((p) => (
              <div key={p.t} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: 44, height: 44, flex: 'none', borderRadius: '50%', background: 'var(--sky-100)', color: 'var(--on-cyan-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ic n={p.i} size={20} />
                </span>
                <b style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--ink-900)', lineHeight: 1.3 }}>{p.t}</b>
              </div>
            ))}
          </div>

          <div className="cs-cta">
            <Button variant="primary" size="lg" iconLeft={<Ic n="calendar-heart" size={20} />}
              onClick={() => scrollToId && scrollToId('enroll')}>
              Записаться в лагерь
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Summer = Summer;
