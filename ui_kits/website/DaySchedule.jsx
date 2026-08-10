/* Color Baby House — Распорядок дня (daily schedule timeline) */
function DaySchedule() {
  const { SectionHeading, Badge } = window.DesignSystem_52b7c1;
  const { Ic } = window;

  // ← Редактируйте этот массив, чтобы изменить распорядок.
  //   time — время, t — название, d — описание, i — иконка Lucide,
  //   c — цвет кружка (pink/sky/mint/sun/orange/purple), meal — отметка «питание».
  const items = [
    { time: '08:00–09:00', t: 'Приём детей',          d: 'Встречаем малышей, свободная игра.',   i: 'door-open', c: 'sun',    meal: false },
    { time: '09:00–09:20', t: 'Завтрак',              d: 'Тёплый и сытный — начинаем день.',     i: 'utensils',  c: 'orange', meal: true  },
    { time: '09:20–10:30', t: 'Развивающие занятия',  d: 'Английский, логика, творчество.',      i: 'puzzle',    c: 'sky',    meal: false },
    { time: '10:30–11:00', t: 'Второй завтрак',       d: 'Свежие фрукты и витамины.',            i: 'apple',     c: 'mint',   meal: true  },
    { time: '11:00–12:00', t: 'Прогулка',             d: 'Игры и свежий воздух на площадке.',    i: 'sun',       c: 'sun',    meal: false },
    { time: '12:00–12:30', t: 'Обед',                 d: 'Сбалансированное горячее меню.',       i: 'utensils',  c: 'orange', meal: true  },
    { time: '12:30–15:00', t: 'Дневной сон',          d: 'Спокойный сон и отдых.',               i: 'moon',      c: 'purple', meal: false },
    { time: '15:00–15:30', t: 'Полдник',              d: 'Лёгкий перекус после сна.',            i: 'cookie',    c: 'pink',   meal: true  },
    { time: '15:30–16:30', t: 'Кружки и доп. занятия', d: 'Танцы, шахматы, робототехника.',      i: 'music',     c: 'sky',    meal: false },
    { time: '16:30–17:00', t: 'Прогулка / игры',      d: 'Подвижные игры на свежем воздухе.',    i: 'activity',  c: 'mint',   meal: false },
    { time: '17:00–17:30', t: 'Ужин',                 d: 'Завершаем день с заботой.',            i: 'utensils',  c: 'orange', meal: true  },
    { time: '17:30–18:00', t: 'Свободная деятельность', d: 'Игры и уход домой.',                 i: 'heart',     c: 'pink',   meal: false },
  ];

  const chip = {
    pink:   { bg: 'var(--pink-100)',   fg: 'var(--on-pink-100)' },
    sky:    { bg: 'var(--sky-100)',    fg: 'var(--on-cyan-100)' },
    mint:   { bg: 'var(--mint-100)',   fg: 'var(--on-mint-100)' },
    sun:    { bg: 'var(--yellow-100)', fg: 'var(--on-yellow-100)' },
    orange: { bg: 'var(--orange-100)', fg: 'var(--on-gold-100)' },
    purple: { bg: 'var(--purple-100)', fg: 'var(--on-blue-100)' },
  };

  return (
    <section id="schedule" className="cs-reveal" style={{ padding: 'var(--section-y) 0', scrollMarginTop: '92px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Распорядок дня" title="Как проходит день в садике" gradient>
          Понятный ритм дня: занятия, прогулки, отдых и пятиразовое питание — всё вовремя.
        </SectionHeading>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 28px',
          margin: '40px auto 0', maxWidth: '880px',
        }} className="cs-schedule-grid cs-stagger">
          {items.map((x) => {
            const c = chip[x.c] || chip.pink;
            return (
              <div key={x.time + x.t} className="cs-row" style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                background: 'var(--cream)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)', padding: '14px 16px',
              }}>
                <span className="cs-row-icon" style={{
                  width: 46, height: 46, flex: 'none', borderRadius: '50%',
                  background: c.bg, color: c.fg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Ic n={x.i} size={22} />
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <b style={{ fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--color-primary-text)' }}>{x.time}</b>
                    <b style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--ink-900)' }}>{x.t}</b>
                    {x.meal && <Badge color="success" size="sm" iconLeft={<Ic n="utensils" size={12} />}>питание</Badge>}
                  </div>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{x.d}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--color-text-subtle)' }}>
          Время ориентировочное и может немного меняться по возрастным группам. ☀️
        </p>
      </div>
    </section>
  );
}
window.DaySchedule = DaySchedule;
