function Care() {
  const {
    SectionHeading
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    Photo
  } = window;
  const points = [{
    i: 'heart-handshake',
    t: 'Индивидуальный подход',
    d: 'Внимание к особенностям и темпу каждого ребёнка.'
  }, {
    i: 'graduation-cap',
    t: 'Подготовка к школе',
    d: 'Комплексная программа развития и обучения.'
  }, {
    i: 'users',
    t: 'Опытные педагоги',
    d: '10 квалифицированных педагогов и специалистов.'
  }, {
    i: 'shield-check',
    t: 'Безопасная среда',
    d: 'Комфортные и безопасные условия для детей.'
  }, {
    i: 'utensils',
    t: '5-разовое питание',
    d: 'Полноценное сбалансированное меню каждый день.'
  }, {
    i: 'clock',
    t: 'Чёткий режим дня',
    d: 'Занятия, прогулки, сон и отдых — всё вовремя.'
  }];
  const stats = [{
    n: '20 лет',
    t: 'опыта работы',
    count: 20,
    suffix: ' лет'
  }, {
    n: '10',
    t: 'педагогов и специалистов',
    count: 10
  }, {
    n: '1–7 лет',
    t: 'принимаем малышей'
  }];
  return React.createElement("section", {
    id: "about",
    style: {
      padding: 'var(--section-y) 0',
      scrollMarginTop: '92px'
    }
  }, React.createElement("div", {
    className: "cs-care-grid",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, React.createElement("div", {
    className: "cs-reveal-left",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px'
    }
  }, React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "\u041E \u0441\u0430\u0434\u0438\u043A\u0435",
    title: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 Color Baby House"
  }, "\u0427\u0430\u0441\u0442\u043D\u044B\u0439 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u0430\u0434\u0438\u043A \u0432 \u0422\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0434\u043B\u044F \u0434\u0435\u0442\u0435\u0439 \u043E\u0442 1 \u0434\u043E 7 \u043B\u0435\u0442 \u2014 \u043E\u0442 \u0440\u0430\u043D\u043D\u0435\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430 \u0434\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043A \u0448\u043A\u043E\u043B\u0435. \u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0438, \u0440\u0430\u0437\u0432\u0438\u0442\u044C \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0441\u0435\u0431\u0435 \u0438 \u043B\u044E\u0431\u043E\u0432\u044C \u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E."), React.createElement("div", {
    className: "cs-cards",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px'
    }
  }, stats.map(s => React.createElement("div", {
    key: s.n,
    style: {
      flex: '1 1 120px',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement("b", {
    "data-cs-count": s.count,
    "data-cs-suffix": s.suffix,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '26px',
      color: 'var(--color-primary-text)',
      display: 'block',
      lineHeight: 1.1
    }
  }, s.n), React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--color-text-muted)',
      fontWeight: 600
    }
  }, s.t)))), React.createElement("div", {
    className: "cs-care-points cs-stagger",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  }, points.map(p => React.createElement("div", {
    key: p.t,
    style: {
      display: 'flex',
      gap: '14px'
    }
  }, React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--plate-soft, #FFF1B8)',
      color: 'var(--el-blue, #10559B)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: p.i,
    size: 22
  })), React.createElement("div", null, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      display: 'block',
      marginBottom: '3px'
    }
  }, p.t), React.createElement("span", {
    style: {
      fontSize: '14px',
      color: 'var(--color-text-muted)',
      lineHeight: 1.5
    }
  }, p.d)))))), React.createElement(Photo, {
    src: "assets/photos/kids-reading.jpg",
    alt: "\u0414\u0435\u0442\u0438 \u0432 \u0441\u0430\u0434\u0438\u043A\u0435 Color Baby House \u2014 \u043F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430\u0441",
    className: "cs-reveal-right",
    style: {
      height: '560px',
      objectFit: 'contain',
      background: 'linear-gradient(180deg, #FEEDF5 0%, #E7F8FB 100%)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '6px solid #fff'
    }
  })));
}
window.Care = Care;