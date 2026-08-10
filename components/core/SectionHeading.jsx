import React from 'react';

/**
 * Color Baby House — SectionHeading
 * Centred or left-aligned section header: overline eyebrow + display title + lead.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'center',
  gradient = false,
  maxWidth = 640,
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column',
        gap: 'var(--space-3)',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        maxWidth, marginInline: align === 'center' ? 'auto' : 0,
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span style={{
          font: 'var(--font-overline)', letterSpacing: 'var(--tracking-caps)',
          textTransform: 'uppercase', color: 'var(--color-primary-text)',
          display: 'inline-flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{ width: 22, height: 3, borderRadius: 3, background: 'var(--gradient-warm)' }} />
          {eyebrow}
        </span>
      )}
      <h2
        className={gradient ? 'cs-gradient-text' : undefined}
        style={{
          font: 'var(--font-h2)',
          color: gradient ? undefined : 'var(--color-text)',
          margin: 0,
        }}
      >
        {title}
      </h2>
      {children && (
        <p style={{ font: 'var(--font-lead)', color: 'var(--color-text-muted)', margin: 0 }}>
          {children}
        </p>
      )}
    </div>
  );
}
