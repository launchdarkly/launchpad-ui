import type { TableColumnWidths } from './types';
import type { ThHTMLAttributes } from 'react';

import camelCase from 'camelcase';
import { cx } from 'classix';

import './styles/Table.css';
import { TableAlignType } from './types';

type TableHeadCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
  defaultColWidth?: TableColumnWidths;
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
};

const TableHeadCell = ({
  align = TableAlignType.LEFT,
  className,
  children,
  defaultColWidth,
  scope = 'col',
  ...rest
}: TableHeadCellProps) => {
  const width = camelCase(`width-${defaultColWidth}`);
  const widthClass = defaultColWidth ? `Table-cell--${width}` : '';
  const classes = cx(
    'Table-cell',
    'Table-cell--head',
    `Table-cell--${align}`,
    widthClass,
    className
  );

  return (
    <th {...rest} className={classes} scope={scope}>
      {children}
    </th>
  );
};

export { TableHeadCell };
export type { TableHeadCellProps };
