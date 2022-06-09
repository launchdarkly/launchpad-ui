import { Progress } from '@launchpad-ui/progress';
import cx from 'clsx';
import { Component, Suspense } from 'react';

import { ModalTransition } from './ModalTransition';
import { Portal } from './Portal';
import './styles/Modal.css';

type ModalSheetProps = {
  className?: string;
  onCancel?(): void;
  size?: 'small' | 'medium' | 'large' | 'x-large' | 'full';
  returnFocus?: boolean;
  shouldScroll?: boolean;
  withCloseButton?: boolean;
  resetScrollState?(): void;
  children: React.ReactNode;
};

class ModalSheet extends Component<ModalSheetProps> {
  render() {
    const {
      size = 'small',
      children,
      shouldScroll,
      resetScrollState,
      withCloseButton = true,
      ...props
    } = this.props;
    const classes = cx('ModalSheet', `ModalSheet--${size}`);

    return (
      <Portal {...props} className={classes}>
        <ModalTransition {...this.props} transition="slideRight" withCloseButton={withCloseButton}>
          <Suspense fallback={<Progress />}>{children}</Suspense>
        </ModalTransition>
      </Portal>
    );
  }
}

export { ModalSheet };
export type { ModalSheetProps };
