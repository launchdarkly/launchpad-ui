import cx from 'clsx';

import { RequiredAsterisk } from './RequiredAsterisk';
import './styles/Form.css';

export type LabelProps = {
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
};

export const Label = ({
  htmlFor,
  disabled,
  className,
  children,
  required = false,
  optional = false,
  ...other
}: LabelProps) => {
  const classes = cx('Form-label', className, { 'Form-label--disabled': disabled });
  return (
    <label {...other} className={classes} htmlFor={htmlFor}>
      {children}
      {optional && !required && <small className="Form-labelOptional u-subtle">(optional)</small>}
      {required && !optional && <RequiredAsterisk />}
    </label>
  );
};
