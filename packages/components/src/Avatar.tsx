import type { IconProps } from '@launchpad-ui/icons';
import type { VariantProps } from 'class-variance-authority';
import type { ImgHTMLAttributes, RefObject, SVGAttributes } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { cva, cx } from 'class-variance-authority';

import styles from './styles/Avatar.module.css';
import { useImageLoadingStatus } from './utils';

const avatar = cva(styles.base, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
			large: styles.large,
		},
	},
	defaultVariants: {
		size: 'medium',
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
}

interface IconAvatarProps extends Omit<IconProps, 'size'>, AvatarVariants {
	ref?: RefObject<SVGSVGElement | null>;
}

interface InitialsAvatarProps extends SVGAttributes<SVGElement>, AvatarVariants {}

const Avatar = ({ className, children, size = 'medium', ref, src, ...props }: AvatarProps) => {
	const status = useImageLoadingStatus(src);

	if (status === 'error') {
		return children ? (
			<InitialsAvatar size={size}>{children}</InitialsAvatar>
		) : (
			<IconAvatar size={size} />
		);
	}

	// biome-ignore lint/a11y/useAltText: <explanation>
	return status === 'loaded' ? (
		<img ref={ref} src={src} {...props} className={avatar({ size, className })} />
	) : null;
};

const IconAvatar = ({ className, size = 'medium', name = 'person', ...props }: IconAvatarProps) => {
	return (
		<Icon
			name={name}
			size={size}
			className={cx(avatar({ size, className }), styles.icon)}
			{...props}
		/>
	);
};

const InitialsAvatar = ({
	className,
	size = 'medium',
	children,
	...props
}: InitialsAvatarProps) => {
	const color = children
		? (children.toString().charCodeAt(0) + children.toString().charCodeAt(1)) % 5
		: 0;
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			role="img"
			className={cx(
				avatar({ size, className }),
				colors({ color: color as keyof typeof colors }),
				styles.initials,
			)}
			viewBox="0 0 24 24"
			{...props}
		>
			<text x="50%" y="50%" className={styles.text}>
				{children}
			</text>
		</svg>
	);
};

export { Avatar, IconAvatar, InitialsAvatar };
export type { AvatarProps, IconAvatarProps, InitialsAvatarProps };
