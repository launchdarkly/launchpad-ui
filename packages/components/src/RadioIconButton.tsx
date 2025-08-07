import type { Ref } from 'react';
import type { ContextValue, RadioProps } from 'react-aria-components';
import type { IconButtonBaseProps } from './IconButton';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'class-variance-authority';
import { createContext } from 'react';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import { buttonStyles } from './Button';
import { iconButtonStyles } from './IconButton';
import { useLPContextProps } from './utils';

interface RadioIconButtonProps
	extends Omit<RadioProps, 'children' | 'aria-label'>,
		IconButtonBaseProps {
	ref?: Ref<HTMLLabelElement>;
}

const RadioIconButtonContext =
	createContext<ContextValue<RadioIconButtonProps, HTMLLabelElement>>(null);

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioIconButton = ({ ref, ...props }: RadioIconButtonProps) => {
	[props, ref] = useLPContextProps(props, ref, RadioIconButtonContext, 'RadioIconButton');
	const { size = 'medium', variant = 'default', icon } = props;

	return (
		<AriaRadio
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(buttonStyles({ ...renderProps, size, variant, className }), iconButtonStyles({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</AriaRadio>
	);
};

export { RadioIconButton, RadioIconButtonContext };
export type { RadioIconButtonProps };
