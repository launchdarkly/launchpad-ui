import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import type { TooltipProps as AriaTooltipProps, TooltipTriggerComponentProps } from 'react-aria-components/Tooltip';
import { Tooltip as AriaTooltip, TooltipTrigger as AriaTooltipTrigger } from 'react-aria-components/Tooltip';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { PopoverProps } from './Popover';
import { popoverStyles } from './Popover';
import { useLPContextProps } from './utils';

import styles from './styles/Tooltip.module.css';

interface TooltipProps extends AriaTooltipProps, VariantProps<typeof tooltipStyles> {
	ref?: Ref<HTMLDivElement>;
	width?: PopoverProps['width'];
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
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, TooltipContext);
	const { variant = 'default', width = 'default' } = mergedProps;

	return (
		<AriaTooltip
			data-theme={variant === 'default' ? 'dark' : undefined}
			offset={4}
			crossOffset={0}
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				variant === 'popover'
					? tooltipStyles({
							...renderProps,
							variant: null,
							className: popoverStyles({ width, className }),
						})
					: tooltipStyles({ ...renderProps, variant, className }),
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
