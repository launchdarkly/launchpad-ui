import type { TableColumnWidths } from './types';

import camelCase from 'camelcase';
import cx from 'clsx';

import './styles/Table.css';
import { TableAlignType } from './types';

type TableHeadCellProps = {
  align?: TableAlignType;
  'aria-label'?: string;
  className?: string;
  children?: React.ReactNode;
  defaultColWidth?: TableColumnWidths;
  id?: string;
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
};

const TableHeadCell = ({
  align = TableAlignType.LEFT,
  'aria-label': ariaLabel,
  className,
  children,
  defaultColWidth,
  id,
  scope = 'col',
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
    <th aria-label={ariaLabel} className={classes} id={id} scope={scope}>
      {children}
    </th>
  );
};

export { TableHeadCell };
export type { TableHeadCellProps };
