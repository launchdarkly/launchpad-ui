import type { VariantProps } from 'class-variance-authority';
import type { ImgHTMLAttributes, Ref, SVGAttributes } from 'react';

import { mergeProps, useLabels } from '@react-aria/utils';
import { cva, cx } from 'class-variance-authority';

import styles from './styles/Avatar.module.css';
import { useImageLoadingStatus } from './utils';

const avatarStyles = cva(styles.base, {
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

interface AvatarVariants extends VariantProps<typeof avatarStyles> {}

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>, AvatarVariants {
	ref?: Ref<HTMLImageElement>;
}

interface InitialsAvatarProps extends SVGAttributes<SVGElement>, AvatarVariants {}

const Avatar = ({ className, children, size = 'medium', ref, src, ...props }: AvatarProps) => {
	const status = useImageLoadingStatus(src);
	const labelProps = useLabels(props);

	if (status !== 'loaded') {
		return (
			<InitialsAvatar className={className} size={size} {...labelProps}>
				{children}
			</InitialsAvatar>
		);
	}

	// biome-ignore lint/a11y/useAltText: ignore
	return (
		<img
			ref={ref}
			src={src}
			{...mergeProps(props, labelProps)}
			className={avatarStyles({ size, className })}
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
		// biome-ignore lint/a11y/noSvgWithoutTitle: ignore
		<svg
			role="img"
			className={cx(
				avatarStyles({ size, className }),
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

export { Avatar, InitialsAvatar, avatarStyles };
export type { AvatarProps, InitialsAvatarProps };
