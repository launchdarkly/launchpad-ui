import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type FormHintProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
};

const FormHint = ({
  className,
  children,
  'data-test-id': testId = 'form-hint',
  ...rest
}: FormHintProps) => {
  const classes = cx(styles.hint, className);

  return (
    <div {...rest} data-test-id={testId} className={classes}>
      {children}
    </div>
  );
};

export { FormHint };
export type { FormHintProps };
