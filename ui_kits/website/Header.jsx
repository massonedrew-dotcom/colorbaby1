/* Color Baby House — Site header */
function Header() {
  const { Button } = window.DesignSystem_52b7c1;
  const { Ic, SunMark, scrollToId, homeUrl, goal, CFG } = window;

  /* Цвета логотипа как заливка пунктов меню.
     Пары «фон + текст» подобраны по контрасту, а не на глаз (надпись 15px
     жирным — это мелкий текст, норма 4,5:1):
       фуксия  #D62E83 + белый  — 4,59:1  (на исходном #EE4A9B было 3,45 — мало)
       бирюза  #22BFD1 + #062F52 — 5,8:1  (с прежним #0B4278 выходило 4,36 — мало)
       жёлтый  #FBD130 + #062F52 — 9,3:1
       синий   #10559B + белый  — 7,5:1
     Белый текст на бирюзе и жёлтом невозможен в принципе (2,2:1 и 1,4:1),
     поэтому светлые заливки берут тёмно-синюю надпись. */
  const INK_ON_LIGHT = '#062F52';
  const TONES = {
    pink:   { bg: '#D62E83', fg: '#fff',         glow: 'rgba(214, 46, 131, 0.42)' },
    cyan:   { bg: '#22BFD1', fg: INK_ON_LIGHT,   glow: 'rgba(34, 191, 209, 0.42)' },
    yellow: { bg: '#FBD130', fg: INK_ON_LIGHT,   glow: 'rgba(251, 209, 48, 0.50)' },
    blue:   { bg: '#10559B', fg: '#fff',         glow: 'rgba(16, 85, 155, 0.42)' },
  };

  /* label — текст пункта меню, id — секция, tone — цвет знака.
     Четыре цвета идут по кругу, чтобы соседние пункты не повторялись. */
  const nav = [
    { label: 'О садике',    id: 'about',    tone: 'pink'   },
    { label: 'Занятия',     id: 'programs', tone: 'cyan'   },
    { label: 'Лето',        id: 'summer',   tone: 'yellow' },
    { label: 'Распорядок',  id: 'schedule', tone: 'blue'   },
    { label: 'Цены',        id: 'pricing',  tone: 'pink'   },
    { label: 'Отзывы',      id: 'reviews',  tone: 'cyan'   },
    { label: 'Вопросы',     id: 'faq',      tone: 'yellow' },
    { label: 'Контакты',    id: 'contacts', tone: 'blue'   },
  ];

  return (
    /* Шапка почти белая, а не розовая: на розовом фоне цветные кнопки
       меню сливались бы с ним. Бургера и выпадающего меню здесь больше нет —
       все разделы видны сразу, кнопками (нижний ряд). */
    <header className="cs-header" style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255, 252, 253, 0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--pink-100, var(--color-border))',
    }}>
      {/* Верхний ряд: знак и два действия. Раньше здесь стояли три кнопки
          (кружок «позвонить», кружок Telegram и «Записаться») — оставлены
          телефон и запись, Telegram живёт в «Контактах» и подвале. */}
      <div className="cs-header-inner" style={{
        maxWidth: '1400px', margin: '0 auto',
        padding: '12px clamp(16px,4vw,48px)',
        display: 'flex', alignItems: 'center', gap: '16px',
      }}>
        {/* Brand — ссылка на главную, а не «якорь в никуда»: по чек-листу
            логотип обязан вести на главную страницу сайта. */}
        <a href={homeUrl()} className="cs-brand" aria-label="Color Baby House — на главную"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <SunMark size={54} className="cs-sun-spin" />
          {/* Начертание как в логотипе: «COLOR» над «BABY HOUSE», округлый
              Riffic (--font-accent, только латиница — здесь она и нужна).
              nowrap — иначе на узких экранах слова разъезжаются. */}
          {/* translate="no" — чтобы автоперевод браузера не превратил название
              бренда в «ЦВЕТНОЙ ДЕТСКИЙ ДОМ». Имя компании не переводится. */}
          <span translate="no" className="cs-brand-word" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.02 }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '19px', letterSpacing: '.06em', color: 'var(--ink-900)', whiteSpace: 'nowrap' }}>
              COLOR
            </span>
            <span className="cs-gradient-text" style={{ fontFamily: 'var(--font-accent)', fontSize: '19px', letterSpacing: '.04em', whiteSpace: 'nowrap' }}>
              BABY HOUSE
            </span>
          </span>
        </a>

        <div className="cs-header-actions" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Позвонить прямо из шапки — самый короткий путь к заявке.
              Это <a href="tel:">, а не кнопка: работает и без JS, и видно роботу.
              Жёлтая плашка — цвет шарика из знака; номер виден целиком, на
              узком экране (см. site.css) остаётся одна иконка. */}
          <a href={'tel:' + CFG.PHONE_PRIMARY} className="cs-header-phone"
            aria-label="Позвонить: +998 90 176 69 99" title="Позвонить"
            onClick={() => goal('click_phone')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              minHeight: '48px', padding: '0 18px',
              borderRadius: 'var(--radius-pill)',
              background: TONES.yellow.bg, color: TONES.yellow.fg,
              fontWeight: 800, fontSize: '15px', textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <Ic n="phone" size={19} />
            <span className="cs-header-phone-label">+998 90 176 69 99</span>
          </a>
          <span className="cs-header-cta">
            <Button variant="primary" size="lg" iconLeft={<Ic n="calendar-check" size={20} />}
              onClick={() => { goal('click_enroll_header'); scrollToId('enroll'); }}>Записаться</Button>
          </span>
        </div>
      </div>

      {/* Нижний ряд: разделы сайта кнопками в цветах знака.
          Ряд видно на любой ширине: на десктопе он укладывается в строку,
          на телефоне прокручивается вбок (site.css) — выпадающее меню на
          пол-экрана больше не нужно. */}
      <nav className="cs-navbar" aria-label="Основное меню">
        <div className="cs-navbar-inner">
          {nav.map((n) => {
            const t = TONES[n.tone];
            return (
              <a key={n.id} href={`#${n.id}`} className="cs-navbtn"
                onClick={(e) => { e.preventDefault(); scrollToId(n.id); }}
                style={{
                  background: t.bg, color: t.fg,
                  '--cs-navbtn-glow': t.glow,
                }}
              >{n.label}</a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
window.Header = Header;
