import { cx } from 'classix';

import './styles/Modal.css';

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};

const ModalBody = ({ className, children, ...other }: ModalBodyProps) => {
  const classes = cx('Modal-body', className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

export { ModalBody };
export type { ModalBodyProps };
