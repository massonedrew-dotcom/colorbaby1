import * as React from 'react';

/**
 * Soft rounded surface container — the base for every panel, tile and group.
 *
 * @startingPoint section="Core" subtitle="Rounded surface card with tint, glow & hover-lift" viewport="700x320"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Pastel fill. Default 'none' (white surface). */
  tint?: 'none' | 'pink' | 'orange' | 'sky' | 'mint' | 'purple' | 'sun' | 'cream';
  /** Corner radius. Default 'lg'. */
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  /** Inner padding. Default 'lg'. */
  pad?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Lift + deepen shadow on hover. */
  hover?: boolean;
  /** Coloured glow shadow. Default 'none' (neutral soft shadow). */
  glow?: 'none' | 'pink' | 'orange' | 'yellow' | 'purple';
  /** Add a 1px warm hairline border. */
  bordered?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
