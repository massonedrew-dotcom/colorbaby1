function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Contacts() {
  const {
    SectionHeading,
    Button
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    scrollToId
  } = window;
  const mapsUrl = 'https://yandex.uz/maps/?text=' + encodeURIComponent('Ташкент, улица Тафаккур, 6');
  const info = [{
    i: 'map-pin',
    t: 'Адрес',
    v: 'г. Ташкент, улица Тафаккур, 6',
    c: 'pink',
    href: mapsUrl
  }, {
    i: 'landmark',
    t: 'Ориентир',
    v: 'сзади гостиницы «Россия»',
    c: 'purple'
  }, {
    i: 'phone',
    t: 'Телефон',
    v: '+998 90 176 69 99',
    c: 'sky',
    href: 'tel:+998901766999'
  }, {
    i: 'phone',
    t: 'Телефон',
    v: '+998 94 671 26 26',
    c: 'sun',
    href: 'tel:+998946712626'
  }, {
    i: 'send',
    t: 'Telegram',
    v: '@colorbabyhouse',
    c: 'mint',
    href: 'https://t.me/colorbabyhouse'
  }, {
    i: 'clock',
    t: 'Часы работы',
    v: 'Пн–Пт, 8:00–18:00 · сб — по записи',
    c: 'orange'
  }];
  const chip = {
    pink: {
      bg: 'var(--pink-100)',
      fg: 'var(--on-pink-100)'
    },
    sky: {
      bg: 'var(--sky-100)',
      fg: 'var(--on-cyan-100)'
    },
    mint: {
      bg: 'var(--mint-100)',
      fg: 'var(--on-mint-100)'
    },
    orange: {
      bg: 'var(--orange-100)',
      fg: 'var(--on-gold-100)'
    },
    purple: {
      bg: 'var(--purple-100)',
      fg: 'var(--on-blue-100)'
    },
    sun: {
      bg: 'var(--yellow-100)',
      fg: 'var(--on-yellow-100)'
    }
  };
  return React.createElement("section", {
    id: "contacts",
    className: "cs-reveal",
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
  }, React.createElement(SectionHeading, {
    eyebrow: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    title: "\u041F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u0432 \u0433\u043E\u0441\u0442\u0438",
    gradient: true
  }, "\u0411\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u043B\u0438\u0447\u043D\u043E \u2014 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 Telegram \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: '36px',
      margin: '44px 0 0',
      alignItems: 'stretch'
    },
    className: "cs-contacts-grid"
  }, React.createElement("div", {
    className: "cs-stagger cs-cta",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, info.map(x => {
    const c = chip[x.c] || chip.pink;
    const Wrap = x.href ? 'a' : 'div';
    const wrapProps = x.href ? {
      href: x.href,
      target: x.href.startsWith('http') ? '_blank' : undefined,
      rel: x.href.startsWith('http') ? 'noopener noreferrer' : undefined
    } : {};
    return React.createElement(Wrap, _extends({
      key: x.t + x.v
    }, wrapProps, {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 18px',
        boxShadow: 'var(--shadow-sm)',
        textDecoration: 'none',
        color: 'inherit',
        cursor: x.href ? 'pointer' : 'default',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
      },
      onMouseEnter: x.href ? e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      } : undefined,
      onMouseLeave: x.href ? e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      } : undefined
    }), React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        flex: 'none',
        borderRadius: '50%',
        background: c.bg,
        color: c.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Ic, {
      n: x.i,
      size: 22
    })), React.createElement("div", null, React.createElement("span", {
      style: {
        display: 'block',
        fontSize: '13px',
        color: 'var(--color-text-muted)',
        fontWeight: 700,
        marginBottom: '2px'
      }
    }, x.t), React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '17px',
        color: 'var(--ink-900)'
      }
    }, x.v)));
  }), React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: React.createElement(Ic, {
      n: "calendar-heart",
      size: 20
    }),
    onClick: () => scrollToId && scrollToId('enroll'),
    style: {
      marginTop: '4px'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E")), React.createElement("div", {
    className: "cs-card",
    style: {
      position: 'relative',
      minHeight: '380px',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      border: '6px solid #fff',
      boxShadow: 'var(--shadow-lg)',
      background: 'var(--sky-50)'
    }
  }, React.createElement("iframe", {
    src: 'https://yandex.uz/map-widget/v1/?text=' + encodeURIComponent('Ташкент, улица Тафаккур, 6') + '&z=16',
    title: "Color Baby House \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 \u2014 \u0422\u0430\u0448\u043A\u0435\u043D\u0442, \u0443\u043B\u0438\u0446\u0430 \u0422\u0430\u0444\u0430\u043A\u043A\u0443\u0440, 6 (\u0441\u0437\u0430\u0434\u0438 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B \xAB\u0420\u043E\u0441\u0441\u0438\u044F\xBB)",
    loading: "lazy",
    allowFullScreen: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      border: 0
    }
  }), React.createElement("a", {
    href: mapsUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      position: 'absolute',
      left: '14px',
      bottom: '14px',
      background: 'rgba(255,255,255,0.92)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 14px',
      fontSize: '13px',
      fontWeight: 800,
      color: 'var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      boxShadow: 'var(--shadow-sm)',
      textDecoration: 'none'
    }
  }, React.createElement(Ic, {
    n: "map-pin",
    size: 15,
    color: "var(--color-primary)"
  }), " \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u042F\u043D\u0434\u0435\u043A\u0441.\u041A\u0430\u0440\u0442\u0430\u0445")))));
}
window.Contacts = Contacts;