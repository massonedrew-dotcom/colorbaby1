function Footer() {
  const {
    Ic,
    scrollToId,
    asset,
    homeUrl,
    SunMark,
    goal,
    CFG
  } = window;
  const cols = [{
    h: 'Садик',
    items: [{
      t: 'О нас',
      id: 'about'
    }, {
      t: 'Распорядок дня',
      id: 'schedule'
    }, {
      t: 'Лето',
      id: 'summer'
    }]
  }, {
    h: 'Занятия',
    items: [{
      t: 'Английский',
      id: 'programs'
    }, {
      t: 'Танцы',
      id: 'programs'
    }, {
      t: 'Шахматы',
      id: 'programs'
    }, {
      t: 'Робототехника',
      id: 'programs'
    }, {
      t: 'Логопед',
      id: 'programs'
    }]
  }, {
    h: 'Родителям',
    items: [{
      t: 'Цены',
      id: 'pricing'
    }, {
      t: 'Запись',
      id: 'enroll'
    }, {
      t: 'Отзывы',
      id: 'reviews'
    }, {
      t: 'Частые вопросы',
      id: 'faq'
    }, {
      t: 'Контакты',
      id: 'contacts'
    }]
  }];
  const year = new Date().getFullYear();
  const founded = CFG.FOUNDED ? String(CFG.FOUNDED) : '';
  const social = [{
    i: 'send',
    label: 'Telegram',
    href: 'https://t.me/' + CFG.TELEGRAM,
    goal: 'click_telegram'
  }, {
    i: 'camera',
    label: 'Instagram',
    href: 'https://instagram.com/' + CFG.INSTAGRAM,
    goal: 'click_instagram'
  }, {
    i: 'phone',
    label: 'Позвонить',
    href: 'tel:' + CFG.PHONE_PRIMARY,
    goal: 'click_phone'
  }];
  return React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      paddingTop: 'clamp(48px,6vw,72px)'
    }
  }, React.createElement("div", {
    className: "cs-footer-grid cs-stagger",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '40px'
    }
  }, React.createElement("div", {
    className: "cs-footer-brand",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, React.createElement("a", {
    href: homeUrl(),
    "aria-label": "Color Baby House \u2014 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none'
    }
  }, React.createElement(SunMark, {
    size: 44,
    className: "cs-sun-spin"
  }), React.createElement("span", {
    style: {
      lineHeight: 1
    }
  }, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '22px',
      color: '#fff',
      display: 'block'
    }
  }, "Color Baby House"))), React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.62)',
      fontSize: '15px',
      lineHeight: 1.6,
      maxWidth: '280px'
    }
  }, "\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u0430\u0434\u0438\u043A \u0434\u043B\u044F \u043C\u0430\u043B\u044B\u0448\u0435\u0439 \u043E\u0442 1 \u0434\u043E 7 \u043B\u0435\u0442. \u0417\u0430\u0431\u043E\u0442\u0430, \u0442\u0435\u043F\u043B\u043E \u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u0447\u0442\u043E-\u0442\u043E \u043D\u043E\u0432\u043E\u0435."), React.createElement("address", {
    style: {
      fontStyle: 'normal',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontSize: '15px'
    }
  }, React.createElement("span", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-start',
      color: 'rgba(255,255,255,0.72)'
    }
  }, React.createElement(Ic, {
    n: "map-pin",
    size: 17
  }), " ", CFG.ADDRESS), CFG.LANDMARK && React.createElement("span", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-start',
      color: 'rgba(255,255,255,0.72)'
    }
  }, React.createElement(Ic, {
    n: "landmark",
    size: 17
  }), " \u041E\u0440\u0438\u0435\u043D\u0442\u0438\u0440: ", CFG.LANDMARK), React.createElement("a", {
    href: 'tel:' + CFG.PHONE_PRIMARY,
    onClick: () => goal('click_phone'),
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 700,
      textDecoration: 'none'
    }
  }, React.createElement(Ic, {
    n: "phone",
    size: 17
  }), " +998 90 176 69 99"), React.createElement("a", {
    href: 'tel:' + CFG.PHONE_SECONDARY,
    onClick: () => goal('click_phone'),
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 700,
      textDecoration: 'none'
    }
  }, React.createElement(Ic, {
    n: "phone",
    size: 17
  }), " +998 94 671 26 26"), CFG.EMAIL && React.createElement("a", {
    href: 'mailto:' + CFG.EMAIL,
    onClick: () => goal('click_email'),
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 700,
      textDecoration: 'none'
    }
  }, React.createElement(Ic, {
    n: "mail",
    size: 17
  }), " ", CFG.EMAIL), React.createElement("span", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      color: 'rgba(255,255,255,0.72)'
    }
  }, React.createElement(Ic, {
    n: "clock",
    size: 17
  }), " \u041F\u043D\u2013\u041F\u0442 8:00\u201318:00 \xB7 \u0441\u0431 \u2014 \u043F\u043E \u0437\u0430\u043F\u0438\u0441\u0438")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, social.map(b => React.createElement("a", {
    key: b.label,
    href: b.href,
    "aria-label": b.label,
    title: b.label,
    target: b.href.startsWith('http') ? '_blank' : undefined,
    rel: b.href.startsWith('http') ? 'noopener noreferrer' : undefined,
    onClick: () => goal(b.goal),
    className: "cs-footer-social",
    style: {
      width: 44,
      height: 44,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-bounce), background var(--dur-base) var(--ease-out)'
    }
  }, React.createElement(Ic, {
    n: b.i,
    size: 20
  }))))), cols.map(c => React.createElement("div", {
    key: c.h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      color: '#fff'
    }
  }, c.h), c.items.map(it => React.createElement("a", {
    key: c.h + it.t,
    href: '#' + it.id,
    onClick: e => {
      e.preventDefault();
      scrollToId(it.id);
    },
    style: {
      color: 'rgba(255,255,255,0.62)',
      fontSize: '15px',
      fontWeight: 600,
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pink-300)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.62)'
  }, it.t))))), React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      padding: '20px clamp(20px,5vw,48px)',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      color: 'rgba(255,255,255,0.5)',
      fontSize: '14px'
    }
  }, React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 16px',
      alignItems: 'center'
    }
  }, React.createElement("span", null, "\xA9 ", founded ? founded + '–' + year : year, " Color Baby House"), React.createElement("a", {
    href: asset('privacy.html'),
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 600,
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pink-300)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), React.createElement("a", {
    href: asset('consent.html'),
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 600,
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pink-300)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
  }, "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445")), React.createElement("span", null, CFG.ADDRESS, " \xB7 \u041F\u043D\u2013\u041F\u0442 8:00\u201318:00")));
}
window.Footer = Footer;