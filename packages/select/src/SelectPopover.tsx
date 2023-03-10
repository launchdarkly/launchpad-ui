import type { ReactNode, RefObject } from 'react';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import { useObjectRef } from '@react-aria/utils';
import cx from 'classix';
import { useMemo } from 'react';
import { usePopover, DismissButton, Overlay } from 'react-aria';

import styles from './styles/Select.module.css';

type SelectPopoverProps = Omit<AriaPopoverProps, 'popoverRef'> & {
  children: ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: RefObject<HTMLDivElement>;
};

const SelectPopover = (props: SelectPopoverProps) => {
  const popoverRef = useObjectRef(props.popoverRef);
  const { state, children, className, isNonModal = true, triggerRef, offset = 8 } = props;

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
