import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type {
	TooltipProps as AriaTooltipProps,
	TooltipTriggerComponentProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	Tooltip as AriaTooltip,
	TooltipTrigger as AriaTooltipTrigger,
	composeRenderProps,
} from 'react-aria-components';

import popoverStyles from './styles/Popover.module.css';
import styles from './styles/Tooltip.module.css';

interface TooltipProps extends AriaTooltipProps, VariantProps<typeof tooltip> {
	ref?: Ref<HTMLDivElement>;
}
interface TooltipTriggerProps extends TooltipTriggerComponentProps {}

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

/**
 * A tooltip displays a description of an element on hover or focus.
 *
 * https://react-spectrum.adobe.com/react-aria/Tooltip.html
 */
const Tooltip = ({ variant = 'default', ref, ...props }: TooltipProps) => {
	return (
		<AriaTooltip
			data-theme={variant === 'default' ? 'dark' : undefined}
			offset={4}
			crossOffset={0}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tooltip({ ...renderProps, variant, className }),
			)}
			data-trigger={variant === 'popover' ? 'DialogTrigger' : undefined}
		/>
	);
};

const TooltipTrigger = (props: TooltipTriggerProps) => {
	return <AriaTooltipTrigger delay={500} closeDelay={250} {...props} />;
};

export { Tooltip, TooltipTrigger };
export type { TooltipProps, TooltipTriggerProps };
