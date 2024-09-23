import type { VariantProps } from 'class-variance-authority';
import type { SVGAttributes } from 'react';
import type { IconName } from './types';

import { useLabels } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { useId } from 'react';

import styles from './styles/Icon.module.css';

const icon = cva(styles.base, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
			large: styles.large,
		},
		variant: {
			default: styles.default,
			subtle: styles.subtle,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
	},
});

interface IconProps extends SVGAttributes<SVGElement>, VariantProps<typeof icon> {
	name?: IconName;
	title?: string;
	description?: string;
}

const Icon = ({
	name,
	className,
	children,
	title,
	description,
	focusable = false,
	role = 'img',
	size = 'medium',
	variant = 'default',
	...props
}: IconProps) => {
	const titleId = useId();
	const descriptionId = useId();
	const labelProps = useLabels({
		'aria-labelledby': title ? titleId : props['aria-labelledby'],
		...props,
	});

	return (
		<svg
			aria-describedby={description ? descriptionId : props['aria-describedby']}
			aria-hidden={props['aria-hidden'] ?? (!props['aria-labelledby'] && !props['aria-label'])}
			focusable={focusable}
			role={role}
			className={icon({ size, variant, className })}
			{...props}
			{...labelProps}
		>
			{title && <title id={titleId}>{title}</title>}
			{description && <desc id={descriptionId}>{description}</desc>}
			{children || <use href={`#lp-icon-${name}`} />}
		</svg>
	);
};

export { Icon };
export type { IconProps };
