import type { FieldPath } from './utils';

import cx from 'clsx';

import './styles/Form.css';
import { createFieldErrorId } from './utils';

type FieldErrorProps = {
  name: FieldPath;
  errorMessage?: string;
  className?: string;
};

const FieldError = ({ name, errorMessage, className }: FieldErrorProps) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <span
      className={cx('Form-fieldError', className)}
      aria-live="polite"
      id={createFieldErrorId(name)}
    >
      {`Error - ${errorMessage}`}
    </span>
  );
};

export { FieldError };
export type { FieldErrorProps };
