import type { CSSProperties, ReactNode } from 'react';

import { cx } from 'classix';

import { RequiredAsterisk } from './RequiredAsterisk';
import './styles/Form.css';

type LabelProps = {
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  hidden?: boolean;
};

const Label = ({
  htmlFor,
  disabled,
  className,
  children,
  required = false,
  optional = false,
  ...other
}: LabelProps) => {
  const classes = cx('Form-label', className, disabled && 'Form-label--disabled');
  return (
    <label {...other} className={classes} htmlFor={htmlFor}>
      {children}
      {optional && !required && <small className="Form-labelOptional">(optional)</small>}
      {required && !optional && <RequiredAsterisk />}
    </label>
  );
};

export { Label };
export type { LabelProps };
