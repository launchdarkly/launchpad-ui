import type { ComponentProps, CSSProperties } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';

import { Label } from './Label';
import styles from './styles/Form.module.css';

type RadioProps = Omit<ComponentProps<'input'>, 'type'> & {
	labelClassName?: string;
	labelStyle?: CSSProperties;
	'data-test-id'?: string;
};

/**
 * @deprecated use `RadioGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-radiogroup--docs
 */
const Radio = ({
	'aria-label': ariaLabel,
	'aria-labelledby': ariaLabelledby,
	checked = false,
	children,
	className,
	disabled = false,
	id,
	labelClassName,
	labelStyle,
	'data-test-id': testId = 'radio',
	...rest
}: RadioProps) => {
	const hasAriaLabel = ariaLabel !== undefined || ariaLabelledby !== undefined;

	if (!children && !hasAriaLabel) {
		console.warn(
			'If you do not provide children, you must specify an aria-label for accessibility',
		);
	}

	return (
		<div {...addLaunchPadAttribution('Radio')}>
			<input
				{...rest}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledby}
				className={cx(styles.radio, className)}
				checked={checked}
				disabled={disabled}
				id={id}
				data-test-id={testId}
				type="radio"
			/>
			<Label className={labelClassName} htmlFor={id} style={labelStyle}>
				{disabled ? <span className={styles.labelDisabled}>{children}</span> : children}
			</Label>
		</div>
	);
};

export { Radio };
export type { RadioProps };
