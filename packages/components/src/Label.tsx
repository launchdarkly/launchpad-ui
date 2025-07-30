import type { LabelProps as AriaLabelProps, ContextValue } from 'react-aria-components';

import { cx } from 'class-variance-authority';
import { createContext, forwardRef } from 'react';
import { Label as AriaLabel } from 'react-aria-components';

import styles from './styles/Label.module.css';
import { useLPContextProps } from './utils';

interface LabelProps extends Omit<AriaLabelProps, 'className'> {
	/** Maximum number of lines to display. Overflowing text will be truncated with an ellipsis. */
	maxLines?: number;
	/** Optional CSS class name */
	className?: AriaLabelProps['className'];
}

const LabelContext = createContext<ContextValue<LabelProps, HTMLLabelElement>>(null);

/**
 * A generic Label component for form labels.
 *
 * For body text, use `Text`. For headings, use `Heading`
 *
 * Built on top of [React Aria `Label` component](https://react-spectrum.adobe.com/react-spectrum/Label.html#label).
 */
const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ maxLines, className, style, ...props }, ref) => {
		const [contextProps, contextRef] = useLPContextProps(props, ref, LabelContext);

		return (
			<AriaLabel
				{...contextProps}
				ref={contextRef}
				className={cx(styles.label, maxLines && styles.truncate, className)}
				style={{
					...style,
					...(maxLines && {
						WebkitLineClamp: maxLines,
					}),
				}}
			>
				{contextProps.children}
			</AriaLabel>
		);
	},
);

Label.displayName = 'Label';

export { Label, LabelContext };
export type { LabelProps };
