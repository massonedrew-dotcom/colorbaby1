function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Programs() {
  const {
    SectionHeading,
    Tag,
    Badge
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    imgProps
  } = window;
  const [filter, setFilter] = React.useState('Все');
  const cats = [{
    name: 'Все',
    dot: 'var(--ink-700)'
  }, {
    name: 'Речь и язык',
    dot: 'var(--cat-english)'
  }, {
    name: 'Движение',
    dot: 'var(--cat-dance)'
  }, {
    name: 'Творчество',
    dot: 'var(--cat-acting)'
  }, {
    name: 'Логика',
    dot: 'var(--cat-chess)'
  }];
  const programs = [{
    t: 'Английский язык',
    d: 'Разговорные навыки и знакомство с языком через игры и общение.',
    i: 'languages',
    c: 'sky',
    g: 'Речь и язык',
    img: 'assets/photos/english.jpg',
    pos: 'center 35%',
    age: 'от 3 лет',
    freq: '2–3 раза в неделю',
    cost: 'included'
  }, {
    t: 'Подготовка к школе',
    d: 'Чтение, письмо, логика и математические навыки.',
    i: 'graduation-cap',
    c: 'sun',
    g: 'Речь и язык',
    img: 'assets/photos/kids-reading.jpg',
    pos: 'center 40%',
    age: '5–7 лет',
    freq: 'ежедневно',
    cost: 'included'
  }, {
    t: 'Логопед-дефектолог',
    d: 'Коррекция речи и развитие речевых навыков.',
    i: 'mic',
    c: 'purple',
    g: 'Речь и язык',
    img: 'assets/photos/speech.jpg',
    pos: 'center 50%',
    age: 'по рекомендации',
    freq: 'индивидуально',
    cost: 'extra'
  }, {
    t: 'Танцы',
    d: 'Координация, чувство ритма и пластика.',
    i: 'music',
    c: 'pink',
    g: 'Движение',
    img: 'assets/photos/dance.jpg',
    pos: 'center 55%',
    age: 'от 3 лет',
    freq: '2 раза в неделю',
    cost: 'included'
  }, {
    t: 'Тхэквондо',
    d: 'Дисциплина, сила и уверенность в себе.',
    i: 'swords',
    c: 'sky',
    g: 'Движение',
    img: 'assets/photos/taekwondo.jpg',
    pos: 'center 38%'
  }, {
    t: 'Гимнастика',
    d: 'Здоровье, гибкость и координация.',
    i: 'activity',
    c: 'mint',
    g: 'Движение',
    img: 'assets/photos/gymnastics.jpg',
    pos: 'center 52%',
    age: 'от 2 лет',
    cost: 'included'
  }, {
    t: 'ЛФК',
    d: 'Лечебная физкультура: укрепляем мышцы и опорно-двигательный аппарат, формируем правильную осанку — в игровой и комфортной форме.',
    i: 'heart-pulse',
    c: 'purple',
    g: 'Движение',
    age: 'от 2 лет',
    freq: '2 раза в неделю',
    cost: 'included'
  }, {
    t: 'Массаж',
    d: 'Оздоровительный курс для укрепления здоровья.',
    i: 'heart-handshake',
    c: 'purple',
    g: 'Движение',
    img: 'assets/photos/massage.jpg',
    pos: 'center 50%',
    age: 'от 1 года',
    cost: 'included'
  }, {
    t: 'Актёрское мастерство',
    d: 'Сцена, эмоции и уверенность в себе.',
    i: 'drama',
    c: 'orange',
    g: 'Творчество',
    img: 'assets/photos/acting.jpg',
    pos: 'center 40%'
  }, {
    t: 'Рисование',
    d: 'Краски, фантазия и мелкая моторика.',
    i: 'palette',
    c: 'sun',
    g: 'Творчество',
    img: 'assets/photos/drawing.jpg',
    pos: 'center 35%'
  }, {
    t: 'Развивающие игры',
    d: 'Каждый день — новое маленькое открытие.',
    i: 'puzzle',
    c: 'pink',
    g: 'Творчество',
    img: 'assets/photos/games.jpg',
    pos: 'center 35%'
  }, {
    t: 'Мастер-классы',
    d: 'Творческие занятия и новые умения.',
    i: 'sparkles',
    c: 'mint',
    g: 'Творчество',
    img: 'assets/photos/crafts.jpg',
    pos: 'center 50%'
  }, {
    t: 'Шахматы',
    d: 'Логическое мышление и концентрация.',
    i: 'crown',
    c: 'purple',
    g: 'Логика',
    img: 'assets/photos/chess.jpg',
    pos: 'center 30%',
    age: 'от 5 лет',
    freq: '1–2 раза в неделю',
    cost: 'clarify'
  }, {
    t: 'Робототехника',
    d: 'Конструирование и основы технического мышления.',
    i: 'bot',
    c: 'sky',
    g: 'Логика',
    img: 'assets/photos/robotics.jpg',
    pos: 'center 40%',
    age: 'от 5 лет',
    freq: '1–2 раза в неделю',
    cost: 'clarify'
  }];
  const costMeta = {
    included: {
      label: 'Входит в стоимость',
      color: 'success'
    },
    extra: {
      label: 'Оплачивается отдельно',
      color: 'secondary'
    },
    clarify: {
      label: 'Уточняется',
      color: 'neutral'
    }
  };
  const tile = {
    pink: {
      a: 'var(--pink-100)',
      b: 'var(--pink-50)',
      fg: 'var(--on-pink-100)'
    },
    sky: {
      a: 'var(--sky-100)',
      b: 'var(--sky-50)',
      fg: 'var(--on-cyan-100)'
    },
    mint: {
      a: 'var(--mint-100)',
      b: 'var(--mint-50)',
      fg: 'var(--on-mint-100)'
    },
    sun: {
      a: 'var(--yellow-100)',
      b: 'var(--yellow-50)',
      fg: 'var(--on-yellow-100)'
    },
    orange: {
      a: 'var(--orange-100)',
      b: 'var(--orange-50)',
      fg: 'var(--on-gold-100)'
    },
    purple: {
      a: 'var(--purple-100)',
      b: 'var(--purple-50)',
      fg: 'var(--on-blue-100)'
    }
  };
  const shown = filter === 'Все' ? programs : programs.filter(p => p.g === filter);
  const HEADER_H = 190;
  return React.createElement("section", {
    id: "programs",
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
    eyebrow: "\u041D\u0430\u0448\u0438 \u0437\u0430\u043D\u044F\u0442\u0438\u044F",
    title: "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F",
    gradient: true
  }, "\u0412\u0441\u0451, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u043C\u0430\u043B\u044B\u0448\u0443, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u0442\u0438 \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u043C, \u0437\u0434\u043E\u0440\u043E\u0432\u044B\u043C \u0438 \u043B\u044E\u0431\u043E\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C."), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      margin: '32px 0 36px'
    }
  }, cats.map(c => React.createElement(Tag, {
    key: c.name,
    dot: c.dot,
    active: filter === c.name,
    onClick: () => setFilter(c.name)
  }, c.name))), React.createElement("div", {
    className: "cs-programs-grid cs-stagger",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px'
    }
  }, shown.map(p => {
    const t = tile[p.c] || tile.pink;
    return React.createElement("div", {
      key: p.t,
      className: "cs-card",
      "data-cs-tilt": true,
      style: {
        position: 'relative',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, React.createElement("span", {
      className: "cs-glare"
    }), p.img ? React.createElement("img", _extends({}, imgProps(p.img), {
      alt: 'Занятие «' + p.t + '» в садике Color Baby House — Ташкент',
      style: {
        display: 'block',
        width: '100%',
        height: HEADER_H + 'px',
        objectFit: 'cover',
        objectPosition: p.pos || 'center'
      }
    })) : React.createElement("div", {
      style: {
        height: HEADER_H + 'px',
        position: 'relative',
        background: 'linear-gradient(135deg, ' + t.a + ', ' + t.b + ')',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        width: 90,
        height: 90,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.35)',
        top: -24,
        right: -20
      }
    }), React.createElement("span", {
      style: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.25)',
        bottom: -16,
        left: -10
      }
    }), React.createElement("span", {
      className: "cs-card-icon",
      style: {
        width: 78,
        height: 78,
        borderRadius: '50%',
        background: '#fff',
        color: t.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-md)',
        position: 'relative'
      }
    }, React.createElement(Ic, {
      n: p.i,
      size: 36
    }))), React.createElement("div", {
      style: {
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        flex: 1
      }
    }, React.createElement("h3", {
      style: {
        font: 'var(--font-h4)',
        fontSize: '20px',
        color: 'var(--color-text)',
        margin: 0
      }
    }, p.t), React.createElement("p", {
      style: {
        font: 'var(--font-body-r)',
        color: 'var(--color-text-muted)',
        margin: 0
      }
    }, p.d), (p.age || p.freq || p.cost) && React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginTop: 'auto',
        paddingTop: '10px'
      }
    }, p.age && React.createElement(Badge, {
      color: "neutral",
      size: "sm",
      iconLeft: React.createElement(Ic, {
        n: "cake",
        size: 12
      })
    }, p.age), p.freq && React.createElement(Badge, {
      color: "info",
      size: "sm",
      iconLeft: React.createElement(Ic, {
        n: "calendar-days",
        size: 12
      })
    }, p.freq), p.cost && React.createElement(Badge, {
      color: costMeta[p.cost].color,
      size: "sm"
    }, costMeta[p.cost].label))));
  }))));
}
window.Programs = Programs;