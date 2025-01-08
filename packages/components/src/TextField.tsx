import type { RefObject } from 'react';
import type { TextFieldProps as AriaTextFieldProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	TextField as AriaTextField,
	GroupContext,
	Provider,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/TextField.module.css';

const field = cva(styles.field);

interface TextFieldProps extends AriaTextFieldProps {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const TextField = ({ ref, ...props }: TextFieldProps) => {
	return (
		<AriaTextField
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				field({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isInvalid, isDisabled }) => (
				<Provider values={[[GroupContext, { isInvalid, isDisabled }]]}>{children}</Provider>
			))}
		</AriaTextField>
	);
};

export { TextField };
export type { TextFieldProps };
