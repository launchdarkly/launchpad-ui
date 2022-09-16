import type { ThHTMLAttributes } from 'react';

import camelCase from 'camelcase';
import { cx } from 'classix';

import './styles/Table.css';

type TableHeadCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
  defaultColWidth?:
    | 'zero'
    | 'one-of-twelve'
    | 'two-of-twelve'
    | 'three-of-twelve'
    | 'four-of-twelve'
    | 'five-of-twelve'
    | 'six-of-twelve';
};

const TableHeadCell = ({
  align = 'left',
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
