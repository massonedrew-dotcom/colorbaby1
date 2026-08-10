import * as React from 'react';

/**
 * Programme / feature tile — circular colour icon-chip, title and short text.
 * The workhorse for "что у нас есть" grids (classes, meals, care, reports).
 *
 * @startingPoint section="Core" subtitle="Programme feature tile with colour icon chip" viewport="360x240"
 */
export interface FeatureCardProps {
  /** Icon node (Lucide glyph or emoji) shown in the colour chip. */
  icon: React.ReactNode;
  title: React.ReactNode;
  /** Optional description text. */
  children?: React.ReactNode;
  /** Chip colour theme. Default 'pink'. */
  color?: 'pink' | 'orange' | 'sky' | 'mint' | 'purple' | 'sun';
  /** Lift on hover. Default true. */
  hover?: boolean;
  style?: React.CSSProperties;
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
