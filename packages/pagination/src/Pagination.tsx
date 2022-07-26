import cx from 'clsx';

import './styles/Pagination.css';

type PaginationProps = {
  className?: string;
  children: React.ReactNode;
};

const Pagination = ({ children, className }: PaginationProps) => {
  return (
    <div className={cx('Pagination', className)}>
      <span>{children}</span>
    </div>
  );
};

export { Pagination };
export type { PaginationProps };
