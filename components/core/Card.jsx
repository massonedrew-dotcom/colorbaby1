import React from 'react';

/**
 * Color Baby House — Card
 * Soft rounded surface container. Optional pastel tint, hover-lift and colour glow.
 */
export function Card({
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
    cream: 'var(--cream)',
  };
  const radii = { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)' };
  const pads = { none: '0', sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)', xl: 'var(--space-10)' };
  const glows = {
    none: 'var(--shadow-md)', pink: 'var(--shadow-pink)', orange: 'var(--shadow-orange)',
    yellow: 'var(--shadow-yellow)', purple: 'var(--shadow-purple)',
  };

  const [lifted, setLifted] = React.useState(false);

  return (
    <div
      onMouseEnter={hover ? () => setLifted(true) : undefined}
      onMouseLeave={hover ? () => setLifted(false) : undefined}
      style={{
        background: tints[tint] || tints.none,
        borderRadius: radii[radius],
        padding: pads[pad],
        boxShadow: lifted ? 'var(--shadow-lg)' : glows[glow],
        border: bordered ? '1px solid var(--color-border)' : '1px solid transparent',
        transform: lifted ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
