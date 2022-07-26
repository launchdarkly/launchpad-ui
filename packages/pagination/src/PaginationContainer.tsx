import cx from 'clsx';

import './styles/Pagination.css';

type PaginationContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const PaginationContainer = ({ className, children }: PaginationContainerProps) => {
  return (
    <div className={cx('Pagination', className)}>
      <div className="Pagination--body">{children}</div>
    </div>
  );
};

export { PaginationContainer };
export type { PaginationContainerProps };
