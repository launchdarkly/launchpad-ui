import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Counter.module.css';

type CounterProps = HTMLAttributes<HTMLSpanElement> & {
  value: number;
  subtle?: boolean;
  children?: never;
  'data-test-id'?: string;
};

const Counter = ({
  value,
  className,
  subtle,
  'data-test-id': testId = 'counter',
  ...rest
}: CounterProps) => {
  const classes = cx(styles.Counter, className, subtle && styles['Counter--subtle']);

  return (
    <span className={classes} data-test-id={testId} data-fake="fake" {...rest}>
      {value}
    </span>
  );
};

export { Counter };
export type { CounterProps };
