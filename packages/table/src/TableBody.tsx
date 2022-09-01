import type { ReactNode } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableBodyProps = {
  className?: string;
  children: ReactNode;
};

const TableBody = ({ className, children, ...props }: TableBodyProps) => {
  const classes = cx('Table-body', className);

  return (
    <tbody {...props} className={classes}>
      {children}
    </tbody>
  );
};

export { TableBody };
export type { TableBodyProps };
