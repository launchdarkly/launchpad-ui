import cx from 'clsx';
import { Component } from 'react';

import './styles/Modal.css';

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};

class ModalBody extends Component<ModalBodyProps> {
  render() {
    const { className, children, ...other } = this.props;
    const classes = cx('Modal-body', className);

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
  }
}

export { ModalBody };
export type { ModalBodyProps };
