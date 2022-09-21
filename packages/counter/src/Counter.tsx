import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Counter.css';

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
  const classes = cx('Counter', className, subtle && 'Counter--subtle');

  return (
    <span className={classes} data-test-id={testId} {...rest}>
      {value}
    </span>
  );
};

export { Counter };
export type { CounterProps };
