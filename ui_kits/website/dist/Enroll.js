function Enroll() {
  const {
    Button,
    Input,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    Blob,
    formatPhone,
    sanitize,
    sendLead,
    goal,
    ConsentCheck,
    CFG
  } = window;
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [agree, setAgree] = React.useState(false);
  const [phoneErr, setPhoneErr] = React.useState('');
  const [failed, setFailed] = React.useState('');
  const submit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (phone.replace(/\D/g, '').length < 9) {
      setPhoneErr('Введите номер телефона полностью');
      return;
    }
    setPhoneErr('');
    setFailed('');
    setBusy(true);
    const res = await sendLead({
      form: 'enroll',
      name,
      phone,
      age
    });
    setBusy(false);
    if (!res.ok && res.reason !== 'no-endpoint') {
      setFailed('Не удалось отправить заявку. Позвоните нам — мы рядом.');
      return;
    }
    goal('lead_enroll');
    if (window.CSMotion) window.CSMotion.confetti(form);
    setSent(true);
  };
  return React.createElement("section", {
    id: "enroll",
    style: {
      padding: 'var(--section-y) 0',
      scrollMarginTop: '92px'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--gradient-sunrise)',
      padding: 'clamp(36px,5vw,64px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center',
      boxShadow: 'var(--shadow-md)'
    },
    className: "cs-enroll-grid"
  }, React.createElement(Blob, {
    color: "var(--pink-200)",
    size: 260,
    className: "cs-float-slow",
    style: {
      right: '-60px',
      top: '-60px'
    }
  }), React.createElement("div", {
    className: "cs-reveal-left",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, React.createElement(Badge, {
    color: "primary",
    variant: "solid",
    size: "lg",
    style: {
      alignSelf: 'flex-start'
    },
    iconLeft: React.createElement(Ic, {
      n: "sparkles",
      size: 16
    })
  }, "\u0418\u0434\u0451\u0442 \u0437\u0430\u043F\u0438\u0441\u044C \xB7 \u0435\u0441\u0442\u044C \u043C\u0435\u0441\u0442\u0430"), React.createElement("h2", {
    style: {
      font: 'var(--font-h2)',
      fontSize: 'clamp(30px,3.6vw,48px)',
      margin: 0
    }
  }, "\u041F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u043A \u043D\u0430\u043C", React.createElement("br", null), "\u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"), React.createElement("p", {
    style: {
      font: 'var(--font-lead)',
      fontSize: '18px',
      color: 'var(--ink-700)',
      maxWidth: '420px'
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C, \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043C \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0441\u0430\u0434\u0438\u043A\u043E\u043C \u0438 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0430\u043C\u0438."), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginTop: '4px',
      flexWrap: 'wrap'
    }
  }, React.createElement("a", {
    href: 'tel:' + CFG.PHONE_PRIMARY,
    onClick: () => goal('click_phone'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 700,
      color: 'var(--ink-700)',
      textDecoration: 'none'
    }
  }, React.createElement(Ic, {
    n: "phone",
    size: 18,
    color: "var(--color-primary)"
  }), " +998 90 176 69 99"), React.createElement("a", {
    href: 'https://t.me/' + CFG.TELEGRAM,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => goal('click_telegram'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 700,
      color: 'var(--ink-700)',
      textDecoration: 'none'
    }
  }, React.createElement(Ic, {
    n: "send",
    size: 18,
    color: "var(--el-blue, #10559B)"
  }), " @", CFG.TELEGRAM))), React.createElement("div", {
    className: "cs-reveal-right cs-cta",
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(24px,3vw,36px)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, sent ? React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '14px',
      padding: '24px 0'
    }
  }, React.createElement("span", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--mint-100)',
      color: 'var(--on-mint-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "check",
    size: 38
  })), React.createElement("h3", {
    style: {
      font: 'var(--font-h3)',
      fontSize: '26px',
      margin: 0
    }
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E", name ? `, ${name}` : '', "! \uD83D\uDE0A"), React.createElement("p", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '16px'
    }
  }, "\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u0441\u043A\u043E\u0440\u043E \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C."), React.createElement(Button, {
    variant: "soft",
    onClick: () => {
      setSent(false);
      setAgree(false);
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443")) : React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, React.createElement("h3", {
    style: {
      font: 'var(--font-h4)',
      fontSize: '22px',
      margin: '0 0 4px'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"), React.createElement(Input, {
    label: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
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
    error: phoneErr,
    onChange: e => {
      setPhone(formatPhone(e.target.value));
      if (phoneErr) setPhoneErr('');
    }
  }), React.createElement(Input, {
    label: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u0440\u0435\u0431\u0451\u043D\u043A\u0430",
    placeholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 3 \u0433\u043E\u0434\u0430",
    iconLeft: React.createElement(Ic, {
      n: "cake",
      size: 18
    }),
    value: age,
    onChange: e => setAge(sanitize(e.target.value, 30))
  }), React.createElement(ConsentCheck, {
    id: "enroll-consent",
    checked: agree,
    onChange: setAgree
  }), failed && React.createElement("span", {
    role: "alert",
    style: {
      fontSize: '13px',
      color: 'var(--color-danger)',
      textAlign: 'center'
    }
  }, failed), React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    block: true,
    disabled: !agree || busy,
    iconRight: React.createElement(Ic, {
      n: "arrow-right",
      size: 20
    })
  }, busy ? 'Отправляем…' : 'Отправить заявку'))))));
}
window.Enroll = Enroll;