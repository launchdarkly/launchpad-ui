import type { RefObject } from 'react';
import type { ButtonProps } from 'react-aria-components';
import type { TagVariants } from './TagGroup';

import { composeRenderProps } from 'react-aria-components';

import { Button } from './Button';
import { tag } from './TagGroup';

interface TagButtonProps extends ButtonProps, Omit<TagVariants, 'variant'> {
	ref?: RefObject<HTMLButtonElement | null>;
}

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
const TagButton = ({ size = 'medium', ref, ...props }: TagButtonProps) => {
	return (
		<Button
			{...props}
			ref={ref}
			variant="default"
			size={null}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tag({ ...renderProps, size, variant: null, className }),
			)}
		/>
	);
};

export { TagButton };
export type { TagButtonProps };
