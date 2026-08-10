function Faq() {
  const {
    SectionHeading,
    Button
  } = window.DesignSystem_52b7c1;
  const {
    Ic,
    scrollToId,
    goal
  } = window;
  const items = window.FAQ_ITEMS || [];
  const [open, setOpen] = React.useState(0);
  return React.createElement("section", {
    id: "faq",
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
    eyebrow: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",
    title: "\u041E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0435",
    gradient: true
  }, "\u0421\u043E\u0431\u0440\u0430\u043B\u0438 \u0442\u043E, \u043E \u0447\u0451\u043C \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u044E\u0442 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E. \u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u2014 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435. \uD83D\uDC9B"), React.createElement("div", {
    className: "cs-faq",
    style: {
      maxWidth: '860px',
      margin: '44px auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return React.createElement("div", {
      key: it.q,
      style: {
        background: 'var(--color-surface)',
        border: '1px solid ' + (isOpen ? 'var(--pink-200, #F9B2D2)' : 'var(--color-border)'),
        borderRadius: 'var(--radius-lg)',
        boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        overflow: 'hidden',
        transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
      }
    }, React.createElement("h3", {
      style: {
        margin: 0
      }
    }, React.createElement("button", {
      type: "button",
      "aria-expanded": isOpen,
      "aria-controls": 'faq-a-' + i,
      id: 'faq-q-' + i,
      onClick: () => {
        setOpen(isOpen ? -1 : i);
        if (!isOpen) goal('open_faq');
      },
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '18px 20px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--font-h4)',
        fontSize: '17px',
        lineHeight: 1.35,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: 'var(--ink-900)'
      }
    }, React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.q), React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        flex: 'none',
        borderRadius: '50%',
        background: isOpen ? 'var(--color-primary)' : 'var(--color-primary-soft)',
        color: isOpen ? '#fff' : 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
      }
    }, React.createElement(Ic, {
      n: "chevron-down",
      size: 18
    })))), React.createElement("div", {
      id: 'faq-a-' + i,
      role: "region",
      "aria-labelledby": 'faq-q-' + i,
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 20px 20px',
        paddingRight: '68px',
        font: 'var(--font-body-r)',
        fontSize: '16px',
        lineHeight: 1.65,
        color: 'var(--color-text-muted)'
      }
    }, it.a))));
  })), React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '32px'
    }
  }, React.createElement("p", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '16px',
      margin: '0 0 16px'
    }
  }, "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B? \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u0437\u0430\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E \u2014 \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u0432\u0441\u0451 \u043B\u0438\u0447\u043D\u043E."), React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: React.createElement(Ic, {
      n: "arrow-right",
      size: 20
    }),
    onClick: () => {
      goal('click_enroll_faq');
      scrollToId('enroll');
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044E"))));
}
window.Faq = Faq;