import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type RequiredAsteriskProps = HTMLAttributes<HTMLSpanElement> & {
  'data-test-id'?: string;
};

const RequiredAsterisk = ({
  className,
  'data-test-id': testId = 'required-asterisk',
  ...rest
}: RequiredAsteriskProps) => {
  const classes = cx(styles.requiredAsterisk, className);

  return (
    <span {...rest} data-test-id={testId} className={classes}>
      *
    </span>
  );
};

export { RequiredAsterisk };
export type { RequiredAsteriskProps };
