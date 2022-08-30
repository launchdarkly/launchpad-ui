import type { ReactNode } from 'react';

import { Close, IconSize } from '@launchpad-ui/icons';
import { cx } from 'classix';

import './styles/Modal.css';

type ModalHeaderProps = {
  children: ReactNode;
  className?: string;
  closeable?: boolean;
  titleID?: string;
  titleClassName?: string;
  onClose?(): void;
};

const ModalHeader = ({
  className,
  closeable = false,
  onClose = () => undefined,
  children,
  titleID,
  titleClassName,
}: ModalHeaderProps) => {
  const classes = cx('Modal-header', className);

  return (
    <div className={classes}>
      <h2 id={titleID || 'Modal-title'} className={cx('Modal-title', titleClassName)}>
        {children}
      </h2>
      {closeable && <Close className="Modal-close" onClick={onClose} size={IconSize.TINY} />}
    </div>
  );
};

export { ModalHeader };
export type { ModalHeaderProps };
