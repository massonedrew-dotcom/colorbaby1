import * as React from 'react';

/**
 * Category chip with a coloured dot — programme filters / tags.
 */
export interface TagProps {
  children: React.ReactNode;
  /** Dot colour, e.g. var(--cat-english). */
  dot?: string;
  /** Selected/active state (filled dark). */
  active?: boolean;
  size?: 'sm' | 'md';
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
