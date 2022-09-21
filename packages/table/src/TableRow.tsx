import type { HTMLProps } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableRowProps = HTMLProps<HTMLTableRowElement> & {
  verticalAlign?: 'top' | 'middle' | 'bottom';
  'data-test-id'?: string;
};

const TableRow = ({
  className,
  children,
  verticalAlign,
  'data-test-id': testId = 'table-row',
  ...rest
}: TableRowProps) => {
  const verticalAlignClass = verticalAlign ? `Table-row--${verticalAlign}` : '';
  const classes = cx('Table-row', verticalAlignClass, className);

  return (
    <tr {...rest} className={classes} data-test-id={testId}>
      {children}
    </tr>
  );
};

export { TableRow };
export type { TableRowProps };
