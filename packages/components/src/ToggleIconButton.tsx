import type { RefObject } from 'react';
import type { ToggleButtonProps } from 'react-aria-components';
import type { IconButtonBaseProps } from './IconButton';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'class-variance-authority';
import { ToggleButton, composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { iconButton } from './IconButton';

interface ToggleIconButtonProps
	extends Omit<ToggleButtonProps, 'children' | 'aria-label'>,
		IconButtonBaseProps {
	ref?: RefObject<HTMLButtonElement | null>;
}

/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButton.html
 */
const ToggleIconButton = ({
	size = 'medium',
	variant = 'default',
	icon,
	ref,
	...props
}: ToggleIconButtonProps) => {
	return (
		<ToggleButton
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(button({ ...renderProps, size, variant, className }), iconButton({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</ToggleButton>
	);
};

export { ToggleIconButton };
export type { ToggleIconButtonProps };
