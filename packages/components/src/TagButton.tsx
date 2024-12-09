import type { ForwardedRef } from 'react';
import type { ButtonProps } from 'react-aria-components';
import type { TagVariants } from './TagGroup';

import { forwardRef } from 'react';
import { composeRenderProps } from 'react-aria-components';

import { Button } from './Button';
import { tag } from './TagGroup';

interface TagButtonProps extends ButtonProps, Omit<TagVariants, 'variant'> {}

const _TagButton = (
	{ size = 'medium', ...props }: TagButtonProps,
	ref: ForwardedRef<HTMLButtonElement>,
) => {
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

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
const TagButton = forwardRef(_TagButton);

export { TagButton };
export type { TagButtonProps };
