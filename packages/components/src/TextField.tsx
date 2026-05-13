import type { Ref } from 'react';
import type { ContextValue } from 'react-aria-components/slots';
import type { TextFieldProps as AriaTextFieldProps } from 'react-aria-components/TextField';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { GroupContext } from 'react-aria-components/Group';
import { Provider } from 'react-aria-components/slots';
import { TextField as AriaTextField } from 'react-aria-components/TextField';

import styles from './styles/TextField.module.css';
import { useLPContextProps } from './utils';

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
