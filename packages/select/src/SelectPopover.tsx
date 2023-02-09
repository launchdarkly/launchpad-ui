import type { AriaPopoverProps } from '@react-aria/overlays';
import type { OverlayTriggerState } from '@react-stately/overlays';
import type { ReactNode, RefObject } from 'react';

import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import cx from 'classix';
import { useMemo, useRef } from 'react';

import styles from './styles/Select.module.css';

type SelectPopoverProps = Omit<AriaPopoverProps, 'popoverRef'> & {
  children: ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: RefObject<HTMLDivElement>;
};

const SelectPopover = (props: SelectPopoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    popoverRef = ref,
    state,
    children,
    className,
    isNonModal = true,
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
    const clientWidth = triggerRef.current?.clientWidth || 0;
    const minWidth = 400;
    return clientWidth < minWidth ? minWidth : clientWidth;
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

export { SelectPopover };
export type { SelectPopoverProps };
