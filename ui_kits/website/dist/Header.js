function Header() {
  const {
    Button
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    SunMark,
    scrollToId,
    homeUrl,
    goal,
    CFG
  } = window;
  const INK_ON_LIGHT = '#062F52';
  const TONES = {
    pink: {
      bg: '#D62E83',
      fg: '#fff',
      glow: 'rgba(214, 46, 131, 0.42)'
    },
    cyan: {
      bg: '#22BFD1',
      fg: INK_ON_LIGHT,
      glow: 'rgba(34, 191, 209, 0.42)'
    },
    yellow: {
      bg: '#FBD130',
      fg: INK_ON_LIGHT,
      glow: 'rgba(251, 209, 48, 0.50)'
    },
    blue: {
      bg: '#10559B',
      fg: '#fff',
      glow: 'rgba(16, 85, 155, 0.42)'
    }
  };
  const nav = [{
    label: 'О садике',
    id: 'about',
    tone: 'pink'
  }, {
    label: 'Занятия',
    id: 'programs',
    tone: 'cyan'
  }, {
    label: 'Лето',
    id: 'summer',
    tone: 'yellow'
  }, {
    label: 'Распорядок',
    id: 'schedule',
    tone: 'blue'
  }, {
    label: 'Цены',
    id: 'pricing',
    tone: 'pink'
  }, {
    label: 'Отзывы',
    id: 'reviews',
    tone: 'cyan'
  }, {
    label: 'Вопросы',
    id: 'faq',
    tone: 'yellow'
  }, {
    label: 'Контакты',
    id: 'contacts',
    tone: 'blue'
  }];
  return (React.createElement("header", {
      className: "cs-header",
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 252, 253, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--pink-100, var(--color-border))'
      }
    }, React.createElement("div", {
      className: "cs-header-inner",
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '12px clamp(16px,4vw,48px)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }
    }, React.createElement("a", {
      href: homeUrl(),
      className: "cs-brand",
      "aria-label": "Color Baby House \u2014 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
      }
    }, React.createElement(SunMark, {
      size: 54,
      className: "cs-sun-spin"
    }), React.createElement("span", {
      translate: "no",
      className: "cs-brand-word",
      style: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.02
      }
    }, React.createElement("span", {
      style: {
        fontFamily: 'var(--font-accent)',
        fontSize: '19px',
        letterSpacing: '.06em',
        color: 'var(--ink-900)',
        whiteSpace: 'nowrap'
      }
    }, "COLOR"), React.createElement("span", {
      className: "cs-gradient-text",
      style: {
        fontFamily: 'var(--font-accent)',
        fontSize: '19px',
        letterSpacing: '.04em',
        whiteSpace: 'nowrap'
      }
    }, "BABY HOUSE"))), React.createElement("div", {
      className: "cs-header-actions",
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, React.createElement("a", {
      href: 'tel:' + CFG.PHONE_PRIMARY,
      className: "cs-header-phone",
      "aria-label": "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C: +998 90 176 69 99",
      title: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
      onClick: () => goal('click_phone'),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        minHeight: '48px',
        padding: '0 18px',
        borderRadius: 'var(--radius-pill)',
        background: TONES.yellow.bg,
        color: TONES.yellow.fg,
        fontWeight: 800,
        fontSize: '15px',
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      }
    }, React.createElement(Ic, {
      n: "phone",
      size: 19
    }), React.createElement("span", {
      className: "cs-header-phone-label"
    }, "+998 90 176 69 99")), React.createElement("span", {
      className: "cs-header-cta"
    }, React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: React.createElement(Ic, {
        n: "calendar-check",
        size: 20
      }),
      onClick: () => {
        goal('click_enroll_header');
        scrollToId('enroll');
      }
    }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")))), React.createElement("nav", {
      className: "cs-navbar",
      "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E"
    }, React.createElement("div", {
      className: "cs-navbar-inner"
    }, nav.map(n => {
      const t = TONES[n.tone];
      return React.createElement("a", {
        key: n.id,
        href: `#${n.id}`,
        className: "cs-navbtn",
        onClick: e => {
          e.preventDefault();
          scrollToId(n.id);
        },
        style: {
          background: t.bg,
          color: t.fg,
          '--cs-navbtn-glow': t.glow
        }
      }, n.label);
    }))))
  );
}
window.Header = Header;