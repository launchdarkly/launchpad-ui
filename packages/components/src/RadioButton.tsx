import type { ForwardedRef } from 'react';
import type { RadioProps } from 'react-aria-components';
import type { ButtonVariants } from './Button';

import { forwardRef } from 'react';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import { button } from './Button';

interface RadioButtonProps extends RadioProps, ButtonVariants {}

const _RadioButton = (
	{ size = 'medium', variant = 'default', ...props }: RadioButtonProps,
	ref: ForwardedRef<HTMLLabelElement>,
) => {
	return (
		<AriaRadio
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({ ...renderProps, size, variant, className }),
			)}
		/>
	);
};

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioButton = forwardRef(_RadioButton);

export { RadioButton };
export type { RadioButtonProps };
