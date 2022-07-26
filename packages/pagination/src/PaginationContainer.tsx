import cx from 'clsx';

import './styles/Pagination.css';

type PaginationContainerProps = {
  className?: string;
  children?: React.ReactNode;
  resourceName: string;
};

const PaginationContainer = ({ className, children, resourceName }: PaginationContainerProps) => {
  return (
    <div
      className={cx('Pagination', className)}
      role="navigation"
      aria-label={`Pagination for ${resourceName} list.`}
    >
      <div className="Pagination--body">{children}</div>
    </div>
  );
};

export { PaginationContainer };
export type { PaginationContainerProps };
