import React from 'react';

/**
 * Color Baby House — Avatar
 * Circular avatar with image or initials, optional coloured ring.
 */
export function Avatar({
  src = null,
  name = '',
  size = 'md',
  color = 'pink',
  ring = false,
  style = {},
  ...rest
}) {
  const sizes = { xs: 28, sm: 36, md: 48, lg: 64, xl: 88 };
  const dim = sizes[size] || sizes.md;
  const fills = {
    pink: 'var(--pink-200)', orange: 'var(--orange-200)', sky: 'var(--sky-300)',
    mint: 'var(--mint-300)', purple: 'var(--purple-200)', sun: 'var(--yellow-300)',
  };
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <span
      style={{
        width: dim, height: dim,
        borderRadius: 'var(--radius-circle)',
        background: src ? 'transparent' : (fills[color] || fills.pink),
        color: 'var(--ink-900)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: dim * 0.4,
        flex: 'none',
        boxShadow: ring ? '0 0 0 3px var(--color-surface), 0 0 0 6px var(--color-primary)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials}
    </span>
  );
}
