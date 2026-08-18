/* Color Baby House — Hero, with 3 homepage directions */
function Hero({ direction = 'sunshine' }) {
  const { Button, Badge } = window.DesignSystem_52b7c1;
  const { Ic, Photo, Blob, scrollToId } = window;

  const trust = [
    { icon: 'cake', t: 'от 1 до 7 лет' },
    { icon: 'utensils', t: '5-разовое питание' },
    { icon: 'send', t: 'отчёт в Telegram' },
  ];

  /* Кнопки первого экрана. Магнита (data-cs-magnet) здесь нет намеренно:
     «Записаться на экскурсию» тянулась за курсором и уезжала из-под него —
     по главной кнопке сайта это читалось как сбой, а не как игра. */
  const ctas = (
    <div className="cs-cta" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
      <Button variant="sun" size="lg" iconRight={<Ic n="arrow-right" size={20} />} onClick={() => scrollToId('enroll')}>Записаться на экскурсию</Button>
      <Button variant="soft" size="lg" iconLeft={<Ic n="sparkles" size={18} />} onClick={() => scrollToId('programs')}>Наши занятия</Button>
    </div>
  );

  /* Солнце, шарики и искры переехали в общий фон сайта (.cs-backdrop в App.jsx):
     раньше они жили только здесь и на первом экране дублировались бы с ним. */

  /* ---------- A · Sunshine: gradient headline + sun + photo ---------- */
  if (direction === 'sunshine') {
    return (
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="cs-parallax" data-cs-speed="0.12" style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 76% 30%, var(--pink-100) 0%, transparent 42%)',
          pointerEvents: 'none',
        }} />
        {/* Декоративные пятна: одно парит, другое сдвигается при прокрутке */}
        <Blob color="var(--pink-200)" size={260} className="cs-float-slow" style={{ left: '-60px', bottom: '-40px' }} />
        <Blob color="var(--yellow-100)" size={200} className="cs-float cs-float-lag" style={{ right: '-40px', top: '-60px' }} />
        <div className="cs-hero-grid" style={{
          maxWidth: 'var(--container-max)', margin: '0 auto',
          padding: 'clamp(48px,7vw,96px) clamp(20px,5vw,48px)',
          display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '48px', alignItems: 'center',
          position: 'relative',
        }}>
          <div className="cs-enter" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span className="cs-overline">Развивающий садик · 1–7 лет</span>
            {/* Каждое слово взлетает по очереди (--i задаёт очередь). Градиентная
                строка обёрнута в отдельный span: на .cs-gradient-text уже висит
                своя анимация переливания, две на одном элементе не уживаются. */}
            <h1 className="cs-headline" style={{ font: 'var(--font-h1)', fontSize: 'clamp(40px,5.4vw,72px)', margin: 0 }}>
              {['Место,', 'где', 'детям'].map((w, i) => (
                <span key={w} className="cs-word" style={{ '--i': i }}>{w}&nbsp;</span>
              ))}
              <br />
              <span className="cs-word" style={{ '--i': 3 }}>
                <span className="cs-gradient-text">хочется остаться</span>
              </span>
            </h1>
            <p style={{ font: 'var(--font-lead)', fontSize: '20px', color: 'var(--color-text-muted)', maxWidth: '480px' }}>
              Тёплая домашняя атмосфера, заботливые педагоги и каждый день — что-то новое. Мы рады поприветствовать вас в нашем садике. ✨
            </p>
            {ctas}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
              {trust.map((x) => (
                <Badge key={x.t} color="neutral" iconLeft={<Ic n={x.icon} size={15} />} size="lg">{x.t}</Badge>
              ))}
            </div>
          </div>
          <div className="cs-enter-photo" style={{ position: 'relative' }}>
            {/* eager: после ухода JPEG-баннера это фото — самый крупный элемент
                первого экрана (LCP), ждать ленивую загрузку ему нельзя */}
            <Photo src="assets/photos/playroom.jpg" alt="Игровая комната садика Color Baby House" eager
              style={{ height: '460px', boxShadow: 'var(--shadow-lg)', border: '6px solid #fff' }} />
            <div className="cs-enter-pop" style={{
              position: 'absolute', bottom: '-22px', left: '-22px',
              background: '#fff', borderRadius: 'var(--radius-lg)', padding: '14px 18px',
              boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <span className="cs-heartbeat" style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--mint-100)', color: 'var(--on-mint-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ic n="heart" size={22} />
              </span>
              <span style={{ lineHeight: 1.2 }}>
                <b data-cs-count="200" data-cs-suffix="+" style={{ fontFamily: 'var(--font-display)', fontSize: '20px' }}>200+</b>
                <span style={{ display: 'block', fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 600 }}>счастливых малышей</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- B · Playful tiles: headline + colourful photo cluster ---------- */
  if (direction === 'tiles') {
    const tiles = [
      { t: 'Танцы', c: 'pink', i: 'music' },
      { t: 'Английский', c: 'sky', i: 'languages' },
      { t: 'Робототехника', c: 'mint', i: 'bot' },
      { t: 'Шахматы', c: 'purple', i: 'crown' },
    ];
    const tints = { pink: 'var(--pink-100)', sky: 'var(--sky-100)', mint: 'var(--mint-100)', purple: 'var(--purple-100)' };
    const inks = { pink: 'var(--on-pink-100)', sky: 'var(--on-cyan-100)', mint: 'var(--on-mint-100)', purple: 'var(--on-blue-100)' };
    return (
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--cream), var(--pink-50))' }}>
        <div className="cs-hero-grid" style={{
          maxWidth: 'var(--container-max)', margin: '0 auto',
          padding: 'clamp(48px,7vw,88px) clamp(20px,5vw,48px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <Badge color="sun" size="lg" iconLeft={<Ic n="sparkles" size={16} />}>Запись на новый год открыта</Badge>
            <h1 style={{ font: 'var(--font-h1)', fontSize: 'clamp(40px,5.2vw,68px)', margin: 0 }}>
              Детство<br />в ярких<br /><span className="cs-gradient-text">красках</span>
            </h1>
            <p style={{ font: 'var(--font-lead)', fontSize: '19px', color: 'var(--color-text-muted)', maxWidth: '440px' }}>
              Девять развивающих направлений, забота и пятиразовое питание — для малышей от 1 до 7 лет.
            </p>
            {ctas}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
            <Photo caption="Игровая комната" icon="image" tint="pink" style={{ height: '210px', gridColumn: '1 / -1', boxShadow: 'var(--shadow-md)' }} />
            {tiles.map((x) => (
              <div key={x.t} style={{
                background: tints[x.c], borderRadius: 'var(--radius-lg)', padding: '18px',
                display: 'flex', flexDirection: 'column', gap: '10px', minHeight: '120px', justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <span style={{ width: 42, height: 42, borderRadius: '50%', background: '#fff', color: inks[x.c], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ic n={x.i} size={22} />
                </span>
                <b style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--ink-900)' }}>{x.t}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- C · Warm & calm: photo-led, reassuring ---------- */
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,48px)',
      }}>
        <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          <Photo caption="Тёплая атмосфера нашего садика" icon="image" tint="sky" style={{ height: '520px', borderRadius: 0 }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, rgba(29,43,76,0.62) 0%, rgba(29,43,76,0.18) 55%, transparent 80%)',
          }} />
          <div style={{
            position: 'absolute', left: 'clamp(24px,5vw,64px)', top: '50%', transform: 'translateY(-50%)',
            maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '22px', color: '#fff',
          }}>
            <span style={{ font: 'var(--font-overline)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--yellow-300)' }}>
              Семейный садик · 1–7 лет
            </span>
            <h1 style={{ font: 'var(--font-h1)', fontSize: 'clamp(36px,4.6vw,60px)', color: '#fff', margin: 0 }}>
              Спокойно за&nbsp;ребёнка. Каждый день.
            </h1>
            <p style={{ font: 'var(--font-lead)', fontSize: '19px', color: 'rgba(255,255,255,0.92)' }}>
              Забота, тёплая атмосфера и ежедневный отчёт в Telegram — чтобы вы всегда знали, как проходит день малыша.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Button variant="sun" size="lg" iconRight={<Ic n="arrow-right" size={20} />} onClick={() => scrollToId('enroll')}>Записаться на экскурсию</Button>
              <Button variant="soft" size="lg" onClick={() => scrollToId('pricing')}>Узнать о ценах</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
