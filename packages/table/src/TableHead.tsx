import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

const TableHead = ({ className, children, ...rest }: TableHeadProps) => {
  const classes = cx('Table-header', className);

  return (
    <thead {...rest} className={classes}>
      {children}
    </thead>
  );
};

export { TableHead };
export type { TableHeadProps };
