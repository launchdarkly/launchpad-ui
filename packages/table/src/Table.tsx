import cx from 'clsx';

import './styles/Table.css';

type TableProps = {
  auto?: boolean;
  compact?: boolean;
  children: React.ReactNode;
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
    {
      'Table--auto': auto,
      'Table--compact': compact,
      'Table--resourceTable': isResourceTable,
    },
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
