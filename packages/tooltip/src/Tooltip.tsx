import type { PopoverProps } from '@launchpad-ui/popover';
import type { ReactNode } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { Popover } from '@launchpad-ui/popover';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Tooltip.module.css';

type TooltipProps = Omit<PopoverProps, 'children'> & {
	className?: string;
	children?: ReactNode;
};

/**
 * @deprecated use `Tooltip` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-overlays-tooltip--docs
 */
const TooltipBase = ({
	className,
	children,
	targetClassName,
	hoverCloseDelay = 0,
	'data-test-id': testId = 'tooltip',
	popoverContentClassName,
	...props
}: TooltipProps) => {
	return (
		<Popover
			{...addLaunchPadAttribution('Tooltip')}
			enforceFocus={false}
			interactionKind="hover-or-focus"
			hoverCloseDelay={hoverCloseDelay}
			popoverClassName={cx(styles.Tooltip, className)}
			popoverContentClassName={cx(popoverContentClassName, styles['Tooltip-popover-content'])}
			targetClassName={targetClassName}
			data-test-id={testId}
			{...props}
		>
			{children}
		</Popover>
	);
};

/**
 * @deprecated use `Tooltip` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-overlays-tooltip--docs
 */
const Tooltip = forwardRef<Element, TooltipProps>((props, ref) => (
	<TooltipBase {...props} targetElementRef={ref} />
));

Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipBase };
export type { TooltipProps };
