/* Color Baby House — Programmes grid with category filter and photos */
function Programs() {
  const { SectionHeading, Tag, Badge } = window.DesignSystem_52b7c1;
  const { Ic, imgProps } = window;
  const [filter, setFilter] = React.useState('Все');

  const cats = [
    { name: 'Все', dot: 'var(--ink-700)' },
    { name: 'Речь и язык', dot: 'var(--cat-english)' },
    { name: 'Движение', dot: 'var(--cat-dance)' },
    { name: 'Творчество', dot: 'var(--cat-acting)' },
    { name: 'Логика', dot: 'var(--cat-chess)' },
  ];

  // img — реальное фото; pos — какую часть кадра показать (чтобы лица не резались).
  // Где фото нет — рисуется красивая плитка с иконкой.
  // age — возраст, freq — периодичность, cost — оплата (included / extra / clarify).
  const programs = [
    { t: 'Английский язык', d: 'Разговорные навыки и знакомство с языком через игры и общение.', i: 'languages', c: 'sky', g: 'Речь и язык', img: 'assets/photos/english.jpg', pos: 'center 35%', age: 'от 3 лет', freq: '2–3 раза в неделю', cost: 'included' },
    { t: 'Подготовка к школе', d: 'Чтение, письмо, логика и математические навыки.', i: 'graduation-cap', c: 'sun', g: 'Речь и язык', img: 'assets/photos/kids-reading.jpg', pos: 'center 40%', age: '5–7 лет', freq: 'ежедневно', cost: 'included' },
    { t: 'Логопед-дефектолог', d: 'Коррекция речи и развитие речевых навыков.', i: 'mic', c: 'purple', g: 'Речь и язык', img: 'assets/photos/speech.jpg', pos: 'center 50%', age: 'по рекомендации', freq: 'индивидуально', cost: 'extra' },
    { t: 'Танцы', d: 'Координация, чувство ритма и пластика.', i: 'music', c: 'pink', g: 'Движение', img: 'assets/photos/dance.jpg', pos: 'center 55%', age: 'от 3 лет', freq: '2 раза в неделю', cost: 'included' },
    { t: 'Тхэквондо', d: 'Дисциплина, сила и уверенность в себе.', i: 'swords', c: 'sky', g: 'Движение', img: 'assets/photos/taekwondo.jpg', pos: 'center 38%' },
    { t: 'Гимнастика', d: 'Здоровье, гибкость и координация.', i: 'activity', c: 'mint', g: 'Движение', img: 'assets/photos/gymnastics.jpg', pos: 'center 52%', age: 'от 2 лет', cost: 'included' },
    { t: 'Массаж', d: 'Оздоровительный курс для укрепления здоровья.', i: 'heart-handshake', c: 'purple', g: 'Движение', img: 'assets/photos/massage.jpg', pos: 'center 50%', age: 'от 1 года', cost: 'included' },
    { t: 'Актёрское мастерство', d: 'Сцена, эмоции и уверенность в себе.', i: 'drama', c: 'orange', g: 'Творчество', img: 'assets/photos/acting.jpg', pos: 'center 40%' },
    { t: 'Рисование', d: 'Краски, фантазия и мелкая моторика.', i: 'palette', c: 'sun', g: 'Творчество', img: 'assets/photos/drawing.jpg', pos: 'center 35%' },
    { t: 'Развивающие игры', d: 'Каждый день — новое маленькое открытие.', i: 'puzzle', c: 'pink', g: 'Творчество', img: 'assets/photos/games.jpg', pos: 'center 35%' },
    { t: 'Мастер-классы', d: 'Творческие занятия и новые умения.', i: 'sparkles', c: 'mint', g: 'Творчество', img: 'assets/photos/crafts.jpg', pos: 'center 50%' },
    { t: 'Шахматы', d: 'Логическое мышление и концентрация.', i: 'crown', c: 'purple', g: 'Логика', img: 'assets/photos/chess.jpg', pos: 'center 30%', age: 'от 5 лет', freq: '1–2 раза в неделю', cost: 'clarify' },
    { t: 'Робототехника', d: 'Конструирование и основы технического мышления.', i: 'bot', c: 'sky', g: 'Логика', img: 'assets/photos/robotics.jpg', pos: 'center 40%', age: 'от 5 лет', freq: '1–2 раза в неделю', cost: 'clarify' },
  ];

  // Метки стоимости занятия.
  const costMeta = {
    included: { label: 'Входит в стоимость', color: 'success' },
    extra:    { label: 'Оплачивается отдельно', color: 'secondary' },
    clarify:  { label: 'Уточняется', color: 'neutral' },
  };

  /* fg — иконка на белом кружке внутри плитки. Берём --on-*-100: у 400/500
     на белом контраст 2.4-3.5:1, а графике нужно минимум 3:1 с запасом. */
  const tile = {
    pink:   { a: 'var(--pink-100)',   b: 'var(--pink-50)',   fg: 'var(--on-pink-100)' },
    sky:    { a: 'var(--sky-100)',    b: 'var(--sky-50)',    fg: 'var(--on-cyan-100)' },
    mint:   { a: 'var(--mint-100)',   b: 'var(--mint-50)',   fg: 'var(--on-mint-100)' },
    sun:    { a: 'var(--yellow-100)', b: 'var(--yellow-50)', fg: 'var(--on-yellow-100)' },
    orange: { a: 'var(--orange-100)', b: 'var(--orange-50)', fg: 'var(--on-gold-100)' },
    purple: { a: 'var(--purple-100)', b: 'var(--purple-50)', fg: 'var(--on-blue-100)' },
  };

  const shown = filter === 'Все' ? programs : programs.filter((p) => p.g === filter);
  const HEADER_H = 190;

  return (
    <section id="programs" className="cs-reveal" style={{ padding: 'var(--section-y) 0', scrollMarginTop: '92px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Наши занятия" title="Направления развития" gradient>
          Всё, что нужно малышу, чтобы расти счастливым, здоровым и любознательным.
        </SectionHeading>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', margin: '32px 0 36px' }}>
          {cats.map((c) => (
            <Tag key={c.name} dot={c.dot} active={filter === c.name} onClick={() => setFilter(c.name)}>{c.name}</Tag>
          ))}
        </div>

        {/* Подъём карточки и зум фото — на CSS (.cs-card в motion.css):
            hover через состояние React перерисовывал бы всю сетку. */}
        <div className="cs-programs-grid cs-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {shown.map((p) => {
            const t = tile[p.c] || tile.pink;
            return (
              /* data-cs-tilt — 3D-наклон за курсором (motion.js пишет углы в CSS-переменные) */
              <div key={p.t} className="cs-card" data-cs-tilt
                style={{
                  position: 'relative',
                  background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)', overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex', flexDirection: 'column',
                }}>
                <span className="cs-glare" />
                {/* Шапка карточки: фото или красивая плитка с иконкой-стикером */}
                {p.img ? (
                  <img {...imgProps(p.img)} alt={'Занятие «' + p.t + '» в садике Color Baby House — Ташкент'}
                    style={{ display: 'block', width: '100%', height: HEADER_H + 'px', objectFit: 'cover', objectPosition: p.pos || 'center' }} />
                ) : (
                  <div style={{
                    height: HEADER_H + 'px', position: 'relative',
                    background: 'linear-gradient(135deg, ' + t.a + ', ' + t.b + ')',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                  }}>
                    {/* мягкие декоративные круги */}
                    <span style={{ position: 'absolute', width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.35)', top: -24, right: -20 }} />
                    <span style={{ position: 'absolute', width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', bottom: -16, left: -10 }} />
                    {/* иконка-стикер */}
                    <span className="cs-card-icon" style={{
                      width: 78, height: 78, borderRadius: '50%', background: '#fff', color: t.fg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: 'var(--shadow-md)', position: 'relative',
                    }}>
                      <Ic n={p.i} size={36} />
                    </span>
                  </div>
                )}
                <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                  <h3 style={{ font: 'var(--font-h4)', fontSize: '20px', color: 'var(--color-text)', margin: 0 }}>{p.t}</h3>
                  <p style={{ font: 'var(--font-body-r)', color: 'var(--color-text-muted)', margin: 0 }}>{p.d}</p>
                  {(p.age || p.freq || p.cost) && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '10px' }}>
                      {p.age && <Badge color="neutral" size="sm" iconLeft={<Ic n="cake" size={12} />}>{p.age}</Badge>}
                      {p.freq && <Badge color="info" size="sm" iconLeft={<Ic n="calendar-days" size={12} />}>{p.freq}</Badge>}
                      {p.cost && <Badge color={costMeta[p.cost].color} size="sm">{costMeta[p.cost].label}</Badge>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Programs = Programs;
