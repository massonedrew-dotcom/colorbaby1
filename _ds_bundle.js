/* @ds-bundle: {"format":3,"namespace":"DesignSystem_52b7c1","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/core/FeatureCard.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"68446d6208ba","components/core/Badge.jsx":"831b4423220a","components/core/Button.jsx":"903ad8fcc252","components/core/Card.jsx":"6eb1c53c0ee8","components/core/FeatureCard.jsx":"bf633571dd8e","components/core/IconButton.jsx":"2330c38da5cd","components/core/Input.jsx":"809095878dc4","components/core/SectionHeading.jsx":"b54859393061","components/core/Tag.jsx":"5f5fde05d418"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_52b7c1 = window.DesignSystem_52b7c1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — Avatar
 * Circular avatar with image or initials, optional coloured ring.
 */
function Avatar({
  src = null,
  name = '',
  size = 'md',
  color = 'pink',
  ring = false,
  style = {},
  ...rest
}) {
  const sizes = {
    xs: 28,
    sm: 36,
    md: 48,
    lg: 64,
    xl: 88
  };
  const dim = sizes[size] || sizes.md;
  const fills = {
    pink: 'var(--pink-200)',
    orange: 'var(--orange-200)',
    sky: 'var(--sky-300)',
    mint: 'var(--mint-300)',
    purple: 'var(--purple-200)',
    sun: 'var(--yellow-300)'
  };
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-circle)',
      background: src ? 'transparent' : fills[color] || fills.pink,
      color: 'var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: dim * 0.4,
      flex: 'none',
      boxShadow: ring ? '0 0 0 3px var(--color-surface), 0 0 0 6px var(--color-primary)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — Badge
 * Small rounded status/label pill. Solid or soft tint.
 */
