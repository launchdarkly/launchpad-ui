import type { HTMLAttributes } from 'react';

import { Close } from '@launchpad-ui/icons';
import { cx } from 'classix';

import './styles/Modal.css';

type ModalHeaderProps = HTMLAttributes<HTMLDivElement> & {
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
  ...rest
}: ModalHeaderProps) => {
  const classes = cx('Modal-header', className);

  return (
    <div {...rest} className={classes}>
      <h2 id={titleID || 'Modal-title'} className={cx('Modal-title', titleClassName)}>
        {children}
      </h2>
      {closeable && <Close className="Modal-close" onClick={onClose} size="tiny" />}
    </div>
  );
};

export { ModalHeader };
export type { ModalHeaderProps };
