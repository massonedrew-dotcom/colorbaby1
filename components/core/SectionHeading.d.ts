import * as React from 'react';

/**
 * Section header block — overline eyebrow + display title + optional lead paragraph.
 */
export interface SectionHeadingProps {
  /** Small uppercase eyebrow above the title. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Lead paragraph below the title. */
  children?: React.ReactNode;
  align?: 'center' | 'left';
  /** Render the title in the sun gradient. */
  gradient?: boolean;
  maxWidth?: number;
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
