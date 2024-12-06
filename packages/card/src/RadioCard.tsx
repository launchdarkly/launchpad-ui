import type { JSX, ReactNode } from 'react';

import { Radio, type RadioProps } from '@launchpad-ui/form';
import { cx } from 'classix';

import styles from './styles/Card.module.css';

export type RadioCardProps = RadioProps & {
	label: string | JSX.Element;
	id: string;
	subText?: ReactNode;
	imgSrc?: string;
	altText?: string;
};

/**
 * @deprecated use a custom `RadioGroup` from `react-aria-components` instead
 *
 * https://react-spectrum.adobe.com/react-aria/examples/shipping-radio.html
 */
export const RadioCard = ({
	label,
	subText,
	imgSrc,
	altText,
	id,
	value,
	checked,
	disabled = false,
	...rest
}: RadioCardProps) => (
	// Normally you'd want to pass the 'ref' attribute from the React Hook form field
	// but we can't do that because RadioGroup and Radio don't do a forward ref.
	// RHF uses the ref for focus management.
	<Radio
		id={id}
		className={styles.hideRadio}
		labelClassName={cx(
			styles.featureCard,
			subText ? styles.sub : '',
			disabled ? styles.disabledCard : '',
		)}
		checked={checked}
		disabled={disabled}
		data-test-id="card"
		{...rest}
		value={value}
	>
		<label htmlFor={id} className={styles.labelContainer}>
			{imgSrc && <img src={imgSrc} alt={altText} />}
			{label}
		</label>
		<div className={cx(styles.subtext, disabled ? styles.hide : '')}>{subText}</div>
	</Radio>
);
