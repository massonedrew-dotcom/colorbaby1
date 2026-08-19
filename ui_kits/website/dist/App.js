function App() {
  const {
    Header,
    Hero,
    Programs,
    Banner,
    Care,
    DaySchedule,
    Summer,
    Pricing,
    Testimonials,
    Enroll,
    Contacts,
    Footer,
    QuickApply,
    Marquee,
    Gallery,
    Faq,
    ScrollTop,
    CookieBanner
  } = window;
  const blobs = [{
    c: '#F9B2D2',
    x: '10%',
    y: '14%',
    s: '540px',
    t: '34s',
    d: '0s',
    dx: '90px',
    dy: '70px'
  }, {
    c: '#FEE98A',
    x: '82%',
    y: '10%',
    s: '460px',
    t: '41s',
    d: '-8s',
    dx: '-80px',
    dy: '90px'
  }, {
    c: '#96E6EF',
    x: '70%',
    y: '52%',
    s: '600px',
    t: '47s',
    d: '-16s',
    dx: '70px',
    dy: '-80px'
  }, {
    c: '#9CC0E8',
    x: '16%',
    y: '74%',
    s: '520px',
    t: '38s',
    d: '-24s',
    dx: '-70px',
    dy: '-60px'
  }, {
    c: '#C6F0F6',
    x: '46%',
    y: '88%',
    s: '440px',
    t: '44s',
    d: '-12s',
    dx: '60px',
    dy: '-90px'
  }];
  const balloons = [{
    c: '#EE4A9B',
    x: '7%',
    t: '26s',
    d: '-2s',
    drift: '46px'
  }, {
    c: '#22BFD1',
    x: '21%',
    t: '33s',
    d: '-14s',
    drift: '-32px'
  }, {
    c: '#FBD130',
    x: '38%',
    t: '29s',
    d: '-23s',
    drift: '38px'
  }, {
    c: '#1F6FBE',
    x: '58%',
    t: '36s',
    d: '-7s',
    drift: '-42px'
  }, {
    c: '#F47FB6',
    x: '74%',
    t: '30s',
    d: '-19s',
    drift: '30px'
  }, {
    c: '#FBD130',
    x: '89%',
    t: '38s',
    d: '-28s',
    drift: '-26px'
  }];
  const clouds = [{
    y: '12%',
    s: '150px',
    t: '68s',
    d: '-10s',
    o: 0.55
  }, {
    y: '38%',
    s: '110px',
    t: '86s',
    d: '-40s',
    o: 0.42
  }, {
    y: '66%',
    s: '180px',
    t: '74s',
    d: '-25s',
    o: 0.48
  }, {
    y: '85%',
    s: '120px',
    t: '95s',
    d: '-60s',
    o: 0.38
  }];
  const sparkles = [{
    x: '13%',
    y: '24%',
    d: '0s'
  }, {
    x: '44%',
    y: '11%',
    d: '-1.1s'
  }, {
    x: '67%',
    y: '68%',
    d: '-2.2s'
  }, {
    x: '87%',
    y: '33%',
    d: '-0.6s'
  }, {
    x: '28%',
    y: '79%',
    d: '-1.7s'
  }, {
    x: '55%',
    y: '45%',
    d: '-2.8s'
  }, {
    x: '78%',
    y: '88%',
    d: '-1.4s'
  }];
  const backdrop = React.createElement("div", {
    className: "cs-backdrop",
    "aria-hidden": "true"
  }, blobs.map((b, i) => React.createElement("span", {
    key: 'b' + i,
    className: "cs-backdrop-blob",
    style: {
      '--c': b.c,
      '--x': b.x,
      '--y': b.y,
      '--s': b.s,
      '--t': b.t,
      '--d': b.d,
      '--dx': b.dx,
      '--dy': b.dy
    }
  })), React.createElement("span", {
    className: "cs-backdrop-dots"
  }), React.createElement("span", {
    className: "cs-sun-core"
  }), React.createElement("span", {
    className: "cs-sun-rays"
  }), clouds.map((c, i) => React.createElement("span", {
    key: 'c' + i,
    className: "cs-cloud",
    style: {
      '--y': c.y,
      '--s': c.s,
      '--t': c.t,
      '--d': c.d,
      '--o': c.o
    }
  })), balloons.map((b, i) => React.createElement("span", {
    key: 'l' + i,
    className: "cs-balloon",
    style: {
      left: b.x,
      '--c': b.c,
      '--t': b.t,
      '--d': b.d,
      '--x': b.drift
    }
  })), sparkles.map((s, i) => React.createElement("span", {
    key: 's' + i,
    className: "cs-sparkle",
    style: {
      left: s.x,
      top: s.y,
      '--d': s.d
    }
  })));
  return React.createElement("div", null, backdrop, React.createElement("a", {
    href: "#main",
    className: "cs-skip"
  }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044E"), React.createElement(Header, null), React.createElement("main", {
    id: "main"
  }, React.createElement(Banner, null), React.createElement(Summer, null), React.createElement(Hero, {
    direction: "sunshine"
  }), React.createElement(Marquee, null), React.createElement(Care, null), React.createElement(Programs, null), React.createElement(Gallery, null), React.createElement(DaySchedule, null), React.createElement(Pricing, null), React.createElement(Enroll, null), React.createElement(Testimonials, null), React.createElement(Faq, null), React.createElement(Contacts, null)), React.createElement(Footer, null), React.createElement(QuickApply, null), React.createElement(ScrollTop, null), React.createElement(CookieBanner, null));
}
window.App = App;