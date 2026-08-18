function ScrollTop() {
  const {
    Ic
  } = window;
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.5);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const up = () => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduced ? 'auto' : 'smooth'
    });
  };
  return React.createElement("button", {
    type: "button",
    onClick: up,
    "aria-label": "\u041D\u0430\u0432\u0435\u0440\u0445",
    title: "\u041D\u0430\u0432\u0435\u0440\u0445",
    style: {
      position: 'fixed',
      zIndex: 190,
      bottom: 'clamp(16px, 3vh, 28px)',
      left: 'clamp(16px, 2vw, 28px)',
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: '2px solid var(--plate-line, #F2C41C)',
      background: 'rgba(255,255,255,0.94)',
      color: 'var(--color-primary-text)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(12px)',
      pointerEvents: show ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)'
    }
  }, React.createElement(Ic, {
    n: "arrow-up",
    size: 22
  }));
}
function CookieBanner() {
  const {
    Ic,
    asset
  } = window;
  const api = window.CSAnalytics;
  const [show, setShow] = React.useState(() => !!(api && api.needsBanner()));
  if (!show) return null;
  const decide = accepted => {
    if (accepted) api.accept();else api.decline();
    setShow(false);
  };
  return React.createElement("div", {
    role: "dialog",
    "aria-label": "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 cookie",
    style: {
      position: 'fixed',
      zIndex: 300,
      left: 'clamp(12px, 2vw, 24px)',
      right: 'clamp(12px, 2vw, 24px)',
      bottom: 'clamp(12px, 2vh, 24px)',
      maxWidth: '760px',
      margin: '0 auto',
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-xl, var(--shadow-lg))',
      padding: 'clamp(16px, 2.5vw, 22px)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '16px'
    }
  }, React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary-text)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Ic, {
    n: "cookie",
    size: 22
  })), React.createElement("p", {
    style: {
      flex: '1 1 280px',
      margin: 0,
      fontSize: '14px',
      lineHeight: 1.55,
      color: 'var(--color-text-muted)'
    }
  }, "\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C cookie \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u0430\u0439\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0443\u0434\u043E\u0431\u043D\u0435\u0435. \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u2014 \u0432", ' ', React.createElement("a", {
    href: asset('privacy.html'),
    style: {
      color: 'var(--color-primary-text)',
      fontWeight: 700
    }
  }, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), "."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flex: '0 0 auto'
    }
  }, React.createElement("button", {
    type: "button",
    onClick: () => decide(false),
    style: {
      padding: '11px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--color-border-strong)',
      background: 'transparent',
      color: 'var(--ink-700)',
      fontWeight: 700,
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, "\u0422\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435"), React.createElement("button", {
    type: "button",
    onClick: () => decide(true),
    style: {
      padding: '11px 20px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontWeight: 800,
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      boxShadow: 'var(--shadow-pink)'
    }
  }, "\u041F\u0440\u0438\u043D\u044F\u0442\u044C")));
}
Object.assign(window, {
  ScrollTop,
  CookieBanner
});