import type { InputHTMLAttributes } from 'react';

import { forwardRef } from 'react';

import { Label } from './Label';
import './styles/Form.css';

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
      ...other
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
          {...other}
          ref={ref}
          checked={checked}
          aria-checked={checked ? 'true' : 'false'}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          className="Form-checkbox"
          disabled={disabled}
          type="checkbox"
        />{' '}
        {disabled ? <span className="Form-label--disabled">{children}</span> : children}
      </Label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
export type { CheckboxProps };
