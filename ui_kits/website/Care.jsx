/* Color Baby House — Why parents choose us + daily Telegram report */
function Care() {
  const { SectionHeading } = window.DesignSystem_52b7c1;
  const { Ic, Photo } = window;

  const points = [
    { i: 'heart-handshake', t: 'Индивидуальный подход', d: 'Внимание к особенностям и темпу каждого ребёнка.' },
    { i: 'graduation-cap', t: 'Подготовка к школе', d: 'Комплексная программа развития и обучения.' },
    { i: 'users', t: 'Опытные педагоги', d: '10 квалифицированных педагогов и специалистов.' },
    { i: 'shield-check', t: 'Безопасная среда', d: 'Комфортные и безопасные условия для детей.' },
    { i: 'utensils', t: '5-разовое питание', d: 'Полноценное сбалансированное меню каждый день.' },
    { i: 'clock', t: 'Чёткий режим дня', d: 'Занятия, прогулки, сон и отдых — всё вовремя.' },
  ];

  // count/suffix — для анимации «цифры считают вверх» (см. setupCounters в standalone.html).
  // Где count не задан, число просто выводится как есть.
  const stats = [
    { n: '20 лет', t: 'опыта работы', count: 20, suffix: ' лет' },
    { n: '10', t: 'педагогов и специалистов', count: 10 },
    { n: '1–7 лет', t: 'принимаем малышей' },
  ];

  return (
    <section id="about" style={{ padding: 'var(--section-y) 0', scrollMarginTop: '92px' }}>
      <div className="cs-care-grid" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center',
      }}>
        <div className="cs-reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <SectionHeading align="left" eyebrow="О садике" title="Почему выбирают Color Baby House">
            Частный развивающий садик в Ташкенте для детей от 1 до 7 лет — от раннего возраста
            до подготовки к школе. Помогаем раскрыть способности, развить самостоятельность,
            уверенность в себе и любовь к обучению.
          </SectionHeading>

          {/* Ключевые цифры о садике */}
          <div className="cs-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            {stats.map((s) => (
              <div key={s.n} style={{
                flex: '1 1 120px', background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)', padding: '14px 16px', boxShadow: 'var(--shadow-sm)',
              }}>
                <b
                  data-cs-count={s.count}
                  data-cs-suffix={s.suffix}
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px', color: 'var(--color-primary-text)', display: 'block', lineHeight: 1.1 }}
                >{s.n}</b>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 600 }}>{s.t}</span>
              </div>
            ))}
          </div>

          <div className="cs-care-points cs-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {points.map((p) => (
              <div key={p.t} style={{ display: 'flex', gap: '14px' }}>
                <span style={{ width: 46, height: 46, flex: 'none', borderRadius: '50%', background: 'var(--pink-100)', color: 'var(--pink-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ic n={p.i} size={22} />
                </span>
                <div>
                  <b style={{ fontFamily: 'var(--font-display)', fontSize: '17px', display: 'block', marginBottom: '3px' }}>{p.t}</b>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{p.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Фото «Почему выбирают именно нас» */}
        <Photo src="assets/photos/kids-reading.jpg" alt="Дети в садике Color Baby House — почему выбирают именно нас"
          className="cs-reveal-right"
          style={{
            height: '560px', objectFit: 'contain',
            background: 'linear-gradient(180deg, #FEEDF5 0%, #E7F8FB 100%)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)', border: '6px solid #fff',
          }} />
      </div>
    </section>
  );
}
window.Care = Care;
