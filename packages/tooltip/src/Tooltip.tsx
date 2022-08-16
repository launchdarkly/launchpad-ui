import type { PopoverProps } from '@launchpad-ui/popover';

import { Popover, PopoverInteractionKind } from '@launchpad-ui/popover';
import cx from 'clsx';
import { forwardRef } from 'react';

import './styles/Tooltip.css';

type TooltipProps = Omit<PopoverProps, 'children'> & {
  className?: string;
  children?: React.ReactNode;
};

const TooltipBase = ({
  className,
  children,
  targetClassName,
  hoverCloseDelay = 0,
  ...props
}: TooltipProps) => {
  return (
    <Popover
      enforceFocus={false}
      interactionKind={PopoverInteractionKind.HOVER_OR_FOCUS}
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
  <TooltipBase {...props} targetElementRef={ref} />
));

Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipBase };
export type { TooltipProps };
