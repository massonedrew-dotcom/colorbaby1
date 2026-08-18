function QuickApply() {
  const {
    Button,
    IconButton,
    Input,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    formatPhone,
    sanitize,
    sendLead,
    goal,
    ConsentCheck
  } = window;
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [tg, setTg] = React.useState('');
  const [agree, setAgree] = React.useState(false);
  const [phoneErr, setPhoneErr] = React.useState('');
  const [tgErr, setTgErr] = React.useState('');
  const [failed, setFailed] = React.useState('');
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  const validate = () => {
    let ok = true;
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setPhoneErr('Введите номер телефона');
      ok = false;
    } else setPhoneErr('');
    const tgClean = tg.trim().replace(/^@/, '');
    if (tgClean && !/^[a-zA-Z0-9_]{4,32}$/.test(tgClean)) {
      setTgErr('Латиница, цифры и _, от 4 символов');
      ok = false;
    } else setTgErr('');
    return ok;
  };
  const submit = async e => {
    e.preventDefault();
    if (!validate()) return;
    const form = e.currentTarget;
    setFailed('');
    setBusy(true);
    const res = await sendLead({
      form: 'quick-apply',
      name,
      phone,
      telegram: tg
    });
    setBusy(false);
    if (!res.ok && res.reason !== 'no-endpoint') {
      setFailed('Не удалось отправить. Позвоните нам — мы рядом.');
      return;
    }
    goal('lead_quick');
    if (window.CSMotion) window.CSMotion.confetti(form);
    setSent(true);
  };
  const reset = () => {
    setSent(false);
    setName('');
    setPhone('');
    setTg('');
    setAgree(false);
  };
  return React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 'clamp(16px, 3vh, 28px)',
      right: 'clamp(16px, 2vw, 28px)',
      zIndex: 200,
      maxWidth: 'min(360px, calc(100vw - 32px))'
    }
  }, !open && React.createElement("button", {
    className: "cs-qa-pill",
    onClick: () => {
      goal('open_quick_apply');
      setOpen(true);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'var(--gradient-pink)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      padding: '12px 16px 12px 14px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-pink, var(--shadow-lg))',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: '14px',
      textAlign: 'left',
      lineHeight: 1.25,
      transition: 'transform var(--dur-base) var(--ease-bounce), box-shadow var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, React.createElement("span", {
    className: "cs-qa-spark",
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement(Ic, {
    n: "sparkles",
    size: 20
  })), React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '13px',
      opacity: 0.92,
      fontWeight: 700
    }
  }, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0440\u0435\u0431\u0451\u043D\u043A\u0430?"), React.createElement("span", {
    style: {
      fontSize: '15px'
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2192"))), open && React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl, var(--shadow-lg))',
      border: '1px solid var(--color-border)',
      padding: '22px 22px 20px',
      width: 'min(360px, calc(100vw - 32px))',
      animation: 'qa-pop var(--dur-base) var(--ease-bounce)'
    }
  }, React.createElement("style", null, `@keyframes qa-pop { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }`), React.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--sand-50, #E8F5F9)',
      color: 'var(--ink-700)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "x",
    size: 18
  })), sent ? React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '12px',
      padding: '8px 0 4px'
    }
  }, React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--mint-100)',
      color: 'var(--on-mint-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "check",
    size: 28
  })), React.createElement("h3", {
    style: {
      font: 'var(--font-h4)',
      fontSize: '20px',
      margin: 0
    }
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E", name ? `, ${name}` : '', "! \uD83D\uDC9B"), React.createElement("p", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '14px',
      margin: 0
    }
  }, "\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u0441\u043A\u043E\u0440\u043E \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438."), React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: reset
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443")) : React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '2px'
    }
  }, React.createElement(Badge, {
    color: "primary",
    variant: "solid",
    size: "sm",
    iconLeft: React.createElement(Ic, {
      n: "sparkles",
      size: 13
    })
  }, "\u0418\u0434\u0451\u0442 \u0437\u0430\u043F\u0438\u0441\u044C")), React.createElement("h3", {
    style: {
      font: 'var(--font-h4)',
      fontSize: '20px',
      margin: 0,
      lineHeight: 1.2
    }
  }, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0440\u0435\u0431\u0451\u043D\u043A\u0430?"), React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--color-text-muted)',
      margin: '-4px 0 4px'
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0438 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043C \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E."), React.createElement(Input, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442?",
    required: true,
    autoComplete: "name",
    name: "name",
    iconLeft: React.createElement(Ic, {
      n: "user",
      size: 18
    }),
    value: name,
    onChange: e => setName(sanitize(e.target.value, 60))
  }), React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "tel",
    placeholder: "+998 90 123 45 67",
    required: true,
    inputMode: "tel",
    autoComplete: "tel",
    name: "phone",
    iconLeft: React.createElement(Ic, {
      n: "phone",
      size: 18
    }),
    value: phone,
    onChange: e => {
      setPhone(formatPhone(e.target.value));
      if (phoneErr) setPhoneErr('');
    },
    error: phoneErr
  }), React.createElement(Input, {
    label: "Telegram",
    placeholder: "@username",
    iconLeft: React.createElement(Ic, {
      n: "send",
      size: 18
    }),
    value: tg,
    onChange: e => {
      setTg(sanitize(e.target.value, 40));
      if (tgErr) setTgErr('');
    },
    error: tgErr,
    helper: tgErr ? '' : 'Необязательно — напишем в Telegram, если удобнее'
  }), React.createElement(ConsentCheck, {
    id: "quick-consent",
    checked: agree,
    onChange: setAgree
  }), failed && React.createElement("span", {
    role: "alert",
    style: {
      fontSize: '12px',
      color: 'var(--color-danger)',
      textAlign: 'center'
    }
  }, failed), React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "md",
    block: true,
    disabled: !agree || busy,
    iconRight: React.createElement(Ic, {
      n: "arrow-right",
      size: 18
    })
  }, busy ? 'Отправляем…' : 'Отправить заявку'))));
}
window.QuickApply = QuickApply;