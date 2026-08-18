/* Color Baby House — Enrolment CTA with interactive form */
function Enroll() {
  const { Button, Input, Badge } = window.DesignSystem_52b7c1;
  const { Ic, Blob, formatPhone, sanitize, sendLead, goal, ConsentCheck, CFG } = window;
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [agree, setAgree] = React.useState(false);      // по умолчанию НЕ отмечено — требование закона
  const [phoneErr, setPhoneErr] = React.useState('');
  const [failed, setFailed] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Проверяем номер до отправки: пустая или битая заявка бесполезна обеим сторонам.
    if (phone.replace(/\D/g, '').length < 9) {
      setPhoneErr('Введите номер телефона полностью');
      return;
    }
    setPhoneErr('');
    setFailed('');
    setBusy(true);
    const res = await sendLead({ form: 'enroll', name, phone, age });
    setBusy(false);
    if (!res.ok && res.reason !== 'no-endpoint') {
      setFailed('Не удалось отправить заявку. Позвоните нам — мы рядом.');
      return;
    }
    goal('lead_enroll');
    // Конфетти — до setSent: форма сейчас размонтируется, а размеры нужны сейчас.
    if (window.CSMotion) window.CSMotion.confetti(form);
    setSent(true);
  };

  return (
    <section id="enroll" style={{ padding: 'var(--section-y) 0', scrollMarginTop: '92px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: 'var(--radius-2xl)', background: 'var(--gradient-sunrise)',
          padding: 'clamp(36px,5vw,64px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center',
          boxShadow: 'var(--shadow-md)',
        }} className="cs-enroll-grid">
          <Blob color="var(--pink-200)" size={260} className="cs-float-slow" style={{ right: '-60px', top: '-60px' }} />
          <div className="cs-reveal-left" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <Badge color="primary" variant="solid" size="lg" style={{ alignSelf: 'flex-start' }} iconLeft={<Ic n="sparkles" size={16} />}>
              Идёт запись · есть места
            </Badge>
            <h2 style={{ font: 'var(--font-h2)', fontSize: 'clamp(30px,3.6vw,48px)', margin: 0 }}>
              Приходите к нам<br />на экскурсию
            </h2>
            <p style={{ font: 'var(--font-lead)', fontSize: '18px', color: 'var(--ink-700)', maxWidth: '420px' }}>
              Оставьте заявку — перезвоним, ответим на вопросы и пригласим познакомиться с садиком и педагогами.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '4px', flexWrap: 'wrap' }}>
              <a href={'tel:' + CFG.PHONE_PRIMARY} onClick={() => goal('click_phone')} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--ink-700)', textDecoration: 'none' }}>
                <Ic n="phone" size={18} color="var(--color-primary)" /> +998 90 176 69 99
              </a>
              <a href={'https://t.me/' + CFG.TELEGRAM} target="_blank" rel="noopener noreferrer" onClick={() => goal('click_telegram')} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--ink-700)', textDecoration: 'none' }}>
                <Ic n="send" size={18} color="var(--el-blue, #10559B)" /> @{CFG.TELEGRAM}
              </a>
            </div>
          </div>

          <div className="cs-reveal-right cs-cta" style={{
            position: 'relative', background: '#fff', borderRadius: 'var(--radius-xl)',
            padding: 'clamp(24px,3vw,36px)', boxShadow: 'var(--shadow-lg)',
          }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px', padding: '24px 0' }}>
                <span style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--mint-100)', color: 'var(--on-mint-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ic n="check" size={38} />
                </span>
                <h3 style={{ font: 'var(--font-h3)', fontSize: '26px', margin: 0 }}>Спасибо{name ? `, ${name}` : ''}! 😊</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Мы получили вашу заявку и скоро перезвоним.</p>
                <Button variant="soft" onClick={() => { setSent(false); setAgree(false); }}>Отправить ещё одну</Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ font: 'var(--font-h4)', fontSize: '22px', margin: '0 0 4px' }}>Записаться на экскурсию</h3>
                <Input label="Ваше имя" placeholder="Как вас зовут?" required
                  autoComplete="name" name="name"
                  iconLeft={<Ic n="user" size={18} />} value={name}
                  onChange={(e) => setName(sanitize(e.target.value, 60))} />
                <Input label="Телефон" type="tel" placeholder="+998 90 123 45 67" required
                  inputMode="tel" autoComplete="tel" name="phone"
                  iconLeft={<Ic n="phone" size={18} />} value={phone}
                  error={phoneErr}
                  onChange={(e) => { setPhone(formatPhone(e.target.value)); if (phoneErr) setPhoneErr(''); }} />
                <Input label="Возраст ребёнка" placeholder="например, 3 года"
                  iconLeft={<Ic n="cake" size={18} />} value={age}
                  onChange={(e) => setAge(sanitize(e.target.value, 30))} />

                <ConsentCheck id="enroll-consent" checked={agree} onChange={setAgree} />

                {failed && (
                  <span role="alert" style={{ fontSize: '13px', color: 'var(--color-danger)', textAlign: 'center' }}>{failed}</span>
                )}

                <Button type="submit" variant="primary" size="lg" block
                  disabled={!agree || busy}
                  iconRight={<Ic n="arrow-right" size={20} />}>
                  {busy ? 'Отправляем…' : 'Отправить заявку'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Enroll = Enroll;
