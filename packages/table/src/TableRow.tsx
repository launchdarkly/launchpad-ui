import type { TableVerticalAlignType } from './types';
import type { HTMLProps } from 'react';

import { cx } from 'classix';

import './styles/Table.css';

type TableRowProps = HTMLProps<HTMLTableRowElement> & {
  testId?: string;
  verticalAlign?: TableVerticalAlignType;
};

const TableRow = ({ className, children, testId, verticalAlign, ...props }: TableRowProps) => {
  const verticalAlignClass = verticalAlign ? `Table-row--${verticalAlign}` : '';
  const classes = cx('Table-row', verticalAlignClass, className);

  return (
    <tr {...props} className={classes} data-test-id={testId}>
      {children}
    </tr>
  );
};

export { TableRow };
export type { TableRowProps };
