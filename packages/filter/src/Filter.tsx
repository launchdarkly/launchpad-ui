import cx from 'clsx';

import './styles/Filter.css';

type FilterProps = {
  className?: string;
  children: React.ReactNode;
};

const Filter = ({ children, className }: FilterProps) => {
  return (
    <div className={cx('Filter', className)}>
      <span>{children}</span>
    </div>
  );
};

export { Filter };
export type { FilterProps };
