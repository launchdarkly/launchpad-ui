import type { RefObject } from 'react';
import type { RadioProps } from 'react-aria-components';
import type { ButtonVariants } from './Button';

import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import { button } from './Button';

interface RadioButtonProps extends RadioProps, ButtonVariants {
	ref?: RefObject<HTMLLabelElement | null>;
}

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioButton = ({ size = 'medium', variant = 'default', ref, ...props }: RadioButtonProps) => {
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

export { RadioButton };
export type { RadioButtonProps };
