import type { ForwardedRef } from 'react';
import type {
  TooltipProps as AriaTooltipProps,
  TooltipTriggerComponentProps,
  OverlayArrowProps as AriaOverlayArrowProps,
} from 'react-aria-components';

import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  OverlayArrow as AriaOverlayArrow,
} from 'react-aria-components';

import styles from './styles/Tooltip.module.css';

type TooltipProps = Omit<AriaTooltipProps, 'offset' | 'crossOffset'>;
type TooltipTriggerProps = Omit<TooltipTriggerComponentProps, 'delay' | 'closeDelay'>;
type OverlayArrowProps = AriaOverlayArrowProps;

const _Tooltip = ({ className, ...props }: TooltipProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaTooltip
      {...props}
      offset={0}
      crossOffset={0}
      ref={ref}
      className={cx(styles.tooltip, className)}
    />
  );
};

const Tooltip = forwardRef(_Tooltip);

const TooltipTrigger = (props: TooltipTriggerProps) => {
  return <AriaTooltipTrigger {...props} delay={500} closeDelay={0} />;
};

const OverlayArrow = ({ className, ...props }: OverlayArrowProps) => {
  return (
    <AriaOverlayArrow {...props} className={cx(styles.arrow, className)}>
      <svg width={8} height={8} viewBox="0 0 8 8">
        <path d="M0 0 L4 4 L8 0" />
      </svg>
    </AriaOverlayArrow>
  );
};

export { Tooltip, TooltipTrigger, OverlayArrow };
export type { TooltipProps, TooltipTriggerProps, OverlayArrowProps };
