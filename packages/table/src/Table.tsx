import type { ReactNode } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableProps = {
  auto?: boolean;
  compact?: boolean;
  children: ReactNode;
  className?: string;
  isResourceTable?: boolean;
  summary?: string;
  testId?: string;
};

const Table = ({
  auto,
  compact,
  className,
  children,
  isResourceTable,
  testId,
  ...props
}: TableProps) => {
  const classes = cx(
    'Table',
    auto && 'Table--auto',
    compact && 'Table--compact',
    isResourceTable && 'Table--resourceTable',
    className
  );

  return (
    <table {...props} className={classes} data-test-id={testId}>
      {children}
    </table>
  );
};

export { Table };
export type { TableProps };
