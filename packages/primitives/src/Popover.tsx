import type { AriaPopoverProps } from '@react-aria/overlays';
import type { OverlayTriggerState } from '@react-stately/overlays';
import type { ReactNode, RefObject } from 'react';

import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { useObjectRef } from '@react-aria/utils';
import { cx } from 'classix';
import { useMemo } from 'react';

import { popover } from './styles/Primitives.css';

type PopoverProps = Omit<AriaPopoverProps, 'popoverRef'> & {
  children: ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: RefObject<HTMLDivElement>;
};

const Popover = (props: PopoverProps) => {
  const popoverRef = useObjectRef(props.popoverRef);
  const { state, children, className, isNonModal = true, triggerRef, offset = 8 } = props;

  const {
    popoverProps: { style: popoverStyle, ...popoverPropsRest },
  } = usePopover(
    {
      ...props,
      isNonModal: true,
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
        className={cx(popover, className)}
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
