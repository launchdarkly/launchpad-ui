import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement> & {
  'data-test-id'?: string;
};

const TableHead = ({
  className,
  children,
  'data-test-id': testId = 'table-head',
  ...rest
}: TableHeadProps) => {
  const classes = cx('Table-header', className);

  return (
    <thead {...rest} data-test-id={testId} className={classes}>
      {children}
    </thead>
  );
};

export { TableHead };
export type { TableHeadProps };
