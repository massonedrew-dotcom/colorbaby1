import React from 'react';

/**
 * Color Baby House — FeatureCard
 * Programme / feature tile: circular colour icon-chip + title + description.
 */
export function FeatureCard({
  icon,
  title,
  children,
  color = 'pink',
  hover = true,
  style = {},
  ...rest
}) {
  const map = {
    pink:   { chip: 'var(--pink-100)',   ink: 'var(--pink-500)',   tint: 'var(--pink-50)' },
    orange: { chip: 'var(--orange-100)', ink: 'var(--orange-500)', tint: 'var(--orange-50)' },
    sky:    { chip: 'var(--sky-100)',    ink: 'var(--sky-500)',    tint: 'var(--sky-50)' },
    mint:   { chip: 'var(--mint-100)',   ink: 'var(--mint-500)',   tint: 'var(--mint-50)' },
    purple: { chip: 'var(--purple-100)', ink: 'var(--purple-500)', tint: 'var(--purple-50)' },
    sun:    { chip: 'var(--yellow-100)', ink: 'var(--yellow-600)', tint: 'var(--yellow-50)' },
  };
  const c = map[color] || map.pink;
  const [lifted, setLifted] = React.useState(false);

  return (
    <div
      onMouseEnter={hover ? () => setLifted(true) : undefined}
      onMouseLeave={hover ? () => setLifted(false) : undefined}
      style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        boxShadow: lifted ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        border: '1px solid var(--color-border)',
        transform: lifted ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
        ...style,
      }}
      {...rest}
    >
      <span style={{
        width: 56, height: 56, borderRadius: 'var(--radius-circle)',
        background: c.chip, color: c.ink,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 26,
      }}>
        {icon}
      </span>
      <h3 style={{
        font: 'var(--font-h4)', fontSize: '20px', color: 'var(--color-text)', margin: 0,
      }}>{title}</h3>
      {children && (
        <p style={{ font: 'var(--font-body-r)', color: 'var(--color-text-muted)', margin: 0 }}>
          {children}
        </p>
      )}
    </div>
  );
}
