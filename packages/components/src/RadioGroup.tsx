import type { Ref } from 'react';
import type { RadioGroupProps as AriaRadioGroupProps } from 'react-aria-components/RadioGroup';
import type { ContextValue } from 'react-aria-components/slots';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { RadioGroup as AriaRadioGroup } from 'react-aria-components/RadioGroup';

import { type FieldHelperProps, renderFieldHelpers } from './fieldHelpers';
import styles from './styles/RadioGroup.module.css';
import { useLPContextProps } from './utils';

const radioGroupStyles = cva(styles.group);

interface RadioGroupProps extends AriaRadioGroupProps, FieldHelperProps {
	ref?: Ref<HTMLDivElement>;
}

const RadioGroupContext = createContext<ContextValue<RadioGroupProps, HTMLDivElement>>(null);

/**
 * A radio group allows a user to select a single item from a list of mutually exclusive options.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const RadioGroup = ({ ref, description, errorMessage, ...props }: RadioGroupProps) => {
	[props, ref] = useLPContextProps(props, ref, RadioGroupContext);
	return (
		<AriaRadioGroup
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				radioGroupStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children) =>
				renderFieldHelpers(children, { description, errorMessage }),
			)}
		</AriaRadioGroup>
	);
};

export { RadioGroup, RadioGroupContext, radioGroupStyles };
export type { RadioGroupProps };
