/* Color Baby House — Site header */
function Header() {
  const { Button, IconButton } = window.DesignSystem_52b7c1;
  const { Ic, SunMark, scrollToId, homeUrl, goal, CFG } = window;
  const [menuOpen, setMenuOpen] = React.useState(false);
  // label — текст пункта меню, id — секция, к которой он ведёт.
  const nav = [
    { label: 'О садике',    id: 'about' },
    { label: 'Занятия',     id: 'programs' },
    { label: 'Лето',        id: 'summer' },
    { label: 'Распорядок',  id: 'schedule' },
    { label: 'Цены',        id: 'pricing' },
    { label: 'Отзывы',      id: 'reviews' },
    { label: 'Вопросы',     id: 'faq' },
    { label: 'Контакты',    id: 'contacts' },
  ];

  const go = (id) => { setMenuOpen(false); scrollToId(id); };

  return (
    /* Шапка почти белая, а не розовая: на розовом фоне розовые кнопки
       сливались и «Записаться» терялась. */
    <header className="cs-header" style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255, 252, 253, 0.90)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--pink-100, var(--color-border))',
    }}>
      {/* Шире контентного контейнера (1200px): выросшему меню его не хватало —
          пунктам оставалось 624px при нужных 729, и они ломались на две строки. */}
      <div className="cs-header-inner" style={{
        maxWidth: '1400px', margin: '0 auto',
        padding: '16px clamp(20px,5vw,48px)',
        display: 'flex', alignItems: 'center', gap: '24px',
      }}>
        {/* Brand — ссылка на главную, а не «якорь в никуда»: по чек-листу
            логотип обязан вести на главную страницу сайта. */}
        <a href={homeUrl()} className="cs-brand" aria-label="Color Baby House — на главную"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <SunMark size={54} className="cs-sun-spin" />
          {/* Начертание как в логотипе: «COLOR» над «BABY HOUSE», округлый
              Riffic (--font-accent, только латиница — здесь она и нужна).
              nowrap — иначе на узких экранах слова разъезжаются. */}
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.02 }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '19px', letterSpacing: '.06em', color: 'var(--ink-900)', whiteSpace: 'nowrap' }}>
              COLOR
            </span>
            <span className="cs-gradient-text" style={{ fontFamily: 'var(--font-accent)', fontSize: '19px', letterSpacing: '.04em', whiteSpace: 'nowrap' }}>
              BABY HOUSE
            </span>
          </span>
        </a>

        {/* Nav (десктоп) */}
        <nav style={{ display: 'flex', gap: '2px', marginLeft: 'auto' }} className="cs-nav" aria-label="Основное меню">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}
              onClick={(e) => { e.preventDefault(); go(n.id); }}
              style={{
                padding: '12px 13px', borderRadius: 'var(--radius-pill)',
                fontWeight: 700, fontSize: '16px', color: 'var(--ink-700)', textDecoration: 'none',
                whiteSpace: 'nowrap',        /* «О садике» и «Распорядок» ломались на две строки */
                transition: 'all var(--dur-base) var(--ease-out)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary-soft)'; e.currentTarget.style.color = 'var(--color-primary-press)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-700)'; }}
            >{n.label}</a>
          ))}
        </nav>

        {/* Actions (десктоп)
            Класса cs-cta здесь нет намеренно: он поднимал кнопку на 3px при
            наведении и пускал по ней блик — рядом с иконкой Telegram это
            читалось как «кнопка магнитится». В шапке кнопка стоит неподвижно,
            подсветка — только тенью (.cs-header-cta в motion.css). */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="cs-nav">
          {/* Позвонить прямо из шапки — самый короткий путь к заявке.
              Это <a href="tel:">, а не кнопка: работает и без JS, и видно роботу. */}
          <a href={'tel:' + CFG.PHONE_PRIMARY} aria-label="Позвонить: +998 90 176 69 99" title="Позвонить"
            onClick={() => goal('click_phone')}
            style={{
              width: 48, height: 48, borderRadius: 'var(--radius-pill)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: '#fff', border: '2px solid var(--pink-200, #F9B2D2)',
              color: 'var(--pink-500, #EE4A9B)', textDecoration: 'none',
              transition: 'transform var(--dur-fast) var(--ease-bounce)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
          >
            <Ic n="phone" size={22} />
          </a>
          <IconButton
            icon={<Ic n="send" size={22} />}
            variant="soft"
            size="lg"
            label="Telegram"
            onClick={() => { goal('click_telegram'); scrollToId('contacts'); }}
            style={{ background: '#fff', border: '2px solid var(--pink-200, #F9B2D2)', color: 'var(--pink-500, #EE4A9B)' }}
          />
          <span className="cs-header-cta">
            <Button variant="primary" size="lg" iconLeft={<Ic n="phone" size={20} />}
              onClick={() => { goal('click_enroll_header'); scrollToId('enroll'); }}>Записаться</Button>
          </span>
        </div>

        {/* Бургер (мобильный) */}
        <button
          className="cs-burger"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            marginLeft: 'auto', width: 54, height: 54, borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--color-border)', background: 'var(--color-surface)',
            color: 'var(--ink-900)', cursor: 'pointer',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Ic n={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Выпадающее меню (мобильное) */}
      <nav className={`cs-mobile-nav${menuOpen ? ' cs-mobile-nav-open' : ''}`} aria-label="Мобильное меню" style={{
        flexDirection: 'column', gap: '4px',
        padding: '8px clamp(20px,5vw,48px) 16px',
        borderTop: '1px solid var(--color-border)', background: 'var(--cream)',
      }}>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`}
            onClick={(e) => { e.preventDefault(); go(n.id); }}
            style={{
              padding: '12px 14px', borderRadius: 'var(--radius-md)',
              fontWeight: 700, fontSize: '16px', color: 'var(--ink-700)', textDecoration: 'none',
            }}
          >{n.label}</a>
        ))}
        <a href={'tel:' + CFG.PHONE_PRIMARY} onClick={() => goal('click_phone')}
          style={{
            padding: '12px 14px', borderRadius: 'var(--radius-md)',
            fontWeight: 800, fontSize: '16px', color: 'var(--color-primary-text)', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
          <Ic n="phone" size={18} /> +998 90 176 69 99
        </a>
        <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
          <Button variant="soft" size="md" iconLeft={<Ic n="send" size={18} />} onClick={() => { goal('click_telegram'); go('contacts'); }} style={{ flex: 1 }}>Telegram</Button>
          <Button variant="primary" size="md" iconLeft={<Ic n="phone" size={17} />} onClick={() => { goal('click_enroll_header'); go('enroll'); }} style={{ flex: 1 }}>Записаться</Button>
        </div>
      </nav>
    </header>
  );
}
window.Header = Header;
