import * as React from 'react';

/**
 * Circular icon-only button — nav controls, toolbar actions, social links.
 */
export interface IconButtonProps {
  /** Icon node (e.g. <i data-lucide="phone"></i>) or any glyph. */
  icon: React.ReactNode;
  variant?: 'primary' | 'soft' | 'surface' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also used as title tooltip). */
  label?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
