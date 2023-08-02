import type { AriaPopoverProps } from '@react-aria/overlays';
import type { OverlayTriggerState } from '@react-stately/overlays';
import type { ReactNode, RefObject } from 'react';

import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { cx } from 'classix';
import { useMemo } from 'react';

import { popover } from './styles/Primitives.css';

type PopoverProps = AriaPopoverProps & {
  children: ReactNode;
  state: OverlayTriggerState;
  className?: string;
};

const Popover = (props: PopoverProps) => {
  const { state, children, className, isNonModal = true, triggerRef, offset = 8 } = props;

  const { popoverProps } = usePopover(
    {
      ...props,
      isNonModal: true,
      offset,
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
        {...popoverProps}
        style={{ ...popoverProps.style, width }}
        ref={props.popoverRef as RefObject<HTMLDivElement>}
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
