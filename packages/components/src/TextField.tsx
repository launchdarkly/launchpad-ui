import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { GroupContext } from 'react-aria-components/Group';
import type { ContextValue } from 'react-aria-components/slots';
import { Provider } from 'react-aria-components/slots';
import type { TextFieldProps as AriaTextFieldProps } from 'react-aria-components/TextField';
import { TextField as AriaTextField } from 'react-aria-components/TextField';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/TextField.module.css';

const textFieldStyles = cva(styles.field);

interface TextFieldProps extends AriaTextFieldProps {
	ref?: Ref<HTMLDivElement>;
}

const TextFieldContext = createContext<ContextValue<TextFieldProps, HTMLDivElement>>(null);

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const TextField = ({ ref, ...props }: TextFieldProps) => {
	// oxlint-disable-next-line no-param-reassign -- sanctioned useLPContextProps merge pattern (see AGENTS.md context+prop-merging convention)
	[props, ref] = useLPContextProps(props, ref, TextFieldContext);
	return (
		<AriaTextField
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				textFieldStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isInvalid, isDisabled }) => (
				<Provider values={[[GroupContext, { isInvalid, isDisabled }]]}>{children}</Provider>
			))}
		</AriaTextField>
	);
};

export { TextField, TextFieldContext, textFieldStyles };
export type { TextFieldProps };
