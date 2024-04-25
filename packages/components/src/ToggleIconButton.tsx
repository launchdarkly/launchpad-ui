import type { IconProps } from '@launchpad-ui/icons';
import type { AriaLabelingProps } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { ToggleButtonProps } from 'react-aria-components';
import type { IconButtonVariants } from './IconButton';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import { ToggleButton, composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { iconButton } from './IconButton';

interface ToggleIconButtonProps
	extends Omit<ToggleButtonProps, 'children' | 'aria-label'>,
		Required<Pick<AriaLabelingProps, 'aria-label'>>,
		IconButtonVariants {
	icon: IconProps['name'];
}

const _ToggleIconButton = (
	{ size = 'medium', variant = 'default', icon, ...props }: ToggleIconButtonProps,
	ref: ForwardedRef<HTMLButtonElement>,
) => {
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

/**
 * A Toggle represents an individual option within a Toggle group.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleGroup.html
 */
const ToggleIconButton = forwardRef(_ToggleIconButton);

export { ToggleIconButton };
export type { ToggleIconButtonProps };
