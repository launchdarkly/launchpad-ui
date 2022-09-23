import type { ThHTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Table.module.css';

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
  const widthClass = defaultColWidth ? styles[`Table-cell--width-${defaultColWidth}`] : '';
  const classes = cx(
    styles['Table-cell'],
    styles['Table-cell--head'],
    styles[`Table-cell--${align}`],
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
