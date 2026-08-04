import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import type { ToggleButtonProps } from 'react-aria-components/ToggleButton';
import { ToggleButton } from 'react-aria-components/ToggleButton';
import { cx } from 'class-variance-authority';

import { Icon } from '@launchpad-ui/icons';

import { buttonStyles } from './Button';
import type { IconButtonBaseProps } from './IconButton';
import { iconButtonStyles } from './IconButton';
import { useLPContextProps } from './utils';

interface ToggleIconButtonProps extends Omit<ToggleButtonProps, 'children' | 'aria-label'>, IconButtonBaseProps {
	ref?: Ref<HTMLButtonElement>;
}

const ToggleIconButtonContext = createContext<ContextValue<ToggleIconButtonProps, HTMLButtonElement>>(null);

/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButton.html
 */
const ToggleIconButton = ({ ref, ...props }: ToggleIconButtonProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, ToggleIconButtonContext);
	const { size = 'medium', variant = 'default', icon } = mergedProps;

	return (
		<ToggleButton
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				cx(buttonStyles({ ...renderProps, size, variant, className }), iconButtonStyles({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</ToggleButton>
	);
};

export { ToggleIconButton, ToggleIconButtonContext };
export type { ToggleIconButtonProps };
