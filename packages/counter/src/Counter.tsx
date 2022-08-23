import { cx } from 'classix';

import './styles/Counter.css';

type CounterProps = {
  value: number;
  className?: string;
  subtle?: boolean;
};

const Counter = ({ value, className, subtle }: CounterProps) => {
  const classes = cx('Counter', className, subtle && 'Counter--subtle');

  return <span className={classes}>{value}</span>;
};

export { Counter };
export type { CounterProps };
