import * as React from 'react';

/**
 * Primary call-to-action button for Color Baby House. Rounded pill, brand colours,
 * playful press/hover. Use `sun` variant sparingly for the single hero CTA.
 *
 * @startingPoint section="Core" subtitle="Brand pill button — all variants & sizes" viewport="700x260"
 */
export interface ButtonProps {
  /** Button label / content */
  children: React.ReactNode;
  /** Visual style. Default 'primary'. */
  variant?: 'primary' | 'secondary' | 'sun' | 'soft' | 'outline' | 'ghost';
  /** Size. Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded pill (default true) vs. md radius. */
  pill?: boolean;
  /** Stretch to full width of container. */
  block?: boolean;
  disabled?: boolean;
  /** Element rendered before the label (e.g. a Lucide icon node). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
