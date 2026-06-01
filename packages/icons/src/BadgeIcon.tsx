import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import { cva, cx } from 'class-variance-authority';
import { createContext, useContext } from 'react';

import { IconContext } from './Icon';
import styles from './styles/BadgeIcon.module.css';

const badge = cva(styles.base, {
	variants: {
		size: {
			tiny: styles.tiny,
			small: styles.small,
			medium: styles.medium,
			large: styles.large,
		},
		variant: {
			default: styles.default,
			blue: styles.blue,
			cyan: styles.cyan,
			purple: styles.purple,
			pink: styles.pink,
			orange: styles.orange,
			lime: styles.lime,
			yellow: styles.lime,
			green: styles.lime,
			'gradient-1': styles.gradient1,
			'gradient-2': styles.gradient2,
			'gradient-3': styles.gradient3,
			'gradient-4': styles.gradient4,
			'gradient-5': styles.gradient5,
			'gradient-6': styles.gradient6,
			'gradient-7': styles.gradient7,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
	},
});

interface BadgeIconContextValue {
	className?: string;
}

const BadgeIconContext = createContext<BadgeIconContextValue>({});

interface BadgeIconProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badge> {}

const BadgeIcon = ({
	children,
	className,
	size = 'medium',
	variant = 'default',
	...props
}: BadgeIconProps) => {
	const ctx = useContext(BadgeIconContext);

	return (
		<div className={badge({ size, variant, className: cx(ctx.className, className) })} {...props}>
			<IconContext.Provider value={{ size }}>{children}</IconContext.Provider>
		</div>
	);
};

export { BadgeIcon, BadgeIconContext };
export type { BadgeIconContextValue, BadgeIconProps };
