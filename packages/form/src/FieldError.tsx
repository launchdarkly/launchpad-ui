import type { FieldPath } from './utils';
import type { ComponentProps } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Form.module.css';
import { createFieldErrorId } from './utils';

type FieldErrorProps = ComponentProps<'span'> & {
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
      className={cx(styles.fieldError, className)}
      aria-live="polite"
      data-test-id={testId}
      aria-label="Error"
      id={createFieldErrorId(name)}
    >
      <Icon name="alert-rhombus" size="small" /> {errorMessage}
    </span>
  );
};

export { FieldError };
export type { FieldErrorProps };
