import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

const TableBody = ({ className, children, ...rest }: TableBodyProps) => {
  const classes = cx('Table-body', className);

  return (
    <tbody {...rest} className={classes}>
      {children}
    </tbody>
  );
};

export { TableBody };
export type { TableBodyProps };
