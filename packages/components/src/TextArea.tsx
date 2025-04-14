import type { Ref } from 'react';
import type { TextAreaProps as AriaTextAreaProps, ContextValue } from 'react-aria-components';
import type { InputVariants } from './Input';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { TextArea as AriaTextArea, composeRenderProps } from 'react-aria-components';

import { inputStyles } from './Input';
import styles from './styles/TextArea.module.css';
import { useLPContextProps } from './utils';

const textAreaStyles = cva(styles.area);

interface TextAreaProps extends AriaTextAreaProps, InputVariants {
	ref?: Ref<HTMLTextAreaElement>;
}

const TextAreaContext = createContext<ContextValue<TextAreaProps, HTMLTextAreaElement>>(null);

/**
 * A textarea allows a user to input mult-line text.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const TextArea = ({ ref, ...props }: TextAreaProps) => {
	[props, ref] = useLPContextProps(props, ref, TextAreaContext);
	const { variant = 'default' } = props;

	return (
		<AriaTextArea
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(inputStyles({ variant }), textAreaStyles({ ...renderProps, className })),
			)}
		/>
	);
};

export { TextArea, TextAreaContext, textAreaStyles };
export type { TextAreaProps };
