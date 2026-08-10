import React from 'react';

/**
 * Color Baby House — IconButton
 * Circular icon-only button. Pass a Lucide <i data-lucide> node or any glyph.
 */
export function IconButton({
  icon,
  variant = 'soft',
  size = 'md',
  label,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = { sm: 36, md: 44, lg: 54 };
  const dim = sizes[size];

  const variants = {
    primary: { background: 'var(--color-primary)', color: '#fff', boxShadow: 'var(--shadow-pink)', border: 'none' },
    soft: { background: 'var(--color-primary-soft)', color: 'var(--color-primary-press)', boxShadow: 'none', border: 'none' },
    surface: { background: 'var(--color-surface)', color: 'var(--ink-700)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)' },
    ghost: { background: 'transparent', color: 'var(--ink-700)', boxShadow: 'none', border: 'none' },
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

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.92)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'; }}
      style={{
        width: dim, height: dim,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-circle)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'transform var(--dur-fast) var(--ease-bounce), background var(--dur-base) var(--ease-out)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {icon}
    </button>
  );
}
