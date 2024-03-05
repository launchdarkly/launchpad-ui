import type { ForwardedRef } from 'react';
import type { TextAreaProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { TextArea as AriaTextArea, composeRenderProps } from 'react-aria-components';

import styles from './styles/Input.module.css';
import { forwardRef } from './utils';

const input = cva(styles.input);

const _TextArea = (props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
	return (
		<AriaTextArea
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				input({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A textarea allows a user to input mult-line text.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const TextArea = forwardRef(_TextArea);

export { TextArea };
export type { TextAreaProps };
