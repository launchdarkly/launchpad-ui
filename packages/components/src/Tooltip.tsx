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

interface TooltipProps extends Omit<AriaTooltipProps, 'offset' | 'crossOffset'> {}
interface TooltipTriggerProps extends Omit<TooltipTriggerComponentProps, 'delay' | 'closeDelay'> {}

const tooltip = cva(styles.tooltip);

const _Tooltip = (props: TooltipProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaTooltip
			{...props}
			offset={4}
			crossOffset={0}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tooltip({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A tooltip displays a description of an element on hover or focus.
 *
 * https://react-spectrum.adobe.com/react-aria/Tooltip.html
 */
const Tooltip = forwardRef(_Tooltip);

const TooltipTrigger = (props: TooltipTriggerProps) => {
	return <AriaTooltipTrigger {...props} delay={500} closeDelay={250} />;
};

export { Tooltip, TooltipTrigger };
export type { TooltipProps, TooltipTriggerProps };
