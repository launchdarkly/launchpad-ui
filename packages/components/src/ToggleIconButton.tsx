import type { Ref } from 'react';
import type { ContextValue, ToggleButtonProps } from 'react-aria-components';
import type { IconButtonBaseProps } from './IconButton';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'class-variance-authority';
import { createContext } from 'react';
import { ToggleButton, composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { iconButton } from './IconButton';
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
	[props, ref] = useLPContextProps(props, ref, ToggleIconButtonContext);
	const { size = 'medium', variant = 'default', icon } = props;

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

export { ToggleIconButton, ToggleIconButtonContext };
export type { ToggleIconButtonProps };
