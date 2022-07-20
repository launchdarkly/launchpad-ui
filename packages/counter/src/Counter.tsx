import cx from 'clsx';

import './styles/Counter.css';

type CounterProps = {
  value: number;
  className?: string;
  subtle?: boolean;
};

const Counter = ({ value, className, subtle }: CounterProps) => {
  const classes = cx('Counter', className, {
    'Counter--subtle': subtle,
  });

  return <span className={classes}>{value}</span>;
};

export { Counter };
export type { CounterProps };
