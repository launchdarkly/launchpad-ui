import type { LabelProps as AriaLabelProps, ContextValue } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext, type Ref } from 'react';
import { Label as AriaLabel } from 'react-aria-components';

import styles from './styles/Label.module.css';
import { useLPContextProps } from './utils';

const labelStyles = cva(styles.label);

interface LabelProps extends Omit<AriaLabelProps, 'className'> {
	ref?: Ref<HTMLLabelElement>;
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
const Label = ({ ref, maxLines, className, style, ...props }: LabelProps) => {
	const [contextProps, contextRef] = useLPContextProps(props, ref, LabelContext);

	return (
		<AriaLabel
			{...contextProps}
			ref={contextRef}
			className={cx(labelStyles({ className }), maxLines && styles.truncate)}
			style={{
				...style,
				...(maxLines && {
					WebkitLineClamp: maxLines,
				}),
			}}
		/>
	);
};

Label.displayName = 'Label';

export { Label, LabelContext };
export type { LabelProps };
