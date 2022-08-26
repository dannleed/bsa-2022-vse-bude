import React from 'react';
import * as styles from './styles';
import type { InputProps } from './types';

const InputInner = (
  { variant, error, id, label, type, labelRequiredMark, ...props }: InputProps,
  ref,
) => (
  <div css={styles.inputWrapper}>
    {label && (
      <label data-variant={variant} css={styles.label} htmlFor={id}>
        {label}
        {labelRequiredMark && <span>*</span>}
      </label>
    )}
    <input
      ref={ref}
      css={styles.input}
      data-variant={variant}
      data-status={error ? 'error' : 'successfully'}
      type={type}
      id={id}
      {...props}
    />
    {error && <p css={styles.errorMessage}>{error}</p>}
  </div>
);
export const Input = React.forwardRef(InputInner);
