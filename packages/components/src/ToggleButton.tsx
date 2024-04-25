import type { ForwardedRef } from 'react';
import type { ToggleButtonProps as AriaToggleButtonProps } from 'react-aria-components';
import type { ButtonVariants } from './Button';

import { forwardRef } from 'react';
import { ToggleButton as AriaToggleButton, composeRenderProps } from 'react-aria-components';

import { button } from './Button';

interface ToggleButtonProps extends AriaToggleButtonProps, ButtonVariants {}

const _ToggleButton = (
	{ size = 'medium', variant = 'default', ...props }: ToggleButtonProps,
	ref: ForwardedRef<HTMLButtonElement>,
) => {
	return (
		<AriaToggleButton
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({ ...renderProps, size, variant, className }),
			)}
		/>
	);
};

/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButton.html
 */
const ToggleButton = forwardRef(_ToggleButton);

export { ToggleButton };
export type { ToggleButtonProps };
