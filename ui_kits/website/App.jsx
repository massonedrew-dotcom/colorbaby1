/* Color Baby House — Website app shell */
function App() {
  const { Header, Hero, Programs, Banner, Care, DaySchedule, Summer, Pricing, Testimonials,
          Enroll, Contacts, Footer, QuickApply, Marquee, Faq, ScrollTop, CookieBanner } = window;

  /* Живой фон всего сайта — садиковая сцена за контентом: солнце с лучами,
     плывущие облака, поднимающиеся шарики и мерцающие звёздочки.
     Слой фиксированный и лежит на z-index -1, поэтому секции не должны иметь
     непрозрачной заливки — иначе они его закроют (см. motion.css).
     Отрицательные задержки (--d) нужны, чтобы при загрузке страницы элементы
     уже были «в пути», а не стартовали все разом из одной точки. */
  const blobs = [
    { c: '#F9B2D2', x: '10%', y: '14%', s: '540px', t: '34s', d: '0s',   dx: '90px',  dy: '70px'  },
    { c: '#FEE98A', x: '82%', y: '10%', s: '460px', t: '41s', d: '-8s',  dx: '-80px', dy: '90px'  },
    { c: '#96E6EF', x: '70%', y: '52%', s: '600px', t: '47s', d: '-16s', dx: '70px',  dy: '-80px' },
    { c: '#9CC0E8', x: '16%', y: '74%', s: '520px', t: '38s', d: '-24s', dx: '-70px', dy: '-60px' },
    { c: '#C6F0F6', x: '46%', y: '88%', s: '440px', t: '44s', d: '-12s', dx: '60px',  dy: '-90px' },
  ];
  /* Шарики — четвёрка цветов логотипа. Жёлтый повторяется намеренно: это цвет
     того самого шарика, который дети держат на знаке. */
  const balloons = [
    { c: '#EE4A9B', x: '7%',  t: '26s', d: '-2s',  drift: '46px'  },
    { c: '#22BFD1', x: '21%', t: '33s', d: '-14s', drift: '-32px' },
    { c: '#FBD130', x: '38%', t: '29s', d: '-23s', drift: '38px'  },
    { c: '#1F6FBE', x: '58%', t: '36s', d: '-7s',  drift: '-42px' },
    { c: '#F47FB6', x: '74%', t: '30s', d: '-19s', drift: '30px'  },
    { c: '#FBD130', x: '89%', t: '38s', d: '-28s', drift: '-26px' },
  ];
  const clouds = [
    { y: '12%', s: '150px', t: '68s', d: '-10s', o: 0.55 },
    { y: '38%', s: '110px', t: '86s', d: '-40s', o: 0.42 },
    { y: '66%', s: '180px', t: '74s', d: '-25s', o: 0.48 },
    { y: '85%', s: '120px', t: '95s', d: '-60s', o: 0.38 },
  ];
  const sparkles = [
    { x: '13%', y: '24%', d: '0s'    }, { x: '44%', y: '11%', d: '-1.1s' },
    { x: '67%', y: '68%', d: '-2.2s' }, { x: '87%', y: '33%', d: '-0.6s' },
    { x: '28%', y: '79%', d: '-1.7s' }, { x: '55%', y: '45%', d: '-2.8s' },
    { x: '78%', y: '88%', d: '-1.4s' },
  ];

  const backdrop = (
    <div className="cs-backdrop" aria-hidden="true">
      {blobs.map((b, i) => (
        <span key={'b' + i} className="cs-backdrop-blob"
          style={{ '--c': b.c, '--x': b.x, '--y': b.y, '--s': b.s, '--t': b.t, '--d': b.d, '--dx': b.dx, '--dy': b.dy }} />
      ))}
      <span className="cs-backdrop-dots" />

      <span className="cs-sun-core" />
      <span className="cs-sun-rays" />

      {clouds.map((c, i) => (
        <span key={'c' + i} className="cs-cloud"
          style={{ '--y': c.y, '--s': c.s, '--t': c.t, '--d': c.d, '--o': c.o }} />
      ))}
      {balloons.map((b, i) => (
        <span key={'l' + i} className="cs-balloon"
          style={{ left: b.x, '--c': b.c, '--t': b.t, '--d': b.d, '--x': b.drift }} />
      ))}
      {sparkles.map((s, i) => (
        <span key={'s' + i} className="cs-sparkle"
          style={{ left: s.x, top: s.y, '--d': s.d }} />
      ))}
    </div>
  );

  return (
    <div>
      {backdrop}
      {/* Ссылка «к содержанию» — первое, что получает фокус по Tab.
          Видна только при фокусе (стили .cs-skip в site.css): человеку с
          клавиатуры или скринридером не нужно проходить всё меню, чтобы
          добраться до текста страницы. */}
      <a href="#main" className="cs-skip">Перейти к содержанию</a>
      <Header />
      {/* <main> — ориентир «основное содержимое» для скринридеров и цель
          ссылки-пропуска выше. Шапка, подвал и плавающие виджеты остаются
          снаружи: они не часть содержания страницы. */}
      <main id="main">
        {/* Бегущая строка стоит первой, сразу под шапкой: раньше она была
            после героя, на ~2200px вниз, и сверху её просто не было видно —
            на 100% масштаба до неё не доскроллить с первого экрана. */}
        <Marquee />
        <Banner />
        <Summer />
        <Hero direction="sunshine" />
        <Care />
        <Programs />
        <DaySchedule />
        <Pricing />
        <Enroll />
        <Testimonials />
        <Faq />
        <Contacts />
      </main>
      <Footer />

      {/* Плавающий виджет заявки (нижний правый угол) */}
      <QuickApply />
      {/* Кнопка «наверх» — слева, чтобы не перекрывать виджет заявки */}
      <ScrollTop />
      {/* Уведомление о cookie: показывается до первого выбора посетителя */}
      <CookieBanner />
    </div>
  );
}
window.App = App;
