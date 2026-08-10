/* Color Baby House — Частые вопросы (аккордеон + микроразметка FAQPage) */
function Faq() {
  const { SectionHeading, Button } = window.DesignSystem_52b7c1;
  const { Ic, scrollToId, goal } = window;

  // Вопросы и ответы лежат в faq.data.js — оттуда же собирается разметка FAQPage.
  const items = window.FAQ_ITEMS || [];
  // Первый вопрос открыт: посетитель сразу видит, что здесь есть ответы,
  // а не просто список заголовков.
  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="cs-reveal" style={{
      padding: 'var(--section-y) 0', scrollMarginTop: '92px',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <SectionHeading eyebrow="Частые вопросы" title="Отвечаем на главное" gradient>
          Собрали то, о чём родители спрашивают чаще всего. Не нашли свой вопрос — просто позвоните. 💛
        </SectionHeading>

        <div className="cs-faq" style={{
          maxWidth: '860px', margin: '44px auto 0',
          display: 'flex', flexDirection: 'column', gap: '12px',
        }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} style={{
                background: 'var(--color-surface)',
                border: '1px solid ' + (isOpen ? 'var(--pink-200, #F9B2D2)' : 'var(--color-border)'),
                borderRadius: 'var(--radius-lg)',
                boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                overflow: 'hidden',
                transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
              }}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={'faq-a-' + i}
                    id={'faq-q-' + i}
                    onClick={() => { setOpen(isOpen ? -1 : i); if (!isOpen) goal('open_faq'); }}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '16px',
                      padding: '18px 20px', background: 'transparent', border: 'none',
                      cursor: 'pointer', textAlign: 'left',
                      font: 'var(--font-h4)', fontSize: '17px', lineHeight: 1.35,
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      color: 'var(--ink-900)',
                    }}
                  >
                    <span style={{ flex: 1 }}>{it.q}</span>
                    <span style={{
                      width: 32, height: 32, flex: 'none', borderRadius: '50%',
                      background: isOpen ? 'var(--color-primary)' : 'var(--color-primary-soft)',
                      color: isOpen ? '#fff' : 'var(--color-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
                    }}>
                      <Ic n="chevron-down" size={18} />
                    </span>
                  </button>
                </h3>
                {/* Ответ остаётся в разметке всегда (скрыт высотой), чтобы поисковик
                    видел текст, а не пустой заголовок. */}
                <div
                  id={'faq-a-' + i}
                  role="region"
                  aria-labelledby={'faq-q-' + i}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows var(--dur-base) var(--ease-out)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{
                      margin: 0, padding: '0 20px 20px', paddingRight: '68px',
                      font: 'var(--font-body-r)', fontSize: '16px', lineHeight: 1.65,
                      color: 'var(--color-text-muted)',
                    }}>{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', margin: '0 0 16px' }}>
            Остались вопросы? Позвоните или запишитесь на экскурсию — покажем всё лично.
          </p>
          <Button variant="primary" size="lg" iconRight={<Ic n="arrow-right" size={20} />}
            onClick={() => { goal('click_enroll_faq'); scrollToId('enroll'); }}>
            Записаться на экскурсию
          </Button>
        </div>
      </div>
    </section>
  );
}
window.Faq = Faq;
