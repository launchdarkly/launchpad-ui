import type { LabelHTMLAttributes } from 'react';

import { cx } from 'classix';

import { RequiredAsterisk } from './RequiredAsterisk';
import './styles/Form.css';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
};

const Label = ({
  disabled,
  className,
  children,
  required = false,
  optional = false,
  ...rest
}: LabelProps) => {
  const classes = cx('Form-label', className, disabled && 'Form-label--disabled');

  return (
    <label {...rest} className={classes}>
      {children}
      {optional && !required && <small className="Form-labelOptional">(optional)</small>}
      {required && !optional && <RequiredAsterisk />}
    </label>
  );
};

export { Label };
export type { LabelProps };
