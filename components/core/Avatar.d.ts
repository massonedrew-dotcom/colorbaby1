import * as React from 'react';

/**
 * Circular avatar — child/teacher photo or coloured initials fallback.
 */
export interface AvatarProps {
  /** Image URL. Falls back to initials from `name` when absent. */
  src?: string | null;
  /** Full name (used for initials + alt text). */
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Fallback fill colour. Default 'pink'. */
  color?: 'pink' | 'orange' | 'sky' | 'mint' | 'purple' | 'sun';
  /** Show a brand ring around the avatar. */
  ring?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
