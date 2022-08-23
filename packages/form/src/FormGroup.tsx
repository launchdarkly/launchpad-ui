import type { ReactNode } from 'react';

import { cx } from 'classix';

import './styles/Form.css';

type FormGroupProps = {
  name?: string | string[];
  ignoreValidation?: boolean;
  isInvalid?: boolean;
  className?: string;
  onBlur?: () => void;
  testId?: string;
  children: ReactNode;
};

const FormGroup = (props: FormGroupProps) => {
  const { className, name, ignoreValidation, isInvalid, children, testId, ...other } = props;

  const classes = cx('Form-group', className, !ignoreValidation && isInvalid && 'is-invalid');

  return (
    <div className={classes} data-test-id={testId} {...other}>
      {children}
    </div>
  );
};

export { FormGroup };
export type { FormGroupProps };
