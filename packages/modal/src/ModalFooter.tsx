import cx from 'clsx';
import { Component } from 'react';

import './styles/Modal.css';

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
  testId?: string;
};

class ModalFooter extends Component<ModalFooterProps> {
  render() {
    const { className, testId, children } = this.props;
    const classes = cx('Modal-footer', className);

    return (
      <div className={classes} data-test-id={testId}>
        {children}
      </div>
    );
  }
}

export { ModalFooter };
export type { ModalFooterProps };
