import type { Ref } from 'react';
import type { RadioProps } from 'react-aria-components';
import type { IconButtonBaseProps } from './IconButton';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'class-variance-authority';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { iconButton } from './IconButton';

interface RadioIconButtonProps
	extends Omit<RadioProps, 'children' | 'aria-label'>,
		IconButtonBaseProps {
	ref?: Ref<HTMLLabelElement>;
}

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioIconButton = ({
	size = 'medium',
	variant = 'default',
	icon,
	ref,
	...props
}: RadioIconButtonProps) => {
	return (
		<AriaRadio
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(button({ ...renderProps, size, variant, className }), iconButton({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</AriaRadio>
	);
};

export { RadioIconButton };
export type { RadioIconButtonProps };
