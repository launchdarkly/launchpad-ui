import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import type { TextAreaProps as AriaTextAreaProps } from 'react-aria-components/TextArea';
import { TextArea as AriaTextArea } from 'react-aria-components/TextArea';
import { cva, cx } from 'class-variance-authority';

import type { InputVariants } from './Input';
import { inputStyles } from './Input';
import { useLPContextProps } from './utils';

import styles from './styles/TextArea.module.css';

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
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, TextAreaContext);
	const { variant = 'default' } = mergedProps;

	return (
		<AriaTextArea
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				cx(inputStyles({ variant }), textAreaStyles({ ...renderProps, className })),
			)}
		/>
	);
};

export { TextArea, TextAreaContext, textAreaStyles };
export type { TextAreaProps };
