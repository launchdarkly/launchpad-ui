import type { Ref } from 'react';
import type { ContextValue, ToggleButtonProps } from 'react-aria-components';
import type { IconButtonBaseProps } from './IconButton';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps, ToggleButton } from 'react-aria-components';

import { buttonStyles } from './Button';
import { iconButtonStyles } from './IconButton';
import { useLPContextProps } from './utils';

interface ToggleIconButtonProps
	extends Omit<ToggleButtonProps, 'children' | 'aria-label'>,
		IconButtonBaseProps {
	ref?: Ref<HTMLButtonElement>;
}

const ToggleIconButtonContext =
	createContext<ContextValue<ToggleIconButtonProps, HTMLButtonElement>>(null);

/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButton.html
 */
const ToggleIconButton = ({ ref, ...props }: ToggleIconButtonProps) => {
	[props, ref] = useLPContextProps(props, ref, ToggleIconButtonContext, 'ToggleIconButton');
	const { size = 'medium', variant = 'default', icon } = props;

	return (
		<ToggleButton
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(buttonStyles({ ...renderProps, size, variant, className }), iconButtonStyles({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</ToggleButton>
	);
};

export { ToggleIconButton, ToggleIconButtonContext };
export type { ToggleIconButtonProps };
