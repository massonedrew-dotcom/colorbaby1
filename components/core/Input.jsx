import React from 'react';

/**
 * Color Baby House — Input
 * Rounded text field with label, optional leading icon and helper/error text.
 */
export function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  iconLeft = null,
  helper,
  error = '',
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const invalid = Boolean(error);

  const borderColor = invalid
    ? 'var(--color-danger)'
    : focused
      ? 'var(--color-primary)'
      : 'var(--color-border-strong)';

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label && (
        <span style={{ font: 'var(--font-label)', color: 'var(--color-text)' }}>
          {label}{required && <span style={{ color: 'var(--color-primary-text)' }}> *</span>}
        </span>
      )}
      <span style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        background: disabled ? 'var(--sand-50)' : 'var(--color-surface)',
        border: `2px solid ${borderColor}`,
        borderRadius: 'var(--radius-pill)',
        padding: '0 18px', height: '52px',
        boxShadow: focused && !invalid ? 'var(--ring)' : 'none',
        transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      }}>
        {iconLeft && <span style={{ color: 'var(--color-text-subtle)', display: 'flex' }}>{iconLeft}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            font: 'var(--font-body-r)', color: 'var(--color-text)', minWidth: 0,
          }}
          {...rest}
        />
      </span>
      {(helper || error) && (
        <span style={{
          font: 'var(--font-body-r)', fontSize: '13px',
          color: invalid ? 'var(--color-danger)' : 'var(--color-text-muted)',
          paddingLeft: '18px',
        }}>
          {error || helper}
        </span>
      )}
    </label>
  );
}
