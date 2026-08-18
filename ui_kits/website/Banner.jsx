/* Color Baby House — полноширинный баннер «Добро пожаловать».
   Раньше здесь была JPEG-афиша, но она пришла от прежнего бренда («ЧУДО»)
   и перерисовать её нечем. Теперь баннер собран вёрсткой из тех же
   элементов: знак, приветствие, список занятий и телефоны. Бонус —
   он больше не весит сотни килобайт и не мылится на широких экранах. */
function Banner() {
  const { Ic, SunMark, scrollToId, goal, CFG } = window;

  // ← Список занятий в баннере. Меняется здесь, порядок = порядок на экране.
  const activities = [
    'Английский язык', 'ЛФК', 'Танцы', 'Тхэквондо', 'Актёрское мастерство',
    'Рисование', 'Шахматы', 'Логопед-дефектолог', 'Массаж',
    'Мастер-классы', 'Развивающие игры', 'Робототехника',
  ];
  /* Плашки занятий — жёлтые (класс cs-chip, цвета в theme.css). Раньше они
     раскрашивались по кругу в четвёрку цветов логотипа; теперь у плашек на
     сайте один цвет, а текст на них тёмно-синий: 6.8:1, читается. */

  return (
    <section aria-label="Добро пожаловать" className="cs-banner" style={{ overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(20px,3vw,32px) clamp(20px,5vw,48px) 0' }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(6px)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-md)',
          padding: 'clamp(32px,4vw,52px) clamp(24px,4vw,48px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center',
        }}>
          {/* Цветная кромка сверху — четыре мазка логотипа */}
          <span aria-hidden="true" style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '8px',
            background: 'linear-gradient(90deg, var(--pink-400) 0 25%, var(--yellow-400) 25% 50%, var(--sky-400) 50% 75%, var(--purple-500) 75% 100%)',
          }} />

          {/* Знак — крупно по центру и медленно вращается (.cs-sun-spin) */}
          <SunMark size={168} className="cs-sun-spin cs-banner-mark" alt="Логотип Color Baby House" />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', minWidth: 0, width: '100%' }}>
            <span style={{ font: 'var(--font-overline)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--color-primary-text)' }}>
              Добро пожаловать в детский сад
            </span>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(30px,5vw,52px)', lineHeight: 1.05 }}>
              <span style={{ color: 'var(--ink-900)' }}>COLOR </span>
              <span className="cs-gradient-text">BABY HOUSE</span>
            </span>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              {activities.map((a) => (
                <span key={a} className="cs-chip" style={{
                  borderRadius: 'var(--radius-pill)', padding: '6px 13px',
                  fontSize: '14px', fontWeight: 800, whiteSpace: 'nowrap',
                }}>{a}</span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '12px 22px', marginTop: '4px' }}>
              <a href={'tel:' + CFG.PHONE_PRIMARY} onClick={() => goal('click_phone')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--ink-900)', textDecoration: 'none' }}>
                <Ic n="phone" size={17} color="var(--color-primary)" /> +998 90 176 69 99
              </a>
              <a href={'tel:' + CFG.PHONE_SECONDARY} onClick={() => goal('click_phone')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--ink-900)', textDecoration: 'none' }}>
                <Ic n="phone" size={17} color="var(--el-blue, #10559B)" /> +998 94 671 26 26
              </a>
              <a href="#enroll" onClick={(e) => { e.preventDefault(); goal('click_enroll_banner'); scrollToId && scrollToId('enroll'); }}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: 'var(--color-primary-text)', textDecoration: 'none' }}>
                Записаться <Ic n="arrow-right" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Banner = Banner;
