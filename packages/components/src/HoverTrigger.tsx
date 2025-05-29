import type { TooltipTriggerComponentProps } from 'react-aria-components';

import { PressResponder } from '@react-aria/interactions';
import { useRef } from 'react';
import { useHover, useOverlayTrigger } from 'react-aria';
import { OverlayTriggerStateContext, PopoverContext, Provider } from 'react-aria-components';
import { useTooltipTriggerState } from 'react-stately';

interface HoverTriggerProps extends TooltipTriggerComponentProps {}

/**
 * A hover popover allows sighted users to preview content available behind a link (inaccessible to keyboard users).
 */
const HoverTrigger = ({ children, ...props }: HoverTriggerProps) => {
	const ref = useRef(null);
	const triggerRef = useRef(null);
	const { delay = 500, closeDelay = 250 } = props;

	const state = {
		...useTooltipTriggerState({ delay, closeDelay, ...props }),
		setOpen: (isOpen: boolean) => (isOpen ? state.close() : state.open()),
		toggle: () => (state.isOpen ? state.close(true) : state.open(true)),
	};
	const { triggerProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef);

	const { hoverProps } = useHover({
		onHoverStart: () => state?.open(),
		onHoverEnd: () => state?.close(),
	});

	return (
		<Provider
			values={[
				[OverlayTriggerStateContext, state],
				[
					PopoverContext,
					{
						triggerRef,
						isNonModal: true,
						trigger: 'DialogTrigger',
						UNSTABLE_portalContainer: ref.current ?? undefined,
					},
				],
			]}
		>
			<PressResponder {...triggerProps} ref={triggerRef}>
				<span {...hoverProps} ref={ref}>
					{children}
				</span>
			</PressResponder>
		</Provider>
	);
};

export { HoverTrigger };
export type { HoverTriggerProps };
