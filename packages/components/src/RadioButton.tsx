import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { RadioProps } from 'react-aria-components/RadioGroup';
import { Radio as AriaRadio } from 'react-aria-components/RadioGroup';
import type { ContextValue } from 'react-aria-components/slots';

import type { ButtonVariants } from './Button';
import { buttonStyles } from './Button';
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
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, RadioButtonContext);
	const { size = 'medium', variant = 'default' } = mergedProps;

	return (
		<AriaRadio
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				buttonStyles({ ...renderProps, size, variant, className }),
			)}
		/>
	);
};

export { RadioButton, RadioButtonContext };
export type { RadioButtonProps };
