import type { ComponentProps, KeyboardEvent } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Form.module.css';
import { createFieldErrorId } from './utils';

type TextAreaProps = ComponentProps<'textarea'> & {
	'data-test-id'?: string;
};

/**
 * @deprecated use `TextArea` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-textfield--docs#multi%20line
 */
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ className, 'data-test-id': testId = 'text-area', ...props }, ref) => {
		const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
			if (
				e.key === 'ArrowRight' ||
				e.key === 'ArrowDown' ||
				e.key === 'ArrowUp' ||
				e.key === 'ArrowLeft'
			) {
				e.stopPropagation();
			}
			if (e.key === 'Escape') {
				e.nativeEvent.stopImmediatePropagation();
			}
		};

		return (
			<textarea
				{...addLaunchPadAttribution('TextArea')}
				{...props}
				className={cx(styles.formInput, className)}
				ref={ref}
				data-test-id={testId}
				aria-describedby={props['aria-describedby'] || createFieldErrorId(props.id)}
				onKeyDown={onKeyDown}
			/>
		);
	},
);

TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaProps };
