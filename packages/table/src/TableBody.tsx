import cx from 'clsx';

import './styles/Table.css';

type TableBodyProps = {
  className?: string;
  children: React.ReactNode;
};

const TableBody = ({ className, children, ...props }: TableBodyProps) => {
  const classes = cx('Table-body', className);

  return (
    <tbody {...props} className={classes}>
      {children}
    </tbody>
  );
};

export { TableBody };
export type { TableBodyProps };
