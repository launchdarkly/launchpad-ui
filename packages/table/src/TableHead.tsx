import type { ReactNode } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableHeadProps = {
  className?: string;
  children: ReactNode;
};

const TableHead = ({ className, children, ...props }: TableHeadProps) => {
  const classes = cx('Table-header', className);

  return (
    <thead {...props} className={classes}>
      {children}
    </thead>
  );
};

export { TableHead };
export type { TableHeadProps };
