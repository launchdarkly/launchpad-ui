import type { CSSProperties, InputHTMLAttributes } from 'react';

import { cx } from 'classix';

import { Label } from './Label';
import './styles/Form.css';

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  labelClassName?: string;
  labelStyle?: CSSProperties;
};

const Radio = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  checked = false,
  children,
  className,
  disabled = false,
  id,
  labelClassName,
  labelStyle,
  ...rest
}: RadioProps) => {
  const hasAriaLabel = ariaLabel !== undefined || ariaLabelledby !== undefined;

  if (!children && !hasAriaLabel) {
    console.warn(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  }

  return (
    <>
      <input
        {...rest}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className={cx('Form-radio', className)}
        checked={checked}
        disabled={disabled}
        id={id}
        type="radio"
      />
      <Label className={labelClassName} htmlFor={id} style={labelStyle}>
        {disabled ? <span className="Form-label--disabled">{children}</span> : children}
      </Label>
    </>
  );
};

export { Radio };
export type { RadioProps };
