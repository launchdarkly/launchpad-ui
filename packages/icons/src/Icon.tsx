import type { VariantProps } from 'class-variance-authority';
import type { RefObject, SVGAttributes } from 'react';
import type { IconName } from './types';

import { cva } from 'class-variance-authority';
import { createContext, useContext } from 'react';

import styles from './styles/Icon.module.css';

const icon = cva(styles.base, {
	variants: {
		size: {
			tiny: styles.tiny,
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

const IconContext = createContext<IconProps>({});

interface IconProps extends SVGAttributes<SVGElement>, VariantProps<typeof icon> {
	name?: IconName;
	ref?: RefObject<SVGSVGElement | null>;
}

const Icon = ({
	name,
	className,
	children,
	focusable = false,
	role = 'img',
	size = 'medium',
	variant = 'default',
	ref,
	...props
}: IconProps) => {
	const ctx = useContext(IconContext);
	return (
		<svg
			aria-hidden={props['aria-hidden'] ?? (!props['aria-labelledby'] && !props['aria-label'])}
			focusable={focusable}
			role={role}
			className={icon({ size: ctx.size || size, variant, className })}
			data-icon={name}
			ref={ref}
			{...props}
		>
			{name && <use href={`#lp-icon-${name}`} />}
			{children}
		</svg>
	);
};

export { Icon, IconContext };
export type { IconProps };
