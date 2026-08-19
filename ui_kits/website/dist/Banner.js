function Banner() {
  const {
    Ic,
    SunMark,
    scrollToId,
    goal,
    CFG
  } = window;
  const activities = ['Английский язык', 'Танцы', 'Тхэквондо', 'Актёрское мастерство', 'Рисование', 'Шахматы', 'Логопед-дефектолог', 'Массаж', 'Мастер-классы', 'Развивающие игры', 'Робототехника'];
  const chips = [{
    bg: 'var(--pink-50)',
    fg: 'var(--on-pink-tint)'
  }, {
    bg: 'var(--yellow-50)',
    fg: 'var(--on-yellow-tint)'
  }, {
    bg: 'var(--sky-50)',
    fg: 'var(--on-cyan-tint)'
  }, {
    bg: 'var(--purple-50)',
    fg: 'var(--on-blue-tint)'
  }];
  return React.createElement("section", {
    "aria-label": "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C",
    className: "cs-banner",
    style: {
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(20px,3vw,32px) clamp(20px,5vw,48px) 0'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(6px)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-md)',
      padding: 'clamp(32px,4vw,52px) clamp(24px,4vw,48px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      textAlign: 'center'
    }
  }, React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '8px',
      background: 'linear-gradient(90deg, var(--pink-400) 0 25%, var(--yellow-400) 25% 50%, var(--sky-400) 50% 75%, var(--purple-500) 75% 100%)'
    }
  }), React.createElement(SunMark, {
    size: 168,
    className: "cs-sun-spin cs-banner-mark",
    alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F Color Baby House"
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      minWidth: 0,
      width: '100%'
    }
  }, React.createElement("span", {
    style: {
      font: 'var(--font-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--color-primary-text)'
    }
  }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0434\u0435\u0442\u0441\u043A\u0438\u0439 \u0441\u0430\u0434"), React.createElement("span", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 'clamp(30px,5vw,52px)',
      lineHeight: 1.05
    }
  }, React.createElement("span", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "COLOR "), React.createElement("span", {
    className: "cs-gradient-text"
  }, "BABY HOUSE")), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '8px'
    }
  }, activities.map((a, i) => {
    const c = chips[i % chips.length];
    return (React.createElement("span", {
        key: a,
        className: "cs-plate",
        style: {
          background: c.bg,
          color: c.fg,
          borderRadius: 'var(--radius-pill)',
          padding: '6px 13px',
          fontSize: '14px',
          fontWeight: 800,
          whiteSpace: 'nowrap'
        }
      }, a)
    );
  })), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px 22px',
      marginTop: '4px'
    }
  }, React.createElement("a", {
    href: 'tel:' + CFG.PHONE_PRIMARY,
    onClick: () => goal('click_phone'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 800,
      color: 'var(--ink-900)',
      textDecoration: 'none'
    }
  }, React.createElement(Ic, {
    n: "phone",
    size: 17,
    color: "var(--color-primary)"
  }), " +998 90 176 69 99"), React.createElement("a", {
    href: 'tel:' + CFG.PHONE_SECONDARY,
    onClick: () => goal('click_phone'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 800,
      color: 'var(--ink-900)',
      textDecoration: 'none'
    }
  }, React.createElement(Ic, {
    n: "phone",
    size: 17,
    color: "var(--sky-500)"
  }), " +998 94 671 26 26"), React.createElement("a", {
    href: "#enroll",
    onClick: e => {
      e.preventDefault();
      goal('click_enroll_banner');
      scrollToId && scrollToId('enroll');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontWeight: 800,
      color: 'var(--color-primary-text)',
      textDecoration: 'none'
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F ", React.createElement(Ic, {
    n: "arrow-right",
    size: 16
  })))))));
}
window.Banner = Banner;