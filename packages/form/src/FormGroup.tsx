import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Form.css';

type FormGroupProps = HTMLAttributes<HTMLDivElement> & {
  name?: string | string[];
  ignoreValidation?: boolean;
  isInvalid?: boolean;
  'data-test-id'?: string;
};

const FormGroup = (props: FormGroupProps) => {
  const {
    className,
    name,
    ignoreValidation,
    isInvalid,
    children,
    'data-test-id': testId = 'form-group',
    ...rest
  } = props;

  const classes = cx('Form-group', className, !ignoreValidation && isInvalid && 'is-invalid');

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      {children}
    </div>
  );
};

export { FormGroup };
export type { FormGroupProps };
