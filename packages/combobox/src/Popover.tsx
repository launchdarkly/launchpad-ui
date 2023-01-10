import type { AriaPopoverProps } from '@react-aria/overlays';
import type { OverlayTriggerState } from '@react-stately/overlays';
import type { ReactNode, RefObject } from 'react';

import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import cx from 'classix';
import { useRef } from 'react';

import styles from './styles/Combobox.module.css';

type PopoverProps = Omit<AriaPopoverProps, 'popoverRef'> & {
  children: ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: RefObject<HTMLDivElement>;
};

const Popover = (props: PopoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { popoverRef = ref, state, children, className, isNonModal } = props;

  const { popoverProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      <div {...popoverProps} ref={popoverRef} className={cx(styles.popover, className)}>
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
};

export { Popover };
export type { PopoverProps };
