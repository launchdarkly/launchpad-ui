import type { ForwardedRef } from 'react';
import type { TextFieldProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	GroupContext,
	Provider,
	TextField as AriaTextField,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/TextField.module.css';

const field = cva(styles.field);

const _TextField = (props: TextFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
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

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const TextField = forwardRef(_TextField);

export { TextField };
export type { TextFieldProps };
