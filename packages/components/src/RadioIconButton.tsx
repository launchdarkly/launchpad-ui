import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { RadioProps } from 'react-aria-components/RadioGroup';
import { Radio as AriaRadio } from 'react-aria-components/RadioGroup';
import type { ContextValue } from 'react-aria-components/slots';
import { cx } from 'class-variance-authority';

import { Icon } from '@launchpad-ui/icons';

import { buttonStyles } from './Button';
import type { IconButtonBaseProps } from './IconButton';
import { iconButtonStyles } from './IconButton';
import { useLPContextProps } from './utils';

interface RadioIconButtonProps extends Omit<RadioProps, 'children' | 'aria-label'>, IconButtonBaseProps {
	ref?: Ref<HTMLLabelElement>;
}

const RadioIconButtonContext = createContext<ContextValue<RadioIconButtonProps, HTMLLabelElement>>(null);

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioIconButton = ({ ref, ...props }: RadioIconButtonProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, RadioIconButtonContext);
	const { size = 'medium', variant = 'default', icon } = mergedProps;

	return (
		<AriaRadio
			{...mergedProps}
			ref={mergedRef}
			data-lp-variant={variant}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				cx(buttonStyles({ ...renderProps, size, variant, className }), iconButtonStyles({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</AriaRadio>
	);
};

export { RadioIconButton, RadioIconButtonContext };
export type { RadioIconButtonProps };
