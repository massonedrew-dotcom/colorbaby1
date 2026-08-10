function Testimonials() {
  const {
    SectionHeading,
    Card,
    Avatar,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic
  } = window;
  const reviews = [{
    name: 'Дилноза',
    role: 'мама Амира, 4 года',
    color: 'pink',
    stars: 5,
    text: 'Сын идёт в садик с радостью и не хочет уходить вечером! Каждый день фото и отчёт в Telegram — я всегда спокойна за малыша. ✨'
  }, {
    name: 'Шахзод',
    role: 'папа Зухры, 3 года',
    color: 'sky',
    stars: 5,
    text: 'Дочка заговорила на английском первыми словами уже через пару месяцев. Педагоги внимательные, тёплая домашняя атмосфера.'
  }, {
    name: 'Гулнора',
    role: 'мама Тимура, 5 лет',
    color: 'mint',
    stars: 5,
    text: 'Очень нравится разнообразие занятий — шахматы, танцы, робототехника. Ребёнок развивается и при этом счастлив. Спасибо вам! 💛'
  }, {
    name: 'Бекзод',
    role: 'папа Малики, 2 года',
    color: 'orange',
    stars: 5,
    text: 'Искали садик с заботой для самых маленьких — и нашли. Пятиразовое питание, маленькие группы, всё как дома.'
  }, {
    name: 'Нилуфар',
    role: 'мама Сардора, 6 лет',
    color: 'purple',
    stars: 5,
    text: 'Логопед помог сыну с речью буквально за курс. Видно, что к каждому ребёнку индивидуальный подход. Рекомендую от души!'
  }, {
    name: 'Жасур',
    role: 'папа Камилы, 4 года',
    color: 'sky',
    stars: 5,
    text: 'Дочка обожает утреннюю гимнастику и прогулки. Приятно видеть её улыбку каждый вечер. Лучший садик в районе! ☀️'
  }];
  const Stars = ({
    n
  }) => React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '2px',
      color: 'var(--yellow-400)'
    }
  }, Array.from({
    length: 5
  }).map((_, i) => React.createElement(Ic, {
    key: i,
    n: "star",
    size: 16,
    style: {
      fill: i < n ? 'var(--yellow-400)' : 'transparent'
    }
  })));
  return React.createElement("section", {
    id: "reviews",
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
    eyebrow: "\u041E\u0442\u0437\u044B\u0432\u044B",
    title: "\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0438",
    gradient: true
  }, "\u041D\u0430\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442 \u0441\u0430\u043C\u043E\u0435 \u0434\u043E\u0440\u043E\u0433\u043E\u0435 \u2014 \u0438 \u044D\u0442\u043E \u043B\u0443\u0447\u0448\u0430\u044F \u043D\u0430\u0433\u0440\u0430\u0434\u0430. \u0412\u043E\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0442\u0451\u043F\u043B\u044B\u0445 \u0441\u043B\u043E\u0432 \u043E\u0442 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u043C\u0435\u0439."), React.createElement("div", {
    className: "cs-reviews-grid cs-stagger cs-cards",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      margin: '40px 0 0'
    }
  }, reviews.map(r => React.createElement(Card, {
    key: r.name,
    bordered: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      padding: '24px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement(Stars, {
    n: r.stars
  }), React.createElement(Ic, {
    n: "quote",
    size: 22,
    style: {
      color: 'var(--pink-200)'
    }
  })), React.createElement("p", {
    style: {
      font: 'var(--font-body-r)',
      color: 'var(--ink-700)',
      lineHeight: 1.6,
      margin: 0,
      flex: 1
    }
  }, r.text), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: '4px'
    }
  }, React.createElement(Avatar, {
    name: r.name,
    color: r.color,
    size: "md"
  }), React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      color: 'var(--ink-900)',
      display: 'block'
    }
  }, r.name), React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--color-text-muted)',
      fontWeight: 600
    }
  }, r.role)))))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '32px'
    }
  }, React.createElement(Badge, {
    color: "success",
    variant: "soft",
    size: "lg",
    iconLeft: React.createElement(Ic, {
      n: "heart",
      size: 16
    })
  }, "\u0411\u043E\u043B\u0435\u0435 200 \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u0445 \u0441\u0435\u043C\u0435\u0439 \u0441 \u043D\u0430\u043C\u0438"))));
}
window.Testimonials = Testimonials;