import type { Offset, PopoverPlacement } from '@launchpad-ui/popover';
import type { CSSProperties, Ref } from 'react';

import { Popover } from '@launchpad-ui/popover';
import cx from 'clsx';
import { forwardRef } from 'react';

import './styles.css';

type TooltipProps = {
  isOpen?: boolean;
  content?: string | JSX.Element;
  className?: string;
  targetClassName?: string;
  disablePlacementFlip?: boolean;
  allowBoundaryElementOverflow?: boolean;
  placement?: PopoverPlacement;
  target?: string | JSX.Element;
  targetElementRef?: Ref<Element>;
  restrictWidth?: boolean;
  rootElementStyle?: CSSProperties;
  onInteraction?(isOpen: boolean): void;
  children?: React.ReactNode;
  hoverCloseDelay?: number;
  offset?: Offset;
  enableArrow?: boolean;
  interactionKind?: 'click' | 'hover-or-focus' | 'hover-target-only' | 'hover' | undefined;
};

const TooltipComponent = ({
  className,
  children,
  targetClassName,
  hoverCloseDelay = 0,
  ...props
}: TooltipProps) => {
  return (
    <Popover
      enforceFocus={false}
      interactionKind="hover-or-focus"
      hoverCloseDelay={hoverCloseDelay}
      popoverClassName={cx('Tooltip', className)}
      targetClassName={targetClassName}
      {...props}
    >
      {children}
    </Popover>
  );
};

const Tooltip = forwardRef<Element, TooltipProps>((props, ref) => (
  <TooltipComponent {...props} targetElementRef={ref} />
));

Tooltip.displayName = 'Tooltip';

export { Tooltip };
export type { TooltipProps };
