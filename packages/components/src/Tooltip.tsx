import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type {
	TooltipProps as AriaTooltipProps,
	ContextValue,
	TooltipTriggerComponentProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Tooltip as AriaTooltip,
	TooltipTrigger as AriaTooltipTrigger,
	composeRenderProps,
} from 'react-aria-components';

import { popoverStyles } from './Popover';
import styles from './styles/Tooltip.module.css';
import { useLPContextProps } from './utils';

interface TooltipProps extends AriaTooltipProps, VariantProps<typeof tooltipStyles> {
	ref?: Ref<HTMLDivElement>;
}
interface TooltipTriggerProps extends TooltipTriggerComponentProps {}

const TooltipContext = createContext<ContextValue<TooltipProps, HTMLDivElement>>(null);

const tooltipStyles = cva(styles.base, {
	variants: {
		variant: {
			default: styles.tooltip,
			popover: popoverStyles({ width: 'default' }),
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
const Tooltip = ({ ref, ...props }: TooltipProps) => {
	[props, ref] = useLPContextProps(props, ref, TooltipContext, 'Tooltip');
	const { variant = 'default' } = props;

	return (
		<AriaTooltip
			data-theme={variant === 'default' ? 'dark' : undefined}
			offset={4}
			crossOffset={0}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tooltipStyles({ ...renderProps, variant, className }),
			)}
			data-trigger={variant === 'popover' ? 'DialogTrigger' : undefined}
		/>
	);
};

const TooltipTrigger = (props: TooltipTriggerProps) => {
	const { delay = 500, closeDelay = 250 } = props;
	return <AriaTooltipTrigger delay={delay} closeDelay={closeDelay} {...props} />;
};

export { Tooltip, TooltipContext, TooltipTrigger, tooltipStyles };
export type { TooltipProps, TooltipTriggerProps };
