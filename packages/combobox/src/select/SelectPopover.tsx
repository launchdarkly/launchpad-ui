import type { ReactNode, RefObject } from 'react';

import { FocusScope } from '@react-aria/focus';
import {
  DismissButton,
  OverlayContainer,
  useOverlay,
  useOverlayPosition,
} from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';
import { useLayoutEffect, useRef } from 'react';

type PopoverProps = {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement>;
};

const SelectPopover = ({ isOpen, onClose, children, className, triggerRef }: PopoverProps) => {
  const ref = useRef(null);

  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      isDismissable: true,
      shouldCloseOnBlur: true,
    },
    ref
  );

  const { overlayProps: positionProps, updatePosition } = useOverlayPosition({
    isOpen,
    offset: 2,
    containerPadding: 0,
    overlayRef: ref,
    targetRef: triggerRef,
    placement: 'bottom start',
  });

  // TODO: Remove once this is solved https://github.com/adobe/react-spectrum/blob/9ca62f94405cb8b930bd155f6e44c4854f0a20f3/packages/@react-spectrum/picker/src/Picker.tsx#L99
  useLayoutEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        updatePosition();
      });
    }
  }, [isOpen, updatePosition]);

  const style = {
    ...positionProps.style,
    [`--select-width`]: triggerRef.current ? `${triggerRef.current.offsetWidth}px` : undefined,
  };

  return (
    <OverlayContainer>
      <div
        {...mergeProps(overlayProps, positionProps)}
        ref={ref}
        className={className}
        style={style}
      >
        <FocusScope restoreFocus>
          <DismissButton onDismiss={onClose} />
          {children}
          <DismissButton onDismiss={onClose} />
        </FocusScope>
      </div>
    </OverlayContainer>
  );
};

export { SelectPopover };
