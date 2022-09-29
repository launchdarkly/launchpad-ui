import type { HTMLProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Table.module.css';

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
  const verticalAlignClass = verticalAlign ? styles[`Table-row--${verticalAlign}`] : '';
  const classes = cx(styles['Table-row'], verticalAlignClass, className);

  return (
    <tr {...rest} className={classes} data-test-id={testId}>
      {children}
    </tr>
  );
};

export { TableRow };
export type { TableRowProps };
