import React from 'react';

/**
 * Color Baby House — Badge
 * Small rounded status/label pill. Solid or soft tint.
 */
export function Badge({
  children,
  color = 'primary',
  variant = 'soft',
  size = 'md',
  iconLeft = null,
  style = {},
  ...rest
}) {
  const palette = {
    primary: { solid: 'var(--color-primary-fill)', soft: 'var(--pink-50)', softText: 'var(--pink-600)' },
    secondary: { solid: 'var(--color-secondary-fill)', soft: 'var(--sky-50)', softText: 'var(--on-cyan-tint)' },
    accent: { solid: 'var(--color-accent)', soft: 'var(--purple-50)', softText: 'var(--on-blue-tint)' },
    sun: { solid: 'var(--yellow-400)', soft: 'var(--yellow-100)', softText: 'var(--on-yellow-100)' },
    success: { solid: 'var(--color-success-fill)', soft: 'var(--mint-50)', softText: 'var(--on-mint-100)' },
    info: { solid: 'var(--color-secondary-fill)', soft: 'var(--sky-50)', softText: 'var(--on-cyan-tint)' },
    neutral: { solid: 'var(--ink-700)', soft: 'var(--sand-100)', softText: 'var(--ink-700)' },
  };
  const sizes = {
    sm: { padding: '3px 9px', fontSize: '11px', gap: '4px' },
    md: { padding: '5px 12px', fontSize: '13px', gap: '5px' },
    lg: { padding: '7px 15px', fontSize: '14px', gap: '6px' },
  };
  const c = palette[color] || palette.primary;
  const isSolid = variant === 'solid';

  return (
    <span
      /* cs-plate — крючок для темы: тема перекрашивает все плашки разом
         (ui_kits/website/theme.css), не трогая палитру самого компонента. */
      className={'cs-plate cs-plate-' + color + (isSolid ? ' cs-plate-solid' : ' cs-plate-soft')}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
    </span>
  );
}
