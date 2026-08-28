import type { HTMLAttributes } from 'react';
import { createContext, useContext } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

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

interface BadgeIconProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badge> {}

/**
 * Lets a composing component drive the badge size. As with `IconContext`, the context value takes
 * precedence over the prop so the badge cannot drift out of scale with its container.
 */
const BadgeIconContext = createContext<BadgeIconProps>({});

const BadgeIcon = ({ children, className, size = 'medium', variant = 'default', ...props }: BadgeIconProps) => {
	const ctx = useContext(BadgeIconContext);
	const resolvedSize = ctx.size || size;

	return (
		<div className={badge({ size: resolvedSize, variant, className })} {...props}>
			<IconContext.Provider value={{ size: resolvedSize }}>{children}</IconContext.Provider>
		</div>
	);
};

export { BadgeIcon, BadgeIconContext };
export type { BadgeIconProps };
