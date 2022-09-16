import type { HTMLProps } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableRowProps = HTMLProps<HTMLTableRowElement> & {
  verticalAlign?: 'top' | 'middle' | 'bottom';
};

const TableRow = ({ className, children, verticalAlign, ...rest }: TableRowProps) => {
  const verticalAlignClass = verticalAlign ? `Table-row--${verticalAlign}` : '';
  const classes = cx('Table-row', verticalAlignClass, className);

  return (
    <tr {...rest} className={classes}>
      {children}
    </tr>
  );
};

export { TableRow };
export type { TableRowProps };