function Badge({
  children,
  color = 'primary',
  variant = 'soft',
  size = 'md',
  iconLeft = null,
  style = {},
  ...rest
}) {
  const palette = {
    primary: {
      solid: 'var(--color-primary-fill)',
      soft: 'var(--pink-50)',
      softText: 'var(--pink-600)'
    },
    secondary: {
      solid: 'var(--color-secondary-fill)',
      soft: 'var(--sky-50)',
      softText: 'var(--on-cyan-tint)'
    },
    accent: {
      solid: 'var(--color-accent)',
      soft: 'var(--purple-50)',
      softText: 'var(--on-blue-tint)'
    },
    sun: {
      solid: 'var(--yellow-400)',
      soft: 'var(--yellow-100)',
      softText: 'var(--on-yellow-100)'
    },
    success: {
      solid: 'var(--color-success-fill)',
      soft: 'var(--mint-50)',
      softText: 'var(--on-mint-100)'
    },
    info: {
      solid: 'var(--color-secondary-fill)',
      soft: 'var(--sky-50)',
      softText: 'var(--on-cyan-tint)'
    },
    neutral: {
      solid: 'var(--ink-700)',
      soft: 'var(--sand-100)',
      softText: 'var(--ink-700)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: '11px',
      gap: '4px'
    },
    md: {
      padding: '5px 12px',
      fontSize: '13px',
      gap: '5px'
    },
    lg: {
      padding: '7px 15px',
      fontSize: '14px',
      gap: '6px'
    }
  };
  const c = palette[color] || palette.primary;
  const isSolid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sizes[size].gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      background: isSolid ? c.solid : c.soft,
      color: isSolid ? '#fff' : c.softText,
      ...sizes[size],
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — Button
 * Rounded pill button with brand variants, sizes and optional icons.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = true,
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px',
      gap: '6px',
      minHeight: '38px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '16px',
      gap: '8px',
      minHeight: '48px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '18px',
      gap: '10px',
      minHeight: '58px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary-fill)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-pink)',
      border: '2px solid transparent'
    },
    secondary: {
      background: 'var(--color-secondary-fill)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-orange)',
      border: '2px solid transparent'
    },
    sun: {
      background: 'var(--gradient-sun)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-pink)',
      border: '2px solid transparent'
    },
    soft: {
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary-press)',
      boxShadow: 'none',
      border: '2px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-text)',
      boxShadow: 'none',
      border: '2px solid var(--color-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary-press)',
      boxShadow: 'none',
      border: '2px solid transparent'
    }
  };
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 800,
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    transition: 'transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverShadow = {
    primary: 'var(--shadow-lg)',
    secondary: 'var(--shadow-lg)',
    sun: 'var(--shadow-lg)'
  };
  function onEnter(e) {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (hoverShadow[variant]) e.currentTarget.style.boxShadow = hoverShadow[variant];
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-press)';
    if (variant === 'secondary') e.currentTarget.style.background = 'var(--sky-700)';
    if (variant === 'soft') e.currentTarget.style.background = 'var(--pink-100)';
    if (variant === 'ghost' || variant === 'outline') e.currentTarget.style.background = 'var(--color-primary-soft)';
  }
  function onLeave(e) {
    if (disabled) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = variants[variant].boxShadow;
    e.currentTarget.style.background = variants[variant].background;
  }
  function onDown(e) {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.96)';
  }
  function onUp(e) {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — Card
 * Soft rounded surface container. Optional pastel tint, hover-lift and colour glow.
 */
function Card({
  children,
  tint = 'none',
  radius = 'lg',
  pad = 'lg',
  hover = false,
  glow = 'none',
  bordered = false,
  style = {},
  ...rest
}) {
  const tints = {
    none: 'var(--color-surface)',
    pink: 'var(--pink-50)',
    orange: 'var(--orange-50)',
    sky: 'var(--sky-50)',
    mint: 'var(--mint-50)',
    purple: 'var(--purple-50)',
    sun: 'var(--yellow-50)',
    cream: 'var(--cream)'
  };
  const radii = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
    xl: 'var(--space-10)'
  };
  const glows = {
    none: 'var(--shadow-md)',
    pink: 'var(--shadow-pink)',
    orange: 'var(--shadow-orange)',
    yellow: 'var(--shadow-yellow)',
    purple: 'var(--shadow-purple)'
  };
  const [lifted, setLifted] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: hover ? () => setLifted(true) : undefined,
    onMouseLeave: hover ? () => setLifted(false) : undefined,
    style: {
      background: tints[tint] || tints.none,
      borderRadius: radii[radius],
      padding: pads[pad],
      boxShadow: lifted ? 'var(--shadow-lg)' : glows[glow],
      border: bordered ? '1px solid var(--color-border)' : '1px solid transparent',
      transform: lifted ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — FeatureCard
 * Programme / feature tile: circular colour icon-chip + title + description.
 */
function FeatureCard({
  icon,
  title,
  children,
  color = 'pink',
  hover = true,
  style = {},
  ...rest
}) {
  const map = {
    pink: {
      chip: 'var(--pink-100)',
      ink: 'var(--pink-500)',
      tint: 'var(--pink-50)'
    },
    orange: {
      chip: 'var(--orange-100)',
      ink: 'var(--orange-500)',
      tint: 'var(--orange-50)'
    },
    sky: {
      chip: 'var(--sky-100)',
      ink: 'var(--sky-500)',
      tint: 'var(--sky-50)'
    },
    mint: {
      chip: 'var(--mint-100)',
      ink: 'var(--mint-500)',
      tint: 'var(--mint-50)'
    },
    purple: {
      chip: 'var(--purple-100)',
      ink: 'var(--purple-500)',
      tint: 'var(--purple-50)'
    },
    sun: {
      chip: 'var(--yellow-100)',
      ink: 'var(--yellow-600)',
      tint: 'var(--yellow-50)'
    }
  };
  const c = map[color] || map.pink;
  const [lifted, setLifted] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: hover ? () => setLifted(true) : undefined,
    onMouseLeave: hover ? () => setLifted(false) : undefined,
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: lifted ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      border: '1px solid var(--color-border)',
      transform: lifted ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-circle)',
      background: c.chip,
      color: c.ink,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--font-h4)',
      fontSize: '20px',
      color: 'var(--color-text)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--font-body-r)',
      color: 'var(--color-text-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — IconButton
 * Circular icon-only button. Pass a Lucide <i data-lucide> node or any glyph.
 */
function IconButton({
  icon,
  variant = 'soft',
  size = 'md',
  label,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 54
  };
  const dim = sizes[size];
  const variants = {
    primary: {
      background: 'var(--color-primary-fill)',
      color: '#fff',
      boxShadow: 'var(--shadow-pink)',
      border: 'none'
    },
    soft: {
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary-press)',
      boxShadow: 'none',
      border: 'none'
    },
    surface: {
      background: 'var(--color-surface)',
      color: 'var(--ink-700)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--color-border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-700)',
      boxShadow: 'none',
      border: 'none'
    }
  };
  function onEnter(e) {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
    if (variant === 'soft') e.currentTarget.style.background = 'var(--pink-100)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--color-primary-soft)';
  }
  function onLeave(e) {
    if (disabled) return;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.background = variants[variant].background;
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
    },
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-bounce), background var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — Input
 * Rounded text field with label, optional leading icon and helper/error text.
 */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  iconLeft = null,
  helper,
  error = '',
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const invalid = Boolean(error);
  const borderColor = invalid ? 'var(--color-danger)' : focused ? 'var(--color-primary)' : 'var(--color-border-strong)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-label)',
      color: 'var(--color-text)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary-text)'
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: disabled ? 'var(--sand-50)' : 'var(--color-surface)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-pill)',
      padding: '0 18px',
      height: '52px',
      boxShadow: focused && !invalid ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-subtle)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--font-body-r)',
      color: 'var(--color-text)',
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-body-r)',
      fontSize: '13px',
      color: invalid ? 'var(--color-danger)' : 'var(--color-text-muted)',
      paddingLeft: '18px'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — SectionHeading
 * Centred or left-aligned section header: overline eyebrow + display title + lead.
 */
