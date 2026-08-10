import * as React from 'react';

/**
 * Small rounded status / label pill. Soft tint by default; solid for emphasis.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** Colour role. Default 'primary'. */
  color?: 'primary' | 'secondary' | 'accent' | 'sun' | 'success' | 'info' | 'neutral';
  /** 'soft' tint (default) or 'solid' fill. */
  variant?: 'soft' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
