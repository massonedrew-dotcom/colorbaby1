import React from 'react';

/**
 * Color Baby House — Button
 * Rounded pill button with brand variants, sizes and optional icons.
 */
export function Button({
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
    sm: { padding: '8px 16px', fontSize: '14px', gap: '6px', minHeight: '38px' },
    md: { padding: '12px 24px', fontSize: '16px', gap: '8px', minHeight: '48px' },
    lg: { padding: '16px 32px', fontSize: '18px', gap: '10px', minHeight: '58px' },
  };

  const variants = {
    primary: {
      background: 'var(--color-primary-fill)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-pink)',
      border: '2px solid transparent',
    },
    secondary: {
      background: 'var(--color-secondary-fill)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-orange)',
      border: '2px solid transparent',
    },
    sun: {
      background: 'var(--gradient-sun)',
      color: 'var(--color-text-on-brand)',
      boxShadow: 'var(--shadow-pink)',
      border: '2px solid transparent',
    },
    soft: {
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary-press)',
      boxShadow: 'none',
      border: '2px solid transparent',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-text)',
      boxShadow: 'none',
      border: '2px solid var(--color-border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary-press)',
      boxShadow: 'none',
      border: '2px solid transparent',
    },
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
    ...style,
  };

  const hoverShadow = {
    primary: 'var(--shadow-lg)', secondary: 'var(--shadow-lg)', sun: 'var(--shadow-lg)',
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
  function onDown(e) { if (!disabled) e.currentTarget.style.transform = 'scale(0.96)'; }
  function onUp(e) { if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)'; }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
