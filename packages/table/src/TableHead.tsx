import { cx } from 'classix';

import './styles/Table.css';

type TableHeadProps = {
  className?: string;
  children: React.ReactNode;
};

const TableHead = ({ className, children, ...props }: TableHeadProps) => {
  const classes = cx('Table-header', className);

  return (
    <thead {...props} className={classes}>
      {children}
    </thead>
  );
};

export { TableHead };
export type { TableHeadProps };
