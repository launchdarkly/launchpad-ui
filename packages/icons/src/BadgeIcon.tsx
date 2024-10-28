import type { BoxProps } from '@launchpad-ui/box';
import type { VariantProps } from 'class-variance-authority';

import { Box } from '@launchpad-ui/box';
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
			yellow: styles.yellow,
			green: styles.green,
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

interface BadgeIconProps extends BoxProps, VariantProps<typeof badge> {}

const BadgeIcon = ({
	children,
	className,
	size = 'medium',
	variant = 'default',
	...props
}: BadgeIconProps) => {
	return (
		<Box className={badge({ size, variant, className })} {...props}>
			<IconContext.Provider value={{ size }}>{children}</IconContext.Provider>
		</Box>
	);
};

export { BadgeIcon };
export type { BadgeIconProps };
