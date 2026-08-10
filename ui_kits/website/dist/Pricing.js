function Pricing() {
  const {
    SectionHeading,
    Button,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    scrollToId
  } = window;
  const plans = [{
    name: 'Разовое посещение',
    price: '250 000',
    period: 'сум / день',
    desc: 'Полный день без абонемента.',
    color: 'sky',
    featured: false,
    feats: ['Пребывание 08:00–18:00', '5-разовое питание', 'Развивающие занятия', 'Прогулки и игры']
  }, {
    name: 'Полный день',
    price: '4 200 000',
    period: 'сум / мес',
    desc: 'Пятидневка, 08:00–18:00. Цена за одного ребёнка.',
    color: 'pink',
    featured: true,
    feats: ['Присмотр и уход', '5-разовое питание', 'Развивающие занятия', 'Учебные материалы', 'Прогулки и досуг', 'Подготовка к школе']
  }, {
    name: 'Суббота',
    price: '200 000',
    period: 'сум / день',
    desc: 'Дополнительный день по желанию.',
    color: 'mint',
    featured: false,
    feats: ['Пребывание в субботу', '5-разовое питание', 'Занятия и творчество', 'Присмотр и забота']
  }];
  const accent = {
    pink: {
      soft: 'var(--pink-100)',
      ink: 'var(--on-pink-100)'
    },
    sky: {
      soft: 'var(--sky-100)',
      ink: 'var(--on-cyan-100)'
    },
    mint: {
      soft: 'var(--mint-100)',
      ink: 'var(--on-mint-100)'
    }
  };
  return React.createElement("section", {
    id: "pricing",
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
    eyebrow: "\u0426\u0435\u043D\u044B",
    title: "\u041F\u043E\u043D\u044F\u0442\u043D\u044B\u0435 \u0442\u0430\u0440\u0438\u0444\u044B \u0431\u0435\u0437 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439",
    gradient: true
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u2014 \u0430 \u043C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u043C\u0430\u043B\u044B\u0448\u0443 \u0440\u0430\u0441\u0442\u0438 \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u043C."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      margin: '44px auto 0',
      maxWidth: '980px',
      alignItems: 'stretch'
    },
    className: "cs-pricing-grid cs-stagger"
  }, plans.map(p => {
    const a = accent[p.color] || accent.pink;
    return (React.createElement("div", {
        key: p.name,
        className: `cs-card${p.featured ? ' cs-card-featured' : ''}`,
        style: {
          position: 'relative',
          background: 'var(--color-surface)',
          border: p.featured ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '28px 26px',
          boxShadow: p.featured ? 'var(--shadow-pink)' : 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }
      }, p.featured && React.createElement(Badge, {
        color: "primary",
        variant: "solid",
        size: "sm",
        iconLeft: React.createElement(Ic, {
          n: "sparkles",
          size: 13
        }),
        style: {
          position: 'absolute',
          top: '-13px',
          left: '50%',
          transform: 'translateX(-50%)'
        }
      }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440"), React.createElement("div", null, React.createElement("h3", {
        style: {
          font: 'var(--font-h4)',
          fontSize: '22px',
          margin: '0 0 4px'
        }
      }, p.name), React.createElement("span", {
        style: {
          fontSize: '14px',
          color: 'var(--color-text-muted)'
        }
      }, p.desc)), React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          gap: '6px'
        }
      }, React.createElement("b", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '38px',
          color: 'var(--ink-900)'
        }
      }, p.price), React.createElement("span", {
        style: {
          fontSize: '15px',
          color: 'var(--color-text-muted)',
          fontWeight: 700
        }
      }, p.period)), React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }
      }, p.feats.map(f => React.createElement("span", {
        key: f,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '15px',
          color: 'var(--ink-700)'
        }
      }, React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          flex: 'none',
          borderRadius: '50%',
          background: a.soft,
          color: a.ink,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, React.createElement(Ic, {
        n: "check",
        size: 14
      })), f))), React.createElement("div", {
        className: "cs-cta",
        style: {
          marginTop: 'auto'
        }
      }, React.createElement(Button, {
        variant: p.featured ? 'primary' : 'outline',
        size: "md",
        block: true,
        iconRight: React.createElement(Ic, {
          n: "arrow-right",
          size: 18
        }),
        onClick: () => scrollToId && scrollToId('enroll')
      }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")))
    );
  })), React.createElement("div", {
    className: "cs-pricing-note",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      margin: '40px auto 0',
      maxWidth: '980px'
    }
  }, React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      padding: '24px 26px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '14px'
    }
  }, React.createElement(Ic, {
    n: "check-circle",
    size: 20,
    color: "var(--on-mint-100)"
  }), " \u0412 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u0445\u043E\u0434\u0438\u0442"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '9px'
    }
  }, ['Присмотр и уход', 'Развивающие занятия', 'Пятиразовое питание', 'Учебные материалы', 'Прогулки и досуговые мероприятия', 'Подготовка к школе'].map(f => React.createElement("span", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '15px',
      color: 'var(--ink-700)'
    }
  }, React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--mint-50)',
      color: 'var(--on-mint-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "check",
    size: 13
  })), f)))), React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      padding: '24px 26px',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '14px'
    }
  }, React.createElement(Ic, {
    n: "plus-circle",
    size: 20,
    color: "var(--on-gold-100)"
  }), " \u041E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '9px'
    }
  }, ['Индивидуальные занятия с логопедом', 'Специализированный массаж', '«Почемучка»'].map(f => React.createElement("span", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '15px',
      color: 'var(--ink-700)'
    }
  }, React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--orange-50)',
      color: 'var(--on-gold-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "plus",
    size: 13
  })), f))), React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '16px'
    }
  }, React.createElement(Badge, {
    color: "success",
    variant: "soft",
    size: "lg",
    iconLeft: React.createElement(Ic, {
      n: "gift",
      size: 16
    })
  }, "\u0421\u043A\u0438\u0434\u043A\u0430 \u043D\u0430 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0440\u0435\u0431\u0451\u043D\u043A\u0430 \u2014 5%")))), React.createElement("div", {
    style: {
      margin: '24px auto 0',
      maxWidth: '980px',
      background: 'var(--gradient-sunrise)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'clamp(24px,3vw,36px)',
      boxShadow: 'var(--shadow-sm)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: '28px',
      alignItems: 'center'
    },
    className: "cs-nanny-grid"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, React.createElement(Badge, {
    color: "primary",
    variant: "solid",
    size: "lg",
    style: {
      alignSelf: 'flex-start'
    },
    iconLeft: React.createElement(Ic, {
      n: "baby",
      size: 16
    })
  }, "\u041D\u044F\u043D\u044F-\u0446\u0435\u043D\u0442\u0440"), React.createElement("h3", {
    style: {
      font: 'var(--font-h4)',
      fontSize: '24px',
      margin: 0
    }
  }, "\u041A\u0440\u0430\u0442\u043A\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0435\u0431\u044B\u0432\u0430\u043D\u0438\u0435"), React.createElement("p", {
    style: {
      font: 'var(--font-body-r)',
      color: 'var(--ink-700)',
      margin: 0,
      maxWidth: '520px'
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043C\u0430\u043B\u044B\u0448\u0430 \u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043F\u043E\u0434 \u043F\u0440\u0438\u0441\u043C\u043E\u0442\u0440\u043E\u043C \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439 \u2014 \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043D\u044F. \u0412 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0432\u0445\u043E\u0434\u044F\u0442 \u0438\u0433\u0440\u044B, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F, \u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0438 \u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u0435 (\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u0440\u0435\u0431\u044B\u0432\u0430\u043D\u0438\u044F). \u0424\u043E\u0440\u043C\u0430\u0442 \u2014 \u0440\u0430\u0437\u043E\u0432\u043E\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435.")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'flex-start'
    }
  }, [{
    i: 'gamepad-2',
    t: 'Игры и развивающие занятия'
  }, {
    i: 'sun',
    t: 'Прогулки на свежем воздухе'
  }, {
    i: 'utensils',
    t: 'Питание по времени пребывания'
  }].map(x => React.createElement("span", {
    key: x.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--ink-700)'
    }
  }, React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flex: 'none',
      borderRadius: '50%',
      background: '#fff',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement(Ic, {
    n: x.i,
    size: 17
  })), x.t)), React.createElement(Button, {
    variant: "primary",
    size: "md",
    iconRight: React.createElement(Ic, {
      n: "arrow-right",
      size: 18
    }),
    onClick: () => scrollToId && scrollToId('enroll'),
    style: {
      marginTop: '6px'
    }
  }, "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"))), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '24px',
      fontSize: '14px',
      color: 'var(--color-text-subtle)'
    }
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E\u043C\u0435\u0441\u044F\u0447\u043D\u043E. \u0422\u043E\u0447\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430 \u0443\u0442\u043E\u0447\u043D\u0438\u043C \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443. \uD83D\uDC9B")));
}
window.Pricing = Pricing;