import type { VariantProps } from 'class-variance-authority';
import type { SVGAttributes } from 'react';
import type { IconName } from './types';

import { cva } from 'class-variance-authority';

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
}

const Icon = ({
	name,
	className,
	children,
	focusable = false,
	role = 'img',
	size = 'medium',
	variant = 'default',
	...props
}: IconProps) => {
	return (
		<svg
			aria-hidden={props['aria-hidden'] ?? (!props['aria-labelledby'] && !props['aria-label'])}
			focusable={focusable}
			role={role}
			className={icon({ size, variant, className })}
			data-icon={name}
			{...props}
		>
			{name && <use href={`#lp-icon-${name}`} />}
			{children}
		</svg>
	);
};

export { Icon };
export type { IconProps };