function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'center',
  gradient = false,
  maxWidth = 640,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth,
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-overline)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--color-primary-text)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 3,
      borderRadius: 3,
      background: 'var(--gradient-warm)'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: gradient ? 'cs-gradient-text' : undefined,
    style: {
      font: 'var(--font-h2)',
      color: gradient ? undefined : 'var(--color-text)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--font-lead)',
      color: 'var(--color-text-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Color Baby House — Tag
 * Outlined category chip with a coloured dot. Pairs with the --cat-* palette.
 */
function Tag({
  children,
  dot = 'var(--color-primary)',
  active = false,
  size = 'md',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: '13px'
    },
    md: {
      padding: '9px 16px',
      fontSize: '14px'
    }
  };
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: clickable ? 'button' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      borderRadius: 'var(--radius-pill)',
      background: active ? 'var(--color-text)' : 'var(--color-surface)',
      color: active ? 'var(--color-text-inverse)' : 'var(--color-text)',
      border: `1.5px solid ${active ? 'var(--color-text)' : 'var(--color-border-strong)'}`,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-out)',
      ...sizes[size],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      flex: 'none',
      background: dot,
      boxShadow: active ? '0 0 0 2px rgba(255,255,255,.3)' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

/* Компоненты сайта (ui_kits/website/*) здесь БОЛЬШЕ НЕ ЛЕЖАТ — вырезаны намеренно.
   Они объявляли window.App / Header / Hero / Care / Enroll / Footer / Programs,
   то есть ровно те же имена, что и ui_kits/website/dist/*.js. Побеждал тот, кто
   успел последним, и при неудачном порядке загрузки монтировалась эта старая,
   урезанная копия: без галереи, распорядка, цен, отзывов, вопросов и контактов.
   Здесь остаётся только ядро дизайн-системы (DesignSystem_52b7c1). */

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

})();
