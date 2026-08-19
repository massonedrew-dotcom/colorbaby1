/* Color Baby House — Цены (pricing plans) */
function Pricing() {
  const { SectionHeading, Button, Badge } = window.DesignSystem_52b7c1;
  const { Ic, scrollToId } = window;

  // ← Редактируйте тарифы здесь. price/period — цена и период,
  //   featured — выделенный «популярный» тариф, feats — список включённого.
  const plans = [
    {
      name: 'Разовое посещение',
      price: '250 000', period: 'сум / день',
      desc: 'Полный день без абонемента.',
      color: 'sky', featured: false,
      feats: ['Пребывание 08:00–18:00', '5-разовое питание', 'Развивающие занятия', 'Прогулки и игры'],
    },
    {
      name: 'Полный день',
      price: '4 200 000', period: 'сум / мес',
      desc: 'Пятидневка, 08:00–18:00. Цена за одного ребёнка.',
      color: 'pink', featured: true,
      feats: ['Присмотр и уход', '5-разовое питание', 'Развивающие занятия', 'Учебные материалы', 'Прогулки и досуг', 'Подготовка к школе'],
    },
    {
      name: 'Суббота',
      price: '200 000', period: 'сум / день',
      desc: 'Дополнительный день по желанию.',
      color: 'mint', featured: false,
      feats: ['Пребывание в субботу', '5-разовое питание', 'Занятия и творчество', 'Присмотр и забота'],
    },
  ];

  const accent = {
    pink:   { soft: 'var(--pink-100)',   ink: 'var(--on-pink-100)' },
    sky:    { soft: 'var(--sky-100)',    ink: 'var(--on-cyan-100)' },
    mint:   { soft: 'var(--mint-100)',   ink: 'var(--on-mint-100)' },
  };

  return (
    <section id="pricing" className="cs-reveal" style={{ padding: 'var(--section-y) 0', scrollMarginTop: '92px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Цены" title="Понятные тарифы без скрытых платежей" gradient>
          Выберите удобный формат — а мы поможем малышу расти счастливым.
        </SectionHeading>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px',
          margin: '44px auto 0', maxWidth: '980px', alignItems: 'stretch',
        }} className="cs-pricing-grid cs-stagger">
          {plans.map((p) => {
            const a = accent[p.color] || accent.pink;
            return (
              /* Приподнятость «популярного» тарифа — классом, а не inline-стилем:
                 inline перебил бы hover-подъём из motion.css. */
              <div key={p.name} className={`cs-card${p.featured ? ' cs-card-featured' : ''}`} style={{
                position: 'relative',
                background: 'var(--color-surface)',
                border: p.featured ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '28px 26px',
                boxShadow: p.featured ? 'var(--shadow-pink)' : 'var(--shadow-md)',
                display: 'flex', flexDirection: 'column', gap: '18px',
              }}>
                {p.featured && (
                  <Badge color="primary" variant="solid" size="sm" iconLeft={<Ic n="sparkles" size={13} />}
                    style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)' }}>
                    Популярный выбор
                  </Badge>
                )}

                <div>
                  <h3 style={{ font: 'var(--font-h4)', fontSize: '22px', margin: '0 0 4px' }}>{p.name}</h3>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{p.desc}</span>
                </div>

                {/* flexWrap + nowrap на цене: «4 200 000» при 38px не влезало
                    в узкую карточку «Полный день», разрывалось посреди числа
                    и наезжало на «сум / мес». Теперь число не ломается, а на
                    вторую строку при нехватке места уходит период целиком. */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexWrap: 'wrap' }}>
                  <b style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,2.6vw,38px)', color: 'var(--ink-900)', whiteSpace: 'nowrap' }}>{p.price}</b>
                  <span style={{ fontSize: '15px', color: 'var(--color-text-muted)', fontWeight: 700, whiteSpace: 'nowrap' }}>{p.period}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {p.feats.map((f) => (
                    <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--ink-700)' }}>
                      <span style={{ width: 22, height: 22, flex: 'none', borderRadius: '50%', background: a.soft, color: a.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Ic n="check" size={14} />
                      </span>
                      {f}
                    </span>
                  ))}
                </div>

                <div className="cs-cta" style={{ marginTop: 'auto' }}>
                  <Button
                    variant={p.featured ? 'primary' : 'outline'}
                    size="md" block
                    iconRight={<Ic n="arrow-right" size={18} />}
                    onClick={() => scrollToId && scrollToId('enroll')}
                  >
                    Записаться
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Что входит / доплаты / скидка */}
        <div className="cs-pricing-note" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px',
          margin: '40px auto 0', maxWidth: '980px',
        }}>
          <div style={{
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)', padding: '24px 26px', boxShadow: 'var(--shadow-sm)',
          }}>
            <b style={{ fontFamily: 'var(--font-display)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Ic n="check-circle" size={20} color="var(--on-mint-100)" /> В стоимость входит
            </b>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {['Присмотр и уход', 'Развивающие занятия', 'Пятиразовое питание', 'Учебные материалы', 'Прогулки и досуговые мероприятия', 'Подготовка к школе'].map((f) => (
                <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--ink-700)' }}>
                  <span style={{ width: 20, height: 20, flex: 'none', borderRadius: '50%', background: 'var(--mint-50)', color: 'var(--on-mint-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ic n="check" size={13} />
                  </span>
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div style={{
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)', padding: '24px 26px', boxShadow: 'var(--shadow-sm)',
            display: 'flex', flexDirection: 'column',
          }}>
            <b style={{ fontFamily: 'var(--font-display)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Ic n="plus-circle" size={20} color="var(--on-gold-100)" /> Оплачивается отдельно
            </b>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {['Индивидуальные занятия с логопедом', 'Специализированный массаж', '«Почемучка»'].map((f) => (
                <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--ink-700)' }}>
                  <span style={{ width: 20, height: 20, flex: 'none', borderRadius: '50%', background: 'var(--orange-50)', color: 'var(--on-gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ic n="plus" size={13} />
                  </span>
                  {f}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <Badge color="success" variant="soft" size="lg" iconLeft={<Ic n="gift" size={16} />}>
                Скидка на второго ребёнка — 5%
              </Badge>
            </div>
          </div>
        </div>

        {/* Няня-центр — кратковременное пребывание */}
        <div style={{
          margin: '24px auto 0', maxWidth: '980px',
          background: 'var(--gradient-sunrise)', borderRadius: 'var(--radius-2xl)',
          padding: 'clamp(24px,3vw,36px)', boxShadow: 'var(--shadow-sm)',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '28px', alignItems: 'center',
        }} className="cs-nanny-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Badge color="primary" variant="solid" size="lg" style={{ alignSelf: 'flex-start' }} iconLeft={<Ic n="baby" size={16} />}>
              Няня-центр
            </Badge>
            <h3 style={{ font: 'var(--font-h4)', fontSize: '24px', margin: 0 }}>Кратковременное пребывание</h3>
            <p style={{ font: 'var(--font-body-r)', color: 'var(--ink-700)', margin: 0, maxWidth: '520px' }}>
              Оставьте малыша на несколько часов под присмотром воспитателей — без обязательного
              посещения полного дня. В программу входят игры, развивающие занятия, прогулки и питание
              (в зависимости от времени пребывания). Формат — разовое посещение.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
            {[
              { i: 'gamepad-2', t: 'Игры и развивающие занятия' },
              { i: 'sun', t: 'Прогулки на свежем воздухе' },
              { i: 'utensils', t: 'Питание по времени пребывания' },
            ].map((x) => (
              <span key={x.t} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 600, color: 'var(--ink-700)' }}>
                <span style={{ width: 34, height: 34, flex: 'none', borderRadius: '50%', background: '#fff', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <Ic n={x.i} size={17} />
                </span>
                {x.t}
              </span>
            ))}
            <Button variant="primary" size="md" iconRight={<Ic n="arrow-right" size={18} />}
              onClick={() => scrollToId && scrollToId('enroll')} style={{ marginTop: '6px' }}>
              Уточнить стоимость
            </Button>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--color-text-subtle)' }}>
          Возможна оплата помесячно. Точную стоимость для вашего возраста уточним по телефону. 💛
        </p>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
