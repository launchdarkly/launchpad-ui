import type { Ref } from 'react';
import type { ContextValue, RadioProps } from 'react-aria-components';
import type { ButtonVariants } from './Button';

import { createContext } from 'react';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { useLPContextProps } from './utils';

interface RadioButtonProps extends RadioProps, ButtonVariants {
	ref?: Ref<HTMLLabelElement>;
}

const RadioButtonContext = createContext<ContextValue<RadioButtonProps, HTMLLabelElement>>(null);

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioButton = ({ ref, ...props }: RadioButtonProps) => {
	[props, ref] = useLPContextProps(props, ref, RadioButtonContext);
	const { size = 'medium', variant = 'default' } = props;

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

export { RadioButton, RadioButtonContext };
export type { RadioButtonProps };
