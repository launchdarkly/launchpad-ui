import type { Ref } from 'react';
import type { ContextValue } from 'react-aria-components/slots';
import type { TextAreaProps as AriaTextAreaProps } from 'react-aria-components/TextArea';
import type { InputVariants } from './Input';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { TextArea as AriaTextArea } from 'react-aria-components/TextArea';

import { inputStyles } from './Input';
import styles from './styles/TextArea.module.css';
import { useLPContextProps } from './utils';

const textAreaStyles = cva(styles.area);

interface TextAreaProps extends AriaTextAreaProps, Omit<InputVariants, 'size'> {
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
	const { variant = 'default', ...rest } = props;

	return (
		<AriaTextArea
			{...rest}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(inputStyles({ variant }), textAreaStyles({ ...renderProps, className })),
			)}
		/>
	);
};

export { TextArea, TextAreaContext, textAreaStyles };
export type { TextAreaProps };
