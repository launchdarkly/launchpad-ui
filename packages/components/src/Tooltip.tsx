import type { ForwardedRef } from 'react';
import type {
  TooltipProps as AriaTooltipProps,
  TooltipTriggerComponentProps,
} from 'react-aria-components';

import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
} from 'react-aria-components';

import styles from './styles/Tooltip.module.css';

type TooltipProps = Omit<AriaTooltipProps, 'offset' | 'crossOffset'>;
type TooltipTriggerProps = Omit<TooltipTriggerComponentProps, 'delay' | 'closeDelay'>;

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

export { Tooltip, TooltipTrigger };
export type { TooltipProps, TooltipTriggerProps };
