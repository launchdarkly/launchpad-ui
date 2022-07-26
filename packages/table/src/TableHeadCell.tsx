import type { TableColumnWidths } from './types';

import cx from 'clsx';

import './styles/Table.css';
import { AlignType } from './types';

type TableHeadCellProps = {
  align?: AlignType;
  'aria-label'?: string;
  className?: string;
  children?: React.ReactNode;
  defaultColWidth?: TableColumnWidths;
  id?: string;
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
};

const TableHeadCell = ({
  align = AlignType.LEFT,
  'aria-label': ariaLabel,
  className,
  children,
  defaultColWidth,
  id,
  scope = 'col',
}: TableHeadCellProps) => {
  const width = defaultColWidth ? `Table-cell--width-${defaultColWidth}` : '';
  const classes = cx('Table-cell', 'Table-cell--head', `Table-cell--${align}`, width, className);

  return (
    <th aria-label={ariaLabel} className={classes} id={id} scope={scope}>
      {children}
    </th>
  );
};

export { TableHeadCell };
export type { TableHeadCellProps };
