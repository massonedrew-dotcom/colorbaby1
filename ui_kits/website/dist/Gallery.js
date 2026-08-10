function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Gallery() {
  const {
    SectionHeading
  } = window.DesignSystem_52b7c1;
  const {
    imgProps
  } = window;
  const photos = [{
    src: 'assets/photos/dance.jpg',
    alt: 'Танцы в детском саду Color Baby House, Ташкент'
  }, {
    src: 'assets/photos/taekwondo.jpg',
    alt: 'Тхэквондо для детей в садике, Ташкент'
  }, {
    src: 'assets/photos/robotics.jpg',
    alt: 'Робототехника для дошкольников в Color Baby House'
  }, {
    src: 'assets/photos/gymnastics.jpg',
    alt: 'Гимнастика для малышей в детском саду'
  }, {
    src: 'assets/photos/massage.jpg',
    alt: 'Оздоровительный детский массаж в садике'
  }, {
    src: 'assets/photos/summer-pool.jpg',
    alt: 'Летний сезон с бассейном в Color Baby House'
  }];
  const [lifted, setLifted] = React.useState(-1);
  return React.createElement("section", {
    id: "gallery",
    className: "cs-reveal",
    style: {
      padding: 'var(--section-y) 0',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.55), rgba(254,237,245,0.55))',
      scrollMarginTop: '92px'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 clamp(20px,5vw,48px)'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
    title: "\u041C\u043E\u043C\u0435\u043D\u0442\u044B \u0438\u0437 \u0436\u0438\u0437\u043D\u0438 \u0441\u0430\u0434\u0438\u043A\u0430",
    gradient: true
  }, "\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u044D\u0442\u043E \u0438\u0433\u0440\u044B, \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u0438 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F. \u0417\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435, \u043A\u0430\u043A \u0443 \u043D\u0430\u0441 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0432\u0440\u0435\u043C\u044F. \u2728"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
      gap: '18px',
      margin: '40px 0 0',
      alignItems: 'start'
    }
  }, photos.map((p, i) => React.createElement("img", _extends({
    key: p.src
  }, imgProps(p.src), {
    alt: p.alt,
    onMouseEnter: () => setLifted(i),
    onMouseLeave: () => setLifted(-1),
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      aspectRatio: '3 / 4',
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)',
      border: '4px solid #fff',
      boxShadow: lifted === i ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: lifted === i ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }))))));
}
window.Gallery = Gallery;