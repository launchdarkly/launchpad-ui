import type { TableHTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  auto?: boolean;
  compact?: boolean;
  isResourceTable?: boolean;
  summary?: string;
  'data-test-id'?: string;
};

const Table = ({
  auto,
  compact,
  className,
  children,
  isResourceTable,
  'data-test-id': testId = 'table',
  ...rest
}: TableProps) => {
  const classes = cx(
    'Table',
    auto && 'Table--auto',
    compact && 'Table--compact',
    isResourceTable && 'Table--resourceTable',
    className
  );

  return (
    <table {...rest} data-test-id={testId} className={classes}>
      {children}
    </table>
  );
};

export { Table };
export type { TableProps };
