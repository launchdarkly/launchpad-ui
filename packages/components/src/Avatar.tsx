import type { IconProps } from '@launchpad-ui/icons';
import type { VariantProps } from 'class-variance-authority';
import type { ImgHTMLAttributes, RefObject } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { cva, cx } from 'class-variance-authority';

import styles from './styles/Avatar.module.css';

const avatar = cva(styles.base, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
			large: styles.large,
		},
		variant: {
			icon: styles.icon,
			image: styles.image,
			initials: styles.initials,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'icon',
	},
});

const colors = cva(null, {
	variants: {
		color: {
			0: styles.yellow,
			1: styles.blue,
			2: styles.pink,
			3: styles.cyan,
			4: styles.purple,
		},
	},
});

interface AvatarVariants extends VariantProps<typeof avatar> {}

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>, AvatarVariants {
	ref?: RefObject<HTMLImageElement | null>;
	icon?: IconProps['name'];
}

const Avatar = ({
	className,
	children,
	size = 'medium',
	variant = 'image',
	icon = 'person',
	ref,
	...props
}: AvatarProps) => {
	if (variant === 'icon') {
		return <Icon name={icon} size={size} className={avatar({ size, variant, className })} />;
	}

	if (variant === 'initials') {
		const color = children
			? (children.toString().charCodeAt(0) + children.toString().charCodeAt(1)) % 5
			: 0;
		return (
			<svg
				role="img"
				aria-label={props.alt}
				className={cx(
					avatar({ size, variant, className }),
					colors({ color: color as keyof typeof colors }),
				)}
				viewBox="0 0 24 24"
			>
				<text x="50%" y="50%" className={styles.text}>
					{children}
				</text>
			</svg>
		);
	}

	// biome-ignore lint/a11y/useAltText: <explanation>
	return <img ref={ref} {...props} className={avatar({ size, variant, className })} />;
};

export { Avatar };
export type { AvatarProps };
