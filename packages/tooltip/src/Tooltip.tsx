import type { PopoverProps } from '@launchpad-ui/popover';
import type { ReactNode } from 'react';

import { Popover } from '@launchpad-ui/popover';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Tooltip.module.css';

type TooltipProps = Omit<PopoverProps, 'children'> & {
  className?: string;
  children?: ReactNode;
};

const TooltipBase = ({
  className,
  children,
  targetClassName,
  hoverCloseDelay = 0,
  'data-test-id': testId = 'tooltip',
  ...props
}: TooltipProps) => {
  return (
    <Popover
      enforceFocus={false}
      interactionKind="hover-or-focus"
      hoverCloseDelay={hoverCloseDelay}
      popoverClassName={cx(styles.Tooltip, className)}
      popoverContentClassName={styles['Popover-content']}
      targetClassName={targetClassName}
      data-test-id={testId}
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
