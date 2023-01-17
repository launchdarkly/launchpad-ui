import type { AriaPopoverProps } from '@react-aria/overlays';
import type { OverlayTriggerState } from '@react-stately/overlays';
import { ReactNode, RefObject, useLayoutEffect, useMemo } from 'react';

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
  const {
    popoverRef = ref,
    state,
    children,
    className,
    isNonModal,
    triggerRef,
    offset = 8,
  } = props;

  const {
    popoverProps: { style: popoverStyle, ...popoverPropsRest },
  } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  const width = useMemo(() => {
    return triggerRef.current?.clientWidth || undefined;
  }, [triggerRef]);

  return (
    <Overlay>
      <div
        {...popoverPropsRest}
        style={{ ...popoverStyle, width }}
        ref={popoverRef}
        className={cx(styles.popover, className)}
      >
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
};

export { Popover };
export type { PopoverProps };
