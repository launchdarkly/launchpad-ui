import type { AriaPopoverProps } from '@react-aria/overlays';
import type { OverlayTriggerState } from '@react-stately/overlays';
import type { CSSProperties, ReactNode, RefObject } from 'react';

import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { cx } from 'classix';

import { popover, underlay } from './styles/Primitives.css';

type PopoverProps = AriaPopoverProps & {
  children: ReactNode;
  state: OverlayTriggerState;
  className?: string;
  style?: CSSProperties;
};

const Popover = (props: PopoverProps) => {
  const { state, children, className, style } = props;

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      offset: props.offset ?? 8,
    },
    state
  );

  return (
    <Overlay>
      {!props.isNonModal && <div {...underlayProps} className={underlay} />}
      <div
        {...popoverProps}
        style={{ ...popoverProps.style, ...style }}
        ref={props.popoverRef as RefObject<HTMLDivElement>}
        className={cx(popover, className)}
      >
        {!props.isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
};

export { Popover };
export type { PopoverProps };
