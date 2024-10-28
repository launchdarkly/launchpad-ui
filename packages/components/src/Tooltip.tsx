import type { VariantProps } from 'class-variance-authority';
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

import popoverStyles from './styles/Popover.module.css';
import styles from './styles/Tooltip.module.css';

interface TooltipProps
	extends Omit<AriaTooltipProps, 'offset' | 'crossOffset'>,
		VariantProps<typeof tooltip> {}
interface TooltipTriggerProps extends Omit<TooltipTriggerComponentProps, 'closeDelay'> {}

const tooltip = cva(styles.base, {
	variants: {
		variant: {
			default: styles.tooltip,
			popover: popoverStyles.popover,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

const _Tooltip = (
	{ variant = 'default', ...props }: TooltipProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaTooltip
			data-theme={variant === 'default' ? 'dark' : undefined}
			{...props}
			offset={4}
			crossOffset={0}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tooltip({ ...renderProps, variant, className }),
			)}
			data-trigger={variant === 'popover' ? 'DialogTrigger' : undefined}
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
	return <AriaTooltipTrigger delay={500} {...props} closeDelay={250} />;
};

export { Tooltip, TooltipTrigger };
export type { TooltipProps, TooltipTriggerProps };
