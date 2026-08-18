function Hero({
  direction = 'sunshine'
}) {
  const {
    Button,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    Photo,
    Blob,
    scrollToId
  } = window;
  const trust = [{
    icon: 'cake',
    t: 'от 1 до 7 лет'
  }, {
    icon: 'utensils',
    t: '5-разовое питание'
  }, {
    icon: 'send',
    t: 'отчёт в Telegram'
  }];
  const ctas = React.createElement("div", {
    className: "cs-cta",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px'
    }
  }, React.createElement(Button, {
    variant: "sun",
    size: "lg",
    iconRight: React.createElement(Ic, {
      n: "arrow-right",
      size: 20
    }),
    onClick: () => scrollToId('enroll')
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"), React.createElement(Button, {
    variant: "soft",
    size: "lg",
    iconLeft: React.createElement(Ic, {
      n: "sparkles",
      size: 18
    }),
    onClick: () => scrollToId('programs')
  }, "\u041D\u0430\u0448\u0438 \u0437\u0430\u043D\u044F\u0442\u0438\u044F"));
  if (direction === 'sunshine') {
    return React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      className: "cs-parallax",
      "data-cs-speed": "0.12",
      style: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 76% 30%, var(--pink-100) 0%, transparent 42%)',
        pointerEvents: 'none'
      }
    }), React.createElement(Blob, {
      color: "var(--pink-200)",
      size: 260,
      className: "cs-float-slow",
      style: {
        left: '-60px',
        bottom: '-40px'
      }
    }), React.createElement(Blob, {
      color: "var(--yellow-100)",
      size: 200,
      className: "cs-float cs-float-lag",
      style: {
        right: '-40px',
        top: '-60px'
      }
    }), React.createElement("div", {
      className: "cs-hero-grid",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'clamp(48px,7vw,96px) clamp(20px,5vw,48px)',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: '48px',
        alignItems: 'center',
        position: 'relative'
      }
    }, React.createElement("div", {
      className: "cs-enter",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }
    }, React.createElement("span", {
      className: "cs-overline"
    }, "\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u0430\u0434\u0438\u043A \xB7 1\u20137 \u043B\u0435\u0442"), React.createElement("h1", {
      className: "cs-headline",
      style: {
        font: 'var(--font-h1)',
        fontSize: 'clamp(40px,5.4vw,72px)',
        margin: 0
      }
    }, ['Место,', 'где', 'детям'].map((w, i) => React.createElement("span", {
      key: w,
      className: "cs-word",
      style: {
        '--i': i
      }
    }, w, "\xA0")), React.createElement("br", null), React.createElement("span", {
      className: "cs-word",
      style: {
        '--i': 3
      }
    }, React.createElement("span", {
      className: "cs-gradient-text"
    }, "\u0445\u043E\u0447\u0435\u0442\u0441\u044F \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F"))), React.createElement("p", {
      style: {
        font: 'var(--font-lead)',
        fontSize: '20px',
        color: 'var(--color-text-muted)',
        maxWidth: '480px'
      }
    }, "\u0422\u0451\u043F\u043B\u0430\u044F \u0434\u043E\u043C\u0430\u0448\u043D\u044F\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430, \u0437\u0430\u0431\u043E\u0442\u043B\u0438\u0432\u044B\u0435 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438 \u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u0447\u0442\u043E-\u0442\u043E \u043D\u043E\u0432\u043E\u0435. \u041C\u044B \u0440\u0430\u0434\u044B \u043F\u043E\u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0441 \u0432 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0434\u0438\u043A\u0435. \u2728"), ctas, React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '4px'
      }
    }, trust.map(x => React.createElement(Badge, {
      key: x.t,
      color: "neutral",
      iconLeft: React.createElement(Ic, {
        n: x.icon,
        size: 15
      }),
      size: "lg"
    }, x.t)))), React.createElement("div", {
      className: "cs-enter-photo",
      style: {
        position: 'relative'
      }
    }, React.createElement(Photo, {
      src: "assets/photos/playroom.jpg",
      alt: "\u0418\u0433\u0440\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430 \u0441\u0430\u0434\u0438\u043A\u0430 Color Baby House",
      eager: true,
      style: {
        height: '460px',
        boxShadow: 'var(--shadow-lg)',
        border: '6px solid #fff'
      }
    }), React.createElement("div", {
      className: "cs-enter-pop",
      style: {
        position: 'absolute',
        bottom: '-22px',
        left: '-22px',
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '14px 18px',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }
    }, React.createElement("span", {
      className: "cs-heartbeat",
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--mint-100)',
        color: 'var(--on-mint-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Ic, {
      n: "heart",
      size: 22
    })), React.createElement("span", {
      style: {
        lineHeight: 1.2
      }
    }, React.createElement("b", {
      "data-cs-count": "200",
      "data-cs-suffix": "+",
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '20px'
      }
    }, "200+"), React.createElement("span", {
      style: {
        display: 'block',
        fontSize: '13px',
        color: 'var(--color-text-muted)',
        fontWeight: 600
      }
    }, "\u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u0445 \u043C\u0430\u043B\u044B\u0448\u0435\u0439"))))));
  }
  if (direction === 'tiles') {
    const tiles = [{
      t: 'Танцы',
      c: 'pink',
      i: 'music'
    }, {
      t: 'Английский',
      c: 'sky',
      i: 'languages'
    }, {
      t: 'Робототехника',
      c: 'mint',
      i: 'bot'
    }, {
      t: 'Шахматы',
      c: 'purple',
      i: 'crown'
    }];
    const tints = {
      pink: 'var(--pink-100)',
      sky: 'var(--sky-100)',
      mint: 'var(--mint-100)',
      purple: 'var(--purple-100)'
    };
    const inks = {
      pink: 'var(--on-pink-100)',
      sky: 'var(--on-cyan-100)',
      mint: 'var(--on-mint-100)',
      purple: 'var(--on-blue-100)'
    };
    return React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--cream), var(--pink-50))'
      }
    }, React.createElement("div", {
      className: "cs-hero-grid",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'clamp(48px,7vw,88px) clamp(20px,5vw,48px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '22px'
      }
    }, React.createElement(Badge, {
      color: "sun",
      size: "lg",
      iconLeft: React.createElement(Ic, {
        n: "sparkles",
        size: 16
      })
    }, "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434 \u043E\u0442\u043A\u0440\u044B\u0442\u0430"), React.createElement("h1", {
      style: {
        font: 'var(--font-h1)',
        fontSize: 'clamp(40px,5.2vw,68px)',
        margin: 0
      }
    }, "\u0414\u0435\u0442\u0441\u0442\u0432\u043E", React.createElement("br", null), "\u0432 \u044F\u0440\u043A\u0438\u0445", React.createElement("br", null), React.createElement("span", {
      className: "cs-gradient-text"
    }, "\u043A\u0440\u0430\u0441\u043A\u0430\u0445")), React.createElement("p", {
      style: {
        font: 'var(--font-lead)',
        fontSize: '19px',
        color: 'var(--color-text-muted)',
        maxWidth: '440px'
      }
    }, "\u0414\u0435\u0432\u044F\u0442\u044C \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439, \u0437\u0430\u0431\u043E\u0442\u0430 \u0438 \u043F\u044F\u0442\u0438\u0440\u0430\u0437\u043E\u0432\u043E\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u2014 \u0434\u043B\u044F \u043C\u0430\u043B\u044B\u0448\u0435\u0439 \u043E\u0442 1 \u0434\u043E 7 \u043B\u0435\u0442."), ctas), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '18px'
      }
    }, React.createElement(Photo, {
      caption: "\u0418\u0433\u0440\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430",
      icon: "image",
      tint: "pink",
      style: {
        height: '210px',
        gridColumn: '1 / -1',
        boxShadow: 'var(--shadow-md)'
      }
    }), tiles.map(x => React.createElement("div", {
      key: x.t,
      style: {
        background: tints[x.c],
        borderRadius: 'var(--radius-lg)',
        padding: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minHeight: '120px',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-sm)'
      }
    }, React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: '#fff',
        color: inks[x.c],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Ic, {
      n: x.i,
      size: 22
    })), React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '18px',
        color: 'var(--ink-900)'
      }
    }, x.t))))));
  }
  return React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,48px)'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, React.createElement(Photo, {
    caption: "\u0422\u0451\u043F\u043B\u0430\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0434\u0438\u043A\u0430",
    icon: "image",
    tint: "sky",
    style: {
      height: '520px',
      borderRadius: 0
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(29,43,76,0.62) 0%, rgba(29,43,76,0.18) 55%, transparent 80%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'clamp(24px,5vw,64px)',
      top: '50%',
      transform: 'translateY(-50%)',
      maxWidth: '520px',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
      color: '#fff'
    }
  }, React.createElement("span", {
    style: {
      font: 'var(--font-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--yellow-300)'
    }
  }, "\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441\u0430\u0434\u0438\u043A \xB7 1\u20137 \u043B\u0435\u0442"), React.createElement("h1", {
    style: {
      font: 'var(--font-h1)',
      fontSize: 'clamp(36px,4.6vw,60px)',
      color: '#fff',
      margin: 0
    }
  }, "\u0421\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0437\u0430\xA0\u0440\u0435\u0431\u0451\u043D\u043A\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C."), React.createElement("p", {
    style: {
      font: 'var(--font-lead)',
      fontSize: '19px',
      color: 'rgba(255,255,255,0.92)'
    }
  }, "\u0417\u0430\u0431\u043E\u0442\u0430, \u0442\u0451\u043F\u043B\u0430\u044F \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430 \u0438 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 \u0432 Telegram \u2014 \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u043D\u0430\u043B\u0438, \u043A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0434\u0435\u043D\u044C \u043C\u0430\u043B\u044B\u0448\u0430."), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px'
    }
  }, React.createElement(Button, {
    variant: "sun",
    size: "lg",
    iconRight: React.createElement(Ic, {
      n: "arrow-right",
      size: 20
    }),
    onClick: () => scrollToId('enroll')
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"), React.createElement(Button, {
    variant: "soft",
    size: "lg",
    onClick: () => scrollToId('pricing')
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u043E \u0446\u0435\u043D\u0430\u0445"))))));
}
window.Hero = Hero;