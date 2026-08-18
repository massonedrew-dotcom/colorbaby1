function Summer() {
  const {
    SectionHeading,
    Button,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    Photo,
    scrollToId
  } = window;
  const points = [{
    i: 'waves',
    t: 'Бассейн и купальный сезон'
  }, {
    i: 'sun',
    t: 'Игры и прогулки на свежем воздухе'
  }, {
    i: 'palette',
    t: 'Творческие мастер-классы'
  }, {
    i: 'utensils',
    t: 'Пятиразовое питание'
  }];
  return React.createElement("section", {
    id: "summer",
    style: {
      padding: 'var(--section-y) 0',
      background: 'linear-gradient(180deg, var(--pink-50), var(--pink-100))',
      scrollMarginTop: '92px'
    }
  }, React.createElement("div", {
    className: "cs-summer-grid",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center'
    }
  }, React.createElement("div", {
    className: "cs-reveal-left",
    style: {
      position: 'relative'
    }
  }, React.createElement(Photo, {
    src: "assets/photos/summer-pool.jpg",
    alt: "\u041B\u0435\u0442\u043D\u0438\u0439 \u0441\u0435\u0437\u043E\u043D \u0441 \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u043E\u043C \u0432 \u0441\u0430\u0434\u0438\u043A\u0435 Color Baby House",
    objectPosition: "center 30%",
    style: {
      height: '420px',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-lg)',
      border: '6px solid #fff'
    }
  }), React.createElement(Badge, {
    color: "sun",
    variant: "solid",
    size: "lg",
    iconLeft: React.createElement(Ic, {
      n: "sun",
      size: 16
    }),
    style: {
      position: 'absolute',
      top: '16px',
      left: '16px',
      boxShadow: 'var(--shadow-md)'
    }
  }, "\u041B\u0435\u0442\u043D\u0438\u0439 \u0441\u0435\u0437\u043E\u043D")), React.createElement("div", {
    className: "cs-reveal-right",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "\u041B\u0435\u0442\u043E \u0432 Color Baby House",
    title: "\u041B\u0435\u0442\u043D\u0438\u0439 \u043B\u0430\u0433\u0435\u0440\u044C \u0441 \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u043E\u043C"
  }, "\u041B\u0435\u0442\u043E\u043C \u043C\u0430\u043B\u044B\u0448\u0435\u0439 \u0436\u0434\u0451\u0442 \u043E\u0441\u043E\u0431\u044B\u0439 \u0441\u0435\u0437\u043E\u043D: \u043A\u0443\u043F\u0430\u043D\u0438\u0435 \u0432 \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0435, \u0438\u0433\u0440\u044B \u043D\u0430 \u0441\u0432\u0435\u0436\u0435\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0435, \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C. \u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C! \u2600\uFE0F"), React.createElement("div", {
    className: "cs-stagger",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }
  }, points.map(p => React.createElement("div", {
    key: p.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--sky-100)',
      color: 'var(--on-cyan-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: p.i,
    size: 20
  })), React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      color: 'var(--ink-900)',
      lineHeight: 1.3
    }
  }, p.t)))), React.createElement("div", {
    className: "cs-cta"
  }, React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: React.createElement(Ic, {
      n: "calendar-heart",
      size: 20
    }),
    onClick: () => scrollToId && scrollToId('enroll')
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0430\u0433\u0435\u0440\u044C")))));
}
window.Summer = Summer;