import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Counter.css';

type CounterProps = HTMLAttributes<HTMLSpanElement> & {
  value: number;
  subtle?: boolean;
};

const Counter = ({ value, className, subtle, ...rest }: CounterProps) => {
  const classes = cx('Counter', className, subtle && 'Counter--subtle');

  return (
    <span className={classes} {...rest}>
      {value}
    </span>
  );
};

export { Counter };
export type { CounterProps };
