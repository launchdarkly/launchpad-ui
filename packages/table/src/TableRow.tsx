import type { TableVerticalAlignType } from './types';

import cx from 'clsx';

import './styles/Table.css';

type TableRowProps = React.HTMLProps<HTMLTableRowElement> & {
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
