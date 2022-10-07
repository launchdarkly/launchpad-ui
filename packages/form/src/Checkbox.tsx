import type { InputHTMLAttributes } from 'react';

import { forwardRef } from 'react';

import { Label } from './Label';
import styles from './styles/Form.module.css';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * The className to pass into the Checkbox's Label component
   */
  labelClassName?: string;
  'data-test-id'?: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      children,
      disabled,
      checked,
      labelClassName,
      'data-test-id': testId = 'checkbox',
      ...rest
    },
    ref
  ) => {
    const hasAriaLabel = ariaLabel !== undefined || ariaLabelledby !== undefined;
    if (!children && !hasAriaLabel) {
      console.warn(
        'If you do not provide children, you must specify an aria-label for accessibility'
      );
    }

    return (
      <Label className={labelClassName}>
        <input
          {...rest}
          ref={ref}
          checked={checked}
          aria-checked={checked ? 'true' : 'false'}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          className={styles.checkbox}
          disabled={disabled}
          type="checkbox"
          data-test-id={testId}
        />{' '}
        {disabled ? <span className={styles.labelDisabled}>{children}</span> : children}
      </Label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
export type { CheckboxProps };
