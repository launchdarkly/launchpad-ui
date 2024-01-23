import type { ForwardedRef } from 'react';
import type {
  TooltipProps as AriaTooltipProps,
  TooltipTriggerComponentProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Tooltip.module.css';

type TooltipProps = Omit<AriaTooltipProps, 'offset' | 'crossOffset'>;
type TooltipTriggerProps = Omit<TooltipTriggerComponentProps, 'delay' | 'closeDelay'>;

const tooltip = cva(styles.tooltip);

const _Tooltip = (props: TooltipProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaTooltip
      {...props}
      offset={0}
      crossOffset={0}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tooltip({ ...renderProps, className })
      )}
    />
  );
};

const Tooltip = forwardRef(_Tooltip);

const TooltipTrigger = (props: TooltipTriggerProps) => {
  return <AriaTooltipTrigger {...props} delay={500} closeDelay={0} />;
};

export { Tooltip, TooltipTrigger };
export type { TooltipProps, TooltipTriggerProps };
