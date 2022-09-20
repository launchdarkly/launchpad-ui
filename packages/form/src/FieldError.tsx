import type { FieldPath } from './utils';
import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Form.css';
import { createFieldErrorId } from './utils';

type FieldErrorProps = HTMLAttributes<HTMLSpanElement> & {
  name: FieldPath;
  errorMessage?: string;
  'data-test-id'?: string;
};

const FieldError = ({
  name,
  errorMessage,
  className,
  'data-test-id': testId = 'field-error',
  ...rest
}: FieldErrorProps) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <span
      {...rest}
      className={cx('Form-fieldError', className)}
      aria-live="polite"
      data-test-id={testId}
      id={createFieldErrorId(name)}
    >
      {`Error - ${errorMessage}`}
    </span>
  );
};

export { FieldError };
export type { FieldErrorProps };
