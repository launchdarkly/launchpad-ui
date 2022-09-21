import type { LabelHTMLAttributes } from 'react';

import { cx } from 'classix';

import { RequiredAsterisk } from './RequiredAsterisk';
import './styles/Form.css';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
  'data-test-id'?: string;
};

const Label = ({
  disabled,
  className,
  children,
  required = false,
  optional = false,
  'data-test-id': testId = 'label',
  ...rest
}: LabelProps) => {
  const classes = cx('Form-label', className, disabled && 'Form-label--disabled');

  return (
    <label {...rest} data-test-id={testId} className={classes}>
      {children}
      {optional && !required && <small className="Form-labelOptional">(optional)</small>}
      {required && !optional && <RequiredAsterisk />}
    </label>
  );
};

export { Label };
export type { LabelProps };
