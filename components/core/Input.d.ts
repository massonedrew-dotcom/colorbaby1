import * as React from 'react';

/**
 * Rounded pill text field with label, optional leading icon, helper & error text.
 */
export interface InputProps {
  label?: React.ReactNode;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Leading icon node. */
  iconLeft?: React.ReactNode;
  /** Helper text under the field. */
  helper?: React.ReactNode;
  /** Error message (overrides helper, turns the field red). */
  error?: string;
  required?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
