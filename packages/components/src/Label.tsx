import type { Ref } from 'react';
import type { LabelProps as AriaLabelProps, ContextValue } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { Label as AriaLabel } from 'react-aria-components';

import styles from './styles/Label.module.css';
import { useLPContextProps } from './utils';

/** variant names are based on Figma's naming convention */
export type LabelVariant = 'label1Regular' | 'label1Medium' | 'label2Regular' | 'label2Medium';

const labelStyles = cva(styles.label, {
	variants: {
		variant: {
			label1Regular: styles.label1Regular,
			label1Medium: styles.label1Medium,
			label2Regular: styles.label2Regular,
			label2Medium: styles.label2Medium,
		},
	},
});

interface LabelProps extends Omit<AriaLabelProps, 'className'> {
	ref?: Ref<HTMLLabelElement>;
	/** Typography variant following LaunchPad design system typography tokens. */
	variant?: LabelVariant;
	/** Text alignment */
	align?: 'left' | 'center' | 'right';
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
const Label = ({ ref, variant, maxLines, className, style, ...props }: LabelProps) => {
	[props, ref] = useLPContextProps(props, ref, LabelContext);

	return (
		<AriaLabel
			{...props}
			ref={ref}
			className={cx(variant && labelStyles({ variant }), maxLines && styles.truncate, className)}
			style={{
				...style,
				...(maxLines && {
					WebkitLineClamp: maxLines,
				}),
			}}
		>
			{props.children}
		</AriaLabel>
	);
};

export { Label, LabelContext, labelStyles };
export type { LabelProps };
