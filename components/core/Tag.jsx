import React from 'react';

/**
 * Color Baby House — Tag
 * Outlined category chip with a coloured dot. Pairs with the --cat-* palette.
 */
export function Tag({
  children,
  dot = 'var(--color-primary)',
  active = false,
  size = 'md',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '6px 12px', fontSize: '13px' },
    md: { padding: '9px 16px', fontSize: '14px' },
  };
  const clickable = Boolean(onClick);

  return (
    <span
      onClick={onClick}
      role={clickable ? 'button' : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--font-body)', fontWeight: 700,
        borderRadius: 'var(--radius-pill)',
        background: active ? 'var(--color-text)' : 'var(--color-surface)',
        color: active ? 'var(--color-text-inverse)' : 'var(--color-text)',
        border: `1.5px solid ${active ? 'var(--color-text)' : 'var(--color-border-strong)'}`,
        cursor: clickable ? 'pointer' : 'default',
        transition: 'all var(--dur-base) var(--ease-out)',
        ...sizes[size],
        ...style,
      }}
      {...rest}
    >
      <span style={{
        width: 10, height: 10, borderRadius: '50%', flex: 'none',
        background: dot, boxShadow: active ? '0 0 0 2px rgba(255,255,255,.3)' : 'none',
      }} />
      {children}
    </span>
  );
}
