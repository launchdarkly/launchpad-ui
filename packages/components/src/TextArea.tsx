import type { RefObject } from 'react';
import type { TextAreaProps as AriaTextAreaProps } from 'react-aria-components';
import type { InputVariants } from './Input';

import { cva, cx } from 'class-variance-authority';
import { TextArea as AriaTextArea, composeRenderProps } from 'react-aria-components';

import { input } from './Input';
import styles from './styles/TextArea.module.css';

const area = cva(styles.area);

interface TextAreaProps extends AriaTextAreaProps, InputVariants {
	ref?: RefObject<HTMLTextAreaElement | null>;
}

/**
 * A textarea allows a user to input mult-line text.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const TextArea = ({ variant = 'default', ref, ...props }: TextAreaProps) => {
	return (
		<AriaTextArea
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(input({ variant }), area({ ...renderProps, className })),
			)}
		/>
	);
};

export { TextArea };
export type { TextAreaProps };
