function Header() {
  const {
    Button,
    IconButton
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    SunMark,
    scrollToId,
    homeUrl,
    goal,
    CFG
  } = window;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const nav = [{
    label: 'О садике',
    id: 'about'
  }, {
    label: 'Занятия',
    id: 'programs'
  }, {
    label: 'Лето',
    id: 'summer'
  }, {
    label: 'Распорядок',
    id: 'schedule'
  }, {
    label: 'Цены',
    id: 'pricing'
  }, {
    label: 'Отзывы',
    id: 'reviews'
  }, {
    label: 'Вопросы',
    id: 'faq'
  }, {
    label: 'Контакты',
    id: 'contacts'
  }];
  const go = id => {
    setMenuOpen(false);
    scrollToId(id);
  };
  return (React.createElement("header", {
      className: "cs-header",
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 252, 253, 0.90)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--pink-100, var(--color-border))'
      }
    }, React.createElement("div", {
      className: "cs-header-inner",
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '16px clamp(20px,5vw,48px)',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
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
    }, "BABY HOUSE"))), React.createElement("nav", {
      style: {
        display: 'flex',
        gap: '2px',
        marginLeft: 'auto'
      },
      className: "cs-nav",
      "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E"
    }, nav.map(n => React.createElement("a", {
      key: n.id,
      href: `#${n.id}`,
      onClick: e => {
        e.preventDefault();
        go(n.id);
      },
      style: {
        padding: '12px 13px',
        borderRadius: 'var(--radius-pill)',
        fontWeight: 700,
        fontSize: '16px',
        color: 'var(--ink-700)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'all var(--dur-base) var(--ease-out)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = 'var(--color-primary-soft)';
        e.currentTarget.style.color = 'var(--color-primary-press)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--ink-700)';
      }
    }, n.label))), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      },
      className: "cs-nav"
    }, React.createElement("a", {
      href: 'tel:' + CFG.PHONE_PRIMARY,
      "aria-label": "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C: +998 90 176 69 99",
      title: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
      onClick: () => goal('click_phone'),
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-pill)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        border: '2px solid var(--plate-line, #F2C41C)',
        color: 'var(--el-blue, #10559B)',
        textDecoration: 'none',
        transition: 'transform var(--dur-fast) var(--ease-bounce)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'none';
      }
    }, React.createElement(Ic, {
      n: "phone",
      size: 22
    })), React.createElement(IconButton, {
      icon: React.createElement(Ic, {
        n: "send",
        size: 22
      }),
      variant: "soft",
      size: "lg",
      label: "Telegram",
      onClick: () => {
        goal('click_telegram');
        scrollToId('contacts');
      },
      style: {
        background: '#fff',
        border: '2px solid var(--plate-line, #F2C41C)',
        color: 'var(--el-blue, #10559B)'
      }
    }), React.createElement("span", {
      className: "cs-header-cta"
    }, React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: React.createElement(Ic, {
        n: "phone",
        size: 20
      }),
      onClick: () => {
        goal('click_enroll_header');
        scrollToId('enroll');
      }
    }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))), React.createElement("button", {
      className: "cs-burger",
      "aria-label": menuOpen ? 'Закрыть меню' : 'Открыть меню',
      "aria-expanded": menuOpen,
      onClick: () => setMenuOpen(o => !o),
      style: {
        marginLeft: 'auto',
        width: 54,
        height: 54,
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        color: 'var(--ink-900)',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Ic, {
      n: menuOpen ? 'x' : 'menu',
      size: 24
    }))), React.createElement("nav", {
      className: `cs-mobile-nav${menuOpen ? ' cs-mobile-nav-open' : ''}`,
      "aria-label": "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043C\u0435\u043D\u044E",
      style: {
        flexDirection: 'column',
        gap: '4px',
        padding: '8px clamp(20px,5vw,48px) 16px',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--cream)'
      }
    }, nav.map(n => React.createElement("a", {
      key: n.id,
      href: `#${n.id}`,
      onClick: e => {
        e.preventDefault();
        go(n.id);
      },
      style: {
        padding: '12px 14px',
        borderRadius: 'var(--radius-md)',
        fontWeight: 700,
        fontSize: '16px',
        color: 'var(--ink-700)',
        textDecoration: 'none'
      }
    }, n.label)), React.createElement("a", {
      href: 'tel:' + CFG.PHONE_PRIMARY,
      onClick: () => goal('click_phone'),
      style: {
        padding: '12px 14px',
        borderRadius: 'var(--radius-md)',
        fontWeight: 800,
        fontSize: '16px',
        color: 'var(--color-primary-text)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, React.createElement(Ic, {
      n: "phone",
      size: 18
    }), " +998 90 176 69 99"), React.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        marginTop: '8px'
      }
    }, React.createElement(Button, {
      variant: "soft",
      size: "md",
      iconLeft: React.createElement(Ic, {
        n: "send",
        size: 18
      }),
      onClick: () => {
        goal('click_telegram');
        go('contacts');
      },
      style: {
        flex: 1
      }
    }, "Telegram"), React.createElement(Button, {
      variant: "primary",
      size: "md",
      iconLeft: React.createElement(Ic, {
        n: "phone",
        size: 17
      }),
      onClick: () => {
        goal('click_enroll_header');
        go('enroll');
      },
      style: {
        flex: 1
      }
    }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))))
  );
}
window.Header = Header;