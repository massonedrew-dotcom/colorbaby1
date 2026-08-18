/* Color Baby House — Floating quick-apply widget (top-right corner) */
function QuickApply() {
  const { Button, IconButton, Input, Badge } = window.DesignSystem_52b7c1;
  const { Ic, formatPhone, sanitize, sendLead, goal, ConsentCheck } = window;

  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [tg, setTg] = React.useState('');
  const [agree, setAgree] = React.useState(false);   // по умолчанию НЕ отмечено — требование закона
  const [phoneErr, setPhoneErr] = React.useState('');
  const [tgErr, setTgErr] = React.useState('');
  const [failed, setFailed] = React.useState('');

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const validate = () => {
    let ok = true;
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) { setPhoneErr('Введите номер телефона'); ok = false; } else setPhoneErr('');
    const tgClean = tg.trim().replace(/^@/, '');
    if (tgClean && !/^[a-zA-Z0-9_]{4,32}$/.test(tgClean)) { setTgErr('Латиница, цифры и _, от 4 символов'); ok = false; } else setTgErr('');
    return ok;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const form = e.currentTarget;
    setFailed('');
    setBusy(true);
    const res = await sendLead({ form: 'quick-apply', name, phone, telegram: tg });
    setBusy(false);
    if (!res.ok && res.reason !== 'no-endpoint') {
      setFailed('Не удалось отправить. Позвоните нам — мы рядом.');
      return;
    }
    goal('lead_quick');
    // Конфетти — до setSent: форма сейчас размонтируется, а размеры нужны сейчас.
    if (window.CSMotion) window.CSMotion.confetti(form);
    setSent(true);
  };

  const reset = () => { setSent(false); setName(''); setPhone(''); setTg(''); setAgree(false); };

  return (
    <div style={{
      position: 'fixed', bottom: 'clamp(16px, 3vh, 28px)', right: 'clamp(16px, 2vw, 28px)',
      zIndex: 200, maxWidth: 'min(360px, calc(100vw - 32px))',
    }}>
      {/* Collapsed pill */}
      {!open && (
        <button
          className="cs-qa-pill"
          onClick={() => { goal('open_quick_apply'); setOpen(true); }}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'var(--gradient-pink)', color: '#fff',
            border: 'none', cursor: 'pointer',
            padding: '12px 16px 12px 14px', borderRadius: 'var(--radius-pill)',
            boxShadow: 'var(--shadow-pink, var(--shadow-lg))',
            fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '14px',
            textAlign: 'left', lineHeight: 1.25,
            transition: 'transform var(--dur-base) var(--ease-bounce), box-shadow var(--dur-base) var(--ease-out)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <span className="cs-qa-spark" style={{
            width: 38, height: 38, borderRadius: '50%',
            background: 'rgba(255,255,255,0.22)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Ic n="sparkles" size={20} />
          </span>
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', opacity: 0.92, fontWeight: 700 }}>Хотите записать ребёнка?</span>
            <span style={{ fontSize: '15px' }}>Оставьте заявку →</span>
          </span>
        </button>
      )}

      {/* Expanded card */}
      {open && (
        <div style={{
          position: 'relative',
          background: '#fff',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl, var(--shadow-lg))',
          border: '1px solid var(--color-border)',
          padding: '22px 22px 20px',
          width: 'min(360px, calc(100vw - 32px))',
          animation: 'qa-pop var(--dur-base) var(--ease-bounce)',
        }}>
          <style>{`@keyframes qa-pop { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }`}</style>

          <button
            onClick={() => setOpen(false)}
            aria-label="Закрыть"
            style={{
              position: 'absolute', top: 10, right: 10,
              width: 32, height: 32, borderRadius: '50%',
              border: 'none', background: 'var(--sand-50, #E8F5F9)', color: 'var(--ink-700)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Ic n="x" size={18} />
          </button>

          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', padding: '8px 0 4px' }}>
              <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--mint-100)', color: 'var(--mint-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Ic n="check" size={28} />
              </span>
              <h3 style={{ font: 'var(--font-h4)', fontSize: '20px', margin: 0 }}>
                Спасибо{name ? `, ${name}` : ''}! 💛
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', margin: 0 }}>
                Мы получили заявку и скоро свяжемся с вами.
              </p>
              <Button variant="soft" size="sm" onClick={reset}>Отправить ещё одну</Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <Badge color="primary" variant="solid" size="sm" iconLeft={<Ic n="sparkles" size={13} />}>
                  Идёт запись
                </Badge>
              </div>
              <h3 style={{ font: 'var(--font-h4)', fontSize: '20px', margin: 0, lineHeight: 1.2 }}>
                Хотите записать ребёнка?
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: '-4px 0 4px' }}>
                Оставьте заявку — мы перезвоним и пригласим на экскурсию.
              </p>

              <Input
                label="Имя"
                placeholder="Как вас зовут?"
                required
                autoComplete="name"
                name="name"
                iconLeft={<Ic n="user" size={18} />}
                value={name}
                onChange={(e) => setName(sanitize(e.target.value, 60))}
              />
              <Input
                label="Телефон"
                type="tel"
                placeholder="+998 90 123 45 67"
                required
                inputMode="tel"
                autoComplete="tel"
                name="phone"
                iconLeft={<Ic n="phone" size={18} />}
                value={phone}
                onChange={(e) => { setPhone(formatPhone(e.target.value)); if (phoneErr) setPhoneErr(''); }}
                error={phoneErr}
              />
              <Input
                label="Telegram"
                placeholder="@username"
                iconLeft={<Ic n="send" size={18} />}
                value={tg}
                onChange={(e) => { setTg(sanitize(e.target.value, 40)); if (tgErr) setTgErr(''); }}
                error={tgErr}
                helper={tgErr ? '' : 'Необязательно — напишем в Telegram, если удобнее'}
              />

              <ConsentCheck id="quick-consent" checked={agree} onChange={setAgree} />

              {failed && (
                <span role="alert" style={{ fontSize: '12px', color: 'var(--color-danger)', textAlign: 'center' }}>{failed}</span>
              )}

              <Button type="submit" variant="primary" size="md" block
                disabled={!agree || busy}
                iconRight={<Ic n="arrow-right" size={18} />}>
                {busy ? 'Отправляем…' : 'Отправить заявку'}
              </Button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
window.QuickApply = QuickApply;
